import Post from "@/models/postModel";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const postData = await Post.find();
    return NextResponse.json(postData);
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
