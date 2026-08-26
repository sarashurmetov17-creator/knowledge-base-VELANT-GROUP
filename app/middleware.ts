import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET || "temporary-secret"
);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  const pathname = request.nextUrl.pathname;

  // Страница входа доступна без авторизации
  if (pathname === "/login") {
    return NextResponse.next();
  }

  // API входа доступен без авторизации
  if (pathname.startsWith("/api/login")) {
    return NextResponse.next();
  }

  // Если токена нет — отправляем на страницу входа
  if (!token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  try {
    await jwtVerify(token, secret);

    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(
      new URL("/login", request.url)
    );

    response.cookies.delete("auth-token");

    return response;
  }
}

export const config = {
  matcher: [
    "/",
    "/instructions/:path*",
    "/work-regulations/:path*",
    "/admin/:path*",
  ],
};