import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL не задан");
}

if (!supabaseSecretKey) {
  throw new Error("SUPABASE_SECRET_KEY не задан");
}

const supabase = createClient(
  supabaseUrl,
  supabaseSecretKey
);

// GET — получить все запросы
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("requests")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error("GET requests error:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(data ?? [], {
      status: 200,
    });
  } catch (error) {
    console.error("GET /api/requests error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Ошибка сервера",
      },
      {
        status: 500,
      }
    );
  }
}

// POST — создать новый запрос
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      company,
      bank,
      date,
      problem,
      comment,
      employee,
      destination,
      nextSteps,
      deadline,
      status,
    } = body;

    if (
      !company ||
      !bank ||
      !date ||
      !problem ||
      !employee ||
      !status
    ) {
      return NextResponse.json(
        {
          error: "Не заполнены обязательные поля",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await supabase
      .from("requests")
      .insert({
        company,
        bank,
        date,
        problem,
        comment: comment || null,
        employee,
        destination: destination || null,
        next_steps: nextSteps || null,
        deadline: deadline || null,
        status,
      })
      .select()
      .single();

    if (error) {
      console.error("POST requests error:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(data, {
      status: 201,
    });
  } catch (error) {
    console.error("POST /api/requests error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Ошибка сервера",
      },
      {
        status: 500,
      }
    );
  }
}