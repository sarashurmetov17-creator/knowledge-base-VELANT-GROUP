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


// =====================================================
// PUT — редактировать существующий запрос
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


    // -----------------------------------------------
    // Проверяем ID
    // -----------------------------------------------

    if (!id) {
      return NextResponse.json(
        {
          error: "Не указан ID запроса",
        },
        {
          status: 400,
        }
      );
    }


    // -----------------------------------------------
    // Проверяем обязательные поля
    // -----------------------------------------------

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


    // -----------------------------------------------
    // Обновляем запись
    // -----------------------------------------------

    const { data, error } =
      await supabase
        .from("requests")
        .update({
          company: company,
          bank: bank,
          date: date,
          problem: problem,
          comment: comment || null,
          employee: employee,
          destination: destination || null,
          next_steps: nextSteps || null,
          deadline: deadline || null,
          status: status,
        })
        .eq("id", id)
        .select()
        .single();


    // -----------------------------------------------
    // Обработка ошибки
    // -----------------------------------------------

    if (error) {
      console.error(
        "Ошибка редактирования:",
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


    // -----------------------------------------------
    // Возвращаем изменённую запись
    // -----------------------------------------------

    return NextResponse.json(data);

  } catch (error) {
    console.error(
      "PUT /api/requests/[id]:",
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


// =====================================================
// DELETE — удалить существующий запрос
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


    // -----------------------------------------------
    // Проверяем ID
    // -----------------------------------------------

    if (!id) {
      return NextResponse.json(
        {
          error: "Не указан ID запроса",
        },
        {
          status: 400,
        }
      );
    }


    // -----------------------------------------------
    // Удаляем запись
    // -----------------------------------------------

    const { error } =
      await supabase
        .from("requests")
        .delete()
        .eq("id", id);


    // -----------------------------------------------
    // Обработка ошибки
    // -----------------------------------------------

    if (error) {
      console.error(
        "Ошибка удаления:",
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


    // -----------------------------------------------
    // Успешное удаление
    // -----------------------------------------------

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(
      "DELETE /api/requests/[id]:",
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