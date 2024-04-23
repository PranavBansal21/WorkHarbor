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
    user.role = 1;

    const serv = new Service({
      title: step1.businessName,
      description: step2.about,
      owner: user,
      city: step1.city,
      state: step1.state,
      pincode: step1.pincode,
      buildingName: step1.buildingName,
      streetName: step1.streetName,
      area: step1.area,
      landMark: step1.landMark,
      previousWorks: [...step3],
      businessEmail: step2.email,
      businessPhone: step2.phone,
      frontImg: user.image,
      backImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwzeftP-__7V4AGUzXOOSX9ALqUHDxRUqigsPGGTaxA&s",
    });

    await serv.save();
    await user.save();
    const newToken = jwt.sign(
      {
        id: serv._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      process.env.NEXT_PUBLIC_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    const response = NextResponse.json(serv);
    response.cookies.set("token", newToken, { httpOnly: true });
    return response;
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
