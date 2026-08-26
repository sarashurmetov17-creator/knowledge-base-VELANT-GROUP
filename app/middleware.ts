import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const auth = request.cookies.get("auth")?.value;
  const role = request.cookies.get("role")?.value;

  const pathname = request.nextUrl.pathname;

  // Страница входа доступна всем
  if (pathname === "/login") {
    return NextResponse.next();
  }

  // Если пользователь не вошёл —
  // отправляем его на страницу входа
  if (auth !== "true") {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Админ-панель доступна только администратору
  if (pathname.startsWith("/admin")) {
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Остальные страницы доступны всем авторизованным пользователям
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