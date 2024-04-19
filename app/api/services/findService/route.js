import { connect } from "@/dbConfig/dbConfig";
import Service from "@/models/serviceModel";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import Review from "@/models/reviewModel";
//User and Review are required for populate
connect();

export async function POST(req) {
  const { userid } = await req.json();
  const user = await Service.findById(userid)
    .populate("owner")
    .populate("reviews");
  const res = NextResponse.json(user);
  return res;
}
