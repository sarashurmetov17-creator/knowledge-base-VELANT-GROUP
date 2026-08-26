import { NextRequest, NextResponse } from "next/server";

const users = [
  {
    login: "admin",
    password: "admin123",
    role: "admin",
  },
  {
    login: "user1",
    password: "user123",
    role: "user",
  },
  {
    login: "user2",
    password: "user123",
    role: "user",
  },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const login = body.login;
    const password = body.password;

    if (!login || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Введите логин и пароль",
        },
        {
          status: 400,
        }
      );
    }

    const user = users.find(
      (item) =>
        item.login === login &&
        item.password === password
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Неверный логин или пароль",
        },
        {
          status: 401,
        }
      );
    }

    const response = NextResponse.json({
      success: true,
      role: user.role,
    });

    response.cookies.set("auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    response.cookies.set("role", user.role, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
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