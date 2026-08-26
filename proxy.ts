import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Страница входа доступна без авторизации
  if (pathname === "/login") {
    return NextResponse.next();
  }

  // Проверяем наличие авторизации
  const auth = request.cookies.get("auth")?.value;

  // Если пользователь не авторизован —
  // отправляем его на страницу входа
  if (auth !== "true") {
    const loginUrl = new URL("/login", request.url);

    return NextResponse.redirect(loginUrl);
  }

  // Пользователь авторизован
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