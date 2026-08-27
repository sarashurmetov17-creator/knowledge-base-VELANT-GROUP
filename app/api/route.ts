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
// GET — получить все запросы
// =====================================================

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
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(data || []);

  } catch (error) {
    console.error("GET /api/requests:", error);

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
// POST — создать новый запрос
// =====================================================

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
    console.error("POST /api/requests:", error);

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
// PUT — редактировать запрос
// =====================================================

export async function PUT(request: Request) {
  try {
    const body = await request.json();

    const {
      id,
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
      console.error("Ошибка редактирования:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error("PUT /api/requests:", error);

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
// DELETE — удалить запрос
// =====================================================

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

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
      console.error("Ошибка удаления:", error);

      return NextResponse.json(
        {
          error: error.message,
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
    console.error("DELETE /api/requests:", error);

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