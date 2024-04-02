import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import { NextResponse } from "next/server";
import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 500 });
    }
    const passCheck = compareSync(password, user.password);
    if (!passCheck) {
      return NextResponse.json({ error: "Wrong password" }, { status: 400 });
    }
    const tokenData = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      role:user.role,
    };
    const token = await jwt.sign(tokenData, process.env.NEXT_PUBLIC_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (err) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
