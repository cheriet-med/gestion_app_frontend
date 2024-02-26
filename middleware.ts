import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let isLogin = request.cookies.get("__Secure-next-auth.session-token");

  if (!isLogin) {
    if (request.nextUrl.pathname.startsWith("/account")) {
      return NextResponse.rewrite(new URL("/", request.url));
    }
  }


}