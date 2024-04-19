"use client";
import Image from "next/image";
import Link from "next/link";
import Initial from "./components/Home/initial";
import About from "./components/Home/about";
import Services from "./components/Home/services";
import Contact from "./components/Home/contact";

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
            <div className="inika text-white text-2xl hover:underline decoration-black decoration-4 underline-offset-8">
              {link.text}
            </div>
          </Link>
        ))}
      </div>
      <div className="fixed z-10 flex gap-5 text-white text-2xl inika mt-5 right-7">
        <div>
          <Link
            href="/login"
            className="inika hover:underline decoration-black decoration-4 underline-offset-8"
          >
            Login
          </Link>
        </div>
        <div>
          <Link    
            href="/signup"
            className="inika hover:underline decoration-black decoration-4 underline-offset-8"
          >
            Signup
          </Link>
        </div>
      </div>

      <Initial />

      <About />

      <Services />

      <Contact />
    </div>
  );
}
