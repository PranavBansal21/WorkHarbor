import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;
  const loginSignup = path === "/login" || path === "/signup";
  const token = req.cookies.get("token");

  if (token && loginSignup) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  const registerRoute = path === "/register";
  if (!token && registerRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/login", "/signup", "/register"],
};
