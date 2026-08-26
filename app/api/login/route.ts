import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const login = body.login;
    const password = body.password;

    // Временные данные администратора
    if (login === "admin" && password === "admin123") {
      const response = NextResponse.json({
        success: true,
        role: "admin",
      });

      response.cookies.set("auth", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      response.cookies.set("role", "admin", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      return response;
    }

    return NextResponse.json(
      {
        success: false,
        message: "Неверный логин или пароль",
      },
      {
        status: 401,
      }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Ошибка сервера",
      },
      {
        status: 500,
      }
    );
  }
}