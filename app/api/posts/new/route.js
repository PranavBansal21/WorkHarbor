import Post from "@/models/postModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      title,
      description,
      phone,
      city,
      state,
      selectedTags,
      imageUrls,
      token,
    } = await req.json();

    const newPost = new Post({
      title,
      description,
      city,
      state,
      phone,
      image: imageUrls[0],
      tags: selectedTags,
      owner: token.id,
    });
    console.log(imageUrls);
    const user = await User.findById(token.id);
    await newPost.save();
    user.posts.push(newPost);
    await user.save();
    return NextResponse.json({ message: "Post Uploaded", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
