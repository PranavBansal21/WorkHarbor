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

export const irish_grover = Irish_Grover({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-irish_grover",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inika.variable} ${irish_grover.variable}`} >
      <body>{children}</body>
    </html>
  );
}
