import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const login = body.login;
    const password = body.password;

    if (!login || !password) {
      return NextResponse.json(
        {
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
    });

    response.cookies.set("user_role", user.role, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        message: "Ошибка сервера",
      },
      {
        status: 500,
      }
    );
  }
}