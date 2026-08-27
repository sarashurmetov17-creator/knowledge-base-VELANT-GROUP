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


// ==========================================
// GET — получить все запросы
// ==========================================

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("requests")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(
        "Ошибка получения запросов:",
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
      "Ошибка GET /api/requests:",
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


// ==========================================
// POST — создать новый запрос
// ==========================================

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    console.log(
      "Получен запрос:",
      body
    );

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


    // ==========================================
    // ПРОВЕРКА ОБЯЗАТЕЛЬНЫХ ПОЛЕЙ
    // ==========================================

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
          error:
            "Не заполнены обязательные поля",
        },
        {
          status: 400,
        }
      );
    }


    // ==========================================
    // СОХРАНЕНИЕ В SUPABASE
    // ==========================================

    const { data, error } =
      await supabase
        .from("requests")
        .insert({
          company: company,
          bank: bank,
          date: date,
          problem: problem,
          comment: comment || null,
          employee: employee,
          destination:
            destination || null,
          next_steps:
            nextSteps || null,
          deadline:
            deadline || null,
          status: status,
        })
        .select()
        .single();


    // ==========================================
    // ОШИБКА SUPABASE
    // ==========================================

    if (error) {
      console.error(
        "Ошибка Supabase INSERT:",
        error
      );

      return NextResponse.json(
        {
          error:
            error.message,
          details:
            error.details,
          hint:
            error.hint,
          code:
            error.code,
        },
        {
          status: 500,
        }
      );
    }


    console.log(
      "Запрос успешно сохранён:",
      data
    );


    // ==========================================
    // ВОЗВРАЩАЕМ СОХРАНЁННУЮ ЗАПИСЬ
    // ==========================================

    return NextResponse.json(
      data,
      {
        status: 201,
      }
    );

  } catch (error) {
    console.error(
      "Ошибка POST /api/requests:",
      error
    );

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