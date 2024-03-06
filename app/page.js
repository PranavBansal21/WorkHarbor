// "use client";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { NextResponse } from "next/server";

import Image from "next/image";

export default function Home() {
  // const router = useRouter();
  // const logout = async () => {
  //   try {
  //     await axios.get("/api/users/logout");
  //     router.push("/login");
  //   } catch (error) {
  //     return NextResponse.json({ error: error.message, status: 500 });
  //   }
  // };
  return (
    <div
      className="relative h-screen w-screen"
    >
      {/* <button onClick={logout}>LOGOUT</button> */}/
      <Image
        src="/Images/background.jpg"
        fill={true}
      />
      <div
        className="absolute top-1/2 left-1/2 bg-white -translate-x-1/2 -translate-y-1/2"
      >
        <h1>
          Welcome to Sling Academy!
        </h1>
      </div>
    </div>
  );
}
