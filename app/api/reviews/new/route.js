import Review from "@/models/reviewModel";
import Service from "@/models/serviceModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { rating, comment, token, serviceProvider } = await req.json();
    const spInfo = await Service.findOne({ _id: serviceProvider });
    const newReview = new Review({
      stars: rating,
      comment: comment,
      owner: token.id,
      serviceProvider,
    });

    const updatedStars = (
      (spInfo.reviews.length * spInfo.stars + Number(rating)) /
      (spInfo.reviews.length + 1)
    ).toFixed(1);
    spInfo.stars = updatedStars;
    spInfo.reviews.push(newReview);
    await spInfo.save();
    await newReview.save();
    return NextResponse.json({ message: "Review added", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
