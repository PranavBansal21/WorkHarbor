import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import Service from "@/models/serviceModel";

connect();

export async function POST(req) {
  try {
    const x = await req.json();
    const { step1, step2, step3 } = x.formData;
    const token = req.cookies.get("token");
    const decodedToken = jwt.verify(
      token.value,
      process.env.NEXT_PUBLIC_TOKEN_SECRET
    );

    const user = await User.findOne({ _id: decodedToken.id });
    console.log(x.formData);
    user.role = 1;
    user.phone = step2.phone;
    user.email = step2.email;

    const serv = new Service({
      title: step1.businessName,
      description: "djbcj",
      owner: user,
      city: step1.city,
      state: step1.state,
      pincode: step1.pincode,
      buildingName: step1.buildingName,
      streetName: step1.streetName,
      area: step1.area,
      landMark: step1.landMark,
      previousWorks: [...step3],
    });

    await serv.save();
    await user.save();
    return NextResponse.json(serv);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
