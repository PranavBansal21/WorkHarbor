import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { firstName, lastName, email, phone, password, confirmPassword } =
      reqBody;
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    if (password != confirmPassword) {
      return NextResponse.json(
        { message: "Password does not match" },
        { status: 400 }
      );
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      image:
        "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
      role: 0,
    });
    const savedUser = await newUser.save();
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
