import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

const supabase = createClient(
  supabaseUrl,
  supabaseKey
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
      console.error("Ошибка получения запросов:", error);

      return NextResponse.json(
        {
          error: "Не удалось получить запросы",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error(error);

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


    // Проверяем обязательные поля

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


    // Добавляем запись

    const { data, error } = await supabase
      .from("requests")
      .insert([
        {
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
        },
      ])
      .select()
      .single();


    if (error) {
      console.error("Ошибка добавления:", error);

      return NextResponse.json(
        {
          error: "Не удалось сохранить запрос",
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
    console.error(error);

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