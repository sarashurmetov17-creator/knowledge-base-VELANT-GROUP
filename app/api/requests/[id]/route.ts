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

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

// PUT — редактировать запрос
export async function PUT(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

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
      .update({
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
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("PUT requests error:", error);

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
      status: 200,
    });
  } catch (error) {
    console.error(
      "PUT /api/requests/[id] error:",
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

// DELETE — удалить запрос
export async function DELETE(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

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

    const { error } = await supabase
      .from("requests")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("DELETE requests error:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "DELETE /api/requests/[id] error:",
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