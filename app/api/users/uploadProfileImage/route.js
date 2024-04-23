import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { imageUrl, userId } = await req.json();
    const user = await User.findById(userId);
    console.log(user);
    user.image = imageUrl;
    await user.save();
    return NextResponse.json({ message: "image uploaded", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
