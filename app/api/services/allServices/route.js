import { connect } from "@/dbConfig/dbConfig";
import Service from "@/models/serviceModel";
import { NextResponse } from "next/server";

connect();

export async function POST() {
  const all = await Service.find();
  return NextResponse.json(all);
}
