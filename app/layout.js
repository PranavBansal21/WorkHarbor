import "./globals.css"
import {Irish_Grover} from "next/font/google";
import {Inika} from "next/font/google";

export const metadata = {
  title: "WorkHarbour",
  description: "One time solution for service proviers and service seekers",
};

export const inika = Inika({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inika",
})

export const irishgrover = Irish_Grover({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-irishgrover",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inika.variable} ${irishgrover.variable}`} >
      <body>{children}</body>
    </html>
  );
}
