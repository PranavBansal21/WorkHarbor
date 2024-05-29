import Post from "@/models/postModel";
import Service from "@/models/serviceModel";
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

    // console.log(imageUrls);
    let user;
    if (token.role == 0) {
      user = await User.findById(token.id);
    } else {
      const sp = await Service.findById(token.id).populate("owner");
      user = sp.owner;
    }
    const newPost = new Post({
      title,
      description,
      city,
      state,
      phone,
      image: imageUrls[0],
      tags: selectedTags,
      owner: user._id,
    });
    // console.log(user);
    await newPost.save();
    user.posts.push(newPost);
    await user.save();
    return NextResponse.json({ message: "Post Uploaded", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
