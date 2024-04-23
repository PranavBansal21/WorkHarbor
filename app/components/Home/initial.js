"use client"
import Image from "next/image";
import Link from "next/link";

export default function Initial() {
  return (
    <div id="home" className="relative h-screen w-screen bg-opacity-0 home flex justify-center">

      <div className="absolute inset-0 bg-customHome opacity-90" />

      <div className="absolute w-min top-[45%] -translate-y-1/2 text-center">
        <h1 className="inika animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-6xl text-white font-bold">
          Connecting Service Providers with Seekers
        </h1>
        <br />
        <br />
        <h2 className="inika text-3xl text-white">
          Find the Right person for the Right work at the Right place
        </h2>
      </div>
      <Link href="/services">
        <button
          className="absolute z-0 text-xl hover:text-black bg-blue-100 rounded-lg -translate-y-1/2 -translate-x-1/2 text-center top-3/4 left-1/2 p-5 hover:bg-white hover:opacity-100 opacity-70"
        >
          <span className="inika z-10 text-black font-semimedium">
            Our Services
          </span>
        </button>
      </Link>
    </div>
  )
}

