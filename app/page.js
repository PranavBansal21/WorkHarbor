"use client";
import Image from "next/image";
import Link from "next/link";
import Initial from "./components/Home/initial";
import About from "./components/Home/about";

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

      <Initial />

      <About />

      <div
        id="contact"
        className="relative h-screen w-screen bg-opacity-0 about"
      >
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
