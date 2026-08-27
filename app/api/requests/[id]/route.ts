import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey =
  process.env.SUPABASE_SECRET_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_URL не задан"
  );
}

if (!supabaseKey) {
  throw new Error(
    "SUPABASE_SECRET_KEY или NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY не задан"
  );
}

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);


// =====================================================
// PUT — РЕДАКТИРОВАНИЕ
// =====================================================

export async function PUT(
  request: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await context.params;

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
          error:
            "Не заполнены обязательные поля",
        },
        {
          status: 400,
        }
      );
    }


    // Обновляем запись

    const { data, error } =
      await supabase
        .from("requests")
        .update({
          company,
          bank,
          date,
          problem,
          comment:
            comment || null,
          employee,
          destination:
            destination || null,
          next_steps:
            nextSteps || null,
          deadline:
            deadline || null,
          status,
        })
        .eq("id", id)
        .select()
        .single();


    if (error) {
      console.error(
        "Ошибка редактирования:",
        error
      );

      return NextResponse.json(
        {
          error:
            "Не удалось изменить запрос",
        },
        {
          status: 500,
        }
      );
    }


    return NextResponse.json(data);

  } catch (error) {
    console.error(
      "Ошибка PUT:",
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


// =====================================================
// DELETE — УДАЛЕНИЕ
// =====================================================

export async function DELETE(
  request: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await context.params;


    const { error } =
      await supabase
        .from("requests")
        .delete()
        .eq("id", id);


    if (error) {
      console.error(
        "Ошибка удаления:",
        error
      );

      return NextResponse.json(
        {
          error:
            "Не удалось удалить запрос",
        },
        {
          status: 500,
        }
      );
    }


    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(
      "Ошибка DELETE:",
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