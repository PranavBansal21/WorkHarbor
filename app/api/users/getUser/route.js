import User from "@/models/userModel";
import { NextResponse } from "next/server";
import Post from "@/models/postModel";

export async function POST(req) {
  try {
    const { userId } = await req.json();
    console.log(userId);
    const user = await User.findById(userId).populate("posts");
    console.log(user);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
