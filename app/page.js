"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export default function Home() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      return NextResponse.json({ error: error.message, status: 500 });
    }
  };
  return (
    <>
      <button onClick={logout}>LOGOUT</button>
    </>
  );
}
