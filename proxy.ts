import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const auth = request.cookies.get("auth")?.value;
  const role = request.cookies.get("role")?.value;

  // Страница входа доступна всем
  if (pathname === "/login") {
    return NextResponse.next();
  }

  // Если пользователь не авторизован
  if (auth !== "true") {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  // Админ-панель доступна только администратору
  if (
    pathname.startsWith("/admin") &&
    role !== "admin"
  ) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/instructions/:path*",
    "/work-regulations/:path*",
    "/admin/:path*",
  ],
};