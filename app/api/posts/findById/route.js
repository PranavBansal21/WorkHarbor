import Post from "@/models/postModel";
import { NextResponse } from "next/server";
import User from "@/models/userModel";

export async function POST(req) {
  try {
    const { postId } = await req.json();
    const post = await Post.findById(postId).populate("owner");
    console.log(post);
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
