import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId } = await req.json();
    const user = await User.findById(userId).populate("posts");
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
