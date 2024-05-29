import Service from "@/models/serviceModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { imageUrl, userId } = await req.json();
    const user = await Service.findById(userId).populate("owner");
    // console.log(user);
    const pageowner = user.owner;
    pageowner.image = imageUrl;
    user.frontImg = imageUrl;
    await pageowner.save();
    await user.save();
    return NextResponse.json({ message: "image uploaded", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
