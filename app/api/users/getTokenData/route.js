import { getTokenData } from "@/utils/getTokenData";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req){
    try {
        const token = req.cookies.get("token");
        const decodedToken = jwt.verify(token.value, process.env.NEXT_PUBLIC_TOKEN_SECRET);
        return NextResponse.json(decodedToken);
    } catch (err) {
        return NextResponse.json({error:err.message,status:500});
    }
}