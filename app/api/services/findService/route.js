import { connect } from "@/dbConfig/dbConfig";
import Service from "@/models/serviceModel";
import { NextResponse } from "next/server";

connect();

export async function POST(req) {
  const {userid} = await req.json()
  const user = await Service.findById(userid);
  const res = NextResponse.json(user);
  return res;
}
