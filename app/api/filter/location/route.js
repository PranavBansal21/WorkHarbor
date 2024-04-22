import Service from "@/models/serviceModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const searchvalue = await req.json();
    const val = searchvalue.searchValue;
    const all = await Service.find({ city: val });
    return NextResponse.json(all);
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
