import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL не задан");
}

if (!supabaseKey) {
  throw new Error("SUPABASE_SECRET_KEY не задан");
}

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("work_schedule")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error(
        "Ошибка получения графика:",
        error
      );

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error(
      "GET /api/work-schedule:",
      error
    );

    return NextResponse.json(
      {
        error: "Ошибка сервера",
      },
      {
        status: 500,
      }
    );
  }
}