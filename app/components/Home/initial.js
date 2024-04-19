"use client"
import Image from "next/image";
import Link from "next/link";

export default function Initial() {
  return (
    <div id="home" className="relative h-screen w-screen bg-opacity-0 home">
      <Image
        src="/Images/background.jpg"
        fill={true}
        quality={100}
        style={{
          opacity: 0.9,
        }}
        priority
      />
      <div className="absolute w-full top-[45%] -translate-y-1/2 text-center">
        <h1>
          <span className="inika text-6xl text-black">
            Connecting Service Providers <br /> with Seekers
          </span>
        </h1>
        <br />
        <h2 className="inika text-2xl text-black">
          Find the Right person for the Right work at the Right place
        </h2>
      </div>
      <Link href="/services">
        <button
          className="absolute z-10 text-white text-xl bg-black rounded-[20px] -translate-y-1/2 -translate-x-1/2 text-center top-2/3 left-1/2 p-3"
          style={{
            opacity: 0.8,
          }}
        >
          Our Services
        </button>
      </Link>
    </div>
  )
}

