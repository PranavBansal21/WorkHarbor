"use client";
import Image from "next/image";
import Link from "next/link";

const links = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div>
      <div className="fixed z-10 flex gap-5 ml-10 mt-5">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <div className="inika text-white text-xl hover:underline decoration-black decoration-4 underline-offset-8">
              {link.text}
            </div>
          </Link>
        ))}
      </div>
      <div className="fixed z-10 flex gap-5 text-white text-xl inika mt-5 right-7">
        <div>
          <Link
            href="/login"
            className="hover:underline decoration-black decoration-4 underline-offset-8"
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            href="/signup"
            className="hover:underline decoration-black decoration-4 underline-offset-8"
          >
            Signup
          </Link>
        </div>
      </div>

      <div id="home" className="relative h-screen w-screen bg-opacity-0 home">
        {/* <button onClick={logout}>LOGOUT</button> */}/
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
            <span className="block inika text-6xl text-white bg-clip-text text-transparent">
              Connecting Service Providers <br /> with Seekers
            </span>
          </h1>
          <br />
          <h2 className="inika text-2xl text-white">
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

      <div id="about" className="relative h-screen w-screen bg-opacity-0 about">
        {/* <button onClick={logout}>LOGOUT</button> */}/
        <Image
          src="/Images/service.jpg"
          fill={true}
          quality={100}
          onScroll={{
            opacity: 0.6,
          }}
          style={{
            opacity: 0.9,
          }}
          priority
        />
      </div>

      <div
        id="contact"
        className="relative h-screen w-screen bg-opacity-0 about"
      >
        {/* <button onClick={logout}>LOGOUT</button> */}/
        <Image
          src="/Images/service.jpg"
          fill={true}
          quality={100}
          onScroll={{
            opacity: 0.6,
          }}
          style={{
            opacity: 0.9,
          }}
          priority
        />
      </div>
    </div>
  );
}
