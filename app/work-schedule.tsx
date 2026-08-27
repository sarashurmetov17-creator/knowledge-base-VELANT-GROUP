"use client";

import { useEffect, useState } from "react";

type WorkSchedule = {
  id: number;
  company: string;

  bank_1: string | null;
  bank_2: string | null;
  bank_3: string | null;
  bank_4: string | null;
  bank_5: string | null;

  statements: string | null;

  time_08_10: string | null;
  time_10_12: string | null;
  time_12_14: string | null;
  time_14_16: string | null;
  time_16_20: string | null;
};

const companyWidth = 220;
const bankWidth = 105;

export default function WorkSchedule() {
  const [schedule, setSchedule] = useState<WorkSchedule[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSchedule() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          "/api/work-schedule",
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const text = await response.text();

        let result: unknown = [];

        if (text.trim()) {
          try {
            result = JSON.parse(text);
          } catch {
            throw new Error(
              "Сервер вернул некорректный ответ"
            );
          }
        }

        if (!response.ok) {
          const errorResult = result as {
            error?: string;
          };

          throw new Error(
            errorResult?.error ||
              `Ошибка загрузки графика: ${response.status}`
          );
        }

        if (!Array.isArray(result)) {
          throw new Error(
            "Неверный формат данных графика"
          );
        }

        setSchedule(result);
      } catch (error) {
        console.error(
          "Ошибка загрузки графика:",
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : "Не удалось загрузить график"
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadSchedule();
  }, []);

  return (
    <section
      id="work-schedule"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* ==================================================
            ЗАГОЛОВОК
        ================================================== */}

        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
              Рабочий график
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              График работ по компаниям
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Банки и ответственные сотрудники по временным интервалам
            </p>
          </div>

          <div className="text-sm text-slate-500">
            Компаний:{" "}
            <span className="font-semibold text-slate-900">
              {schedule.length}
            </span>
          </div>

        </div>


        {/* ==================================================
            ОШИБКА
        ================================================== */}

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        )}


        {/* ==================================================
            ТАБЛИЦА
        ================================================== */}

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

          {isLoading ? (

            <div className="px-6 py-12 text-center">
              <div className="text-4xl">
                ⏳
              </div>

              <p className="mt-3 font-medium text-slate-900">
                Загрузка графика...
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Получаем данные из базы
              </p>
            </div>

          ) : schedule.length === 0 ? (

            <div className="px-6 py-12 text-center">

              <div className="text-4xl">
                📅
              </div>

              <p className="mt-3 font-medium text-slate-900">
                График пока пуст
              </p>

            </div>

          ) : (

            <div className="relative overflow-x-auto">

              <table className="border-collapse text-sm">

                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">

                    {/* КОМПАНИЯ */}

                    <th
                      className="sticky left-0 z-40 border-r border-slate-200 bg-slate-50 px-4 py-4 text-left font-semibold shadow-[4px_0_8px_-8px_rgba(0,0,0,0.4)]"
                      style={{
                        width: companyWidth,
                        minWidth: companyWidth,
                      }}
                    >
                      Компания
                    </th>


                    {/* БАНК 1 */}

                    <th
                      className="sticky z-40 border-r border-slate-200 bg-slate-50 px-4 py-4 text-left font-semibold"
                      style={{
                        left: companyWidth,
                        width: bankWidth,
                        minWidth: bankWidth,
                      }}
                    >
                      Банк 1
                    </th>


                    {/* БАНК 2 */}

                    <th
                      className="sticky z-40 border-r border-slate-200 bg-slate-50 px-4 py-4 text-left font-semibold"
                      style={{
                        left:
                          companyWidth +
                          bankWidth,
                        width: bankWidth,
                        minWidth: bankWidth,
                      }}
                    >
                      Банк 2
                    </th>


                    {/* БАНК 3 */}

                    <th
                      className="sticky z-40 border-r border-slate-200 bg-slate-50 px-4 py-4 text-left font-semibold"
                      style={{
                        left:
                          companyWidth +
                          bankWidth * 2,
                        width: bankWidth,
                        minWidth: bankWidth,
                      }}
                    >
                      Банк 3
                    </th>


                    {/* БАНК 4 */}

                    <th
                      className="sticky z-40 border-r border-slate-200 bg-slate-50 px-4 py-4 text-left font-semibold"
                      style={{
                        left:
                          companyWidth +
                          bankWidth * 3,
                        width: bankWidth,
                        minWidth: bankWidth,
                      }}
                    >
                      Банк 4
                    </th>


                    {/* БАНК 5 */}

                    <th
                      className="sticky z-40 border-r border-slate-200 bg-slate-50 px-4 py-4 text-left font-semibold shadow-[6px_0_10px_-8px_rgba(0,0,0,0.5)]"
                      style={{
                        left:
                          companyWidth +
                          bankWidth * 4,
                        width: bankWidth,
                        minWidth: bankWidth,
                      }}
                    >
                      Банк 5
                    </th>


                    {/* ВЫПИСКИ */}

                    <th
                      className="border-r border-slate-200 px-4 py-4 text-left font-semibold"
                      style={{
                        width: 110,
                        minWidth: 110,
                      }}
                    >
                      Выписки
                    </th>


                    {/* 8–10 */}

                    <th
                      className="border-r border-slate-200 px-4 py-4 text-left font-semibold"
                      style={{
                        width: 110,
                        minWidth: 110,
                      }}
                    >
                      8–10 мск
                    </th>


                    {/* 10–12 */}

                    <th
                      className="border-r border-slate-200 px-4 py-4 text-left font-semibold"
                      style={{
                        width: 110,
                        minWidth: 110,
                      }}
                    >
                      10–12 мск
                    </th>


                    {/* 12–14 */}

                    <th
                      className="border-r border-slate-200 px-4 py-4 text-left font-semibold"
                      style={{
                        width: 110,
                        minWidth: 110,
                      }}
                    >
                      12–14 мск
                    </th>


                    {/* 14–16 */}

                    <th
                      className="border-r border-slate-200 px-4 py-4 text-left font-semibold"
                      style={{
                        width: 110,
                        minWidth: 110,
                      }}
                    >
                      14–16 мск
                    </th>


                    {/* 16–20 */}

                    <th
                      className="px-4 py-4 text-left font-semibold"
                      style={{
                        width: 110,
                        minWidth: 110,
                      }}
                    >
                      16–20 мск
                    </th>

                  </tr>
                </thead>


                <tbody>

                  {schedule.map((item) => (

                    <tr
                      key={item.id}
                      className="border-b border-slate-100 last:border-0"
                    >

                      {/* КОМПАНИЯ */}

                      <td
                        className="sticky left-0 z-30 border-r border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 shadow-[4px_0_8px_-8px_rgba(0,0,0,0.4)]"
                        style={{
                          width: companyWidth,
                          minWidth: companyWidth,
                        }}
                      >
                        {item.company}
                      </td>


                      {/* БАНК 1 */}

                      <td
                        className="sticky z-30 border-r border-slate-200 bg-white px-4 py-3"
                        style={{
                          left: companyWidth,
                          width: bankWidth,
                          minWidth: bankWidth,
                        }}
                      >
                        {item.bank_1 || "—"}
                      </td>


                      {/* БАНК 2 */}

                      <td
                        className="sticky z-30 border-r border-slate-200 bg-white px-4 py-3"
                        style={{
                          left:
                            companyWidth +
                            bankWidth,
                          width: bankWidth,
                          minWidth: bankWidth,
                        }}
                      >
                        {item.bank_2 || "—"}
                      </td>


                      {/* БАНК 3 */}

                      <td
                        className="sticky z-30 border-r border-slate-200 bg-white px-4 py-3"
                        style={{
                          left:
                            companyWidth +
                            bankWidth * 2,
                          width: bankWidth,
                          minWidth: bankWidth,
                        }}
                      >
                        {item.bank_3 || "—"}
                      </td>


                      {/* БАНК 4 */}

                      <td
                        className="sticky z-30 border-r border-slate-200 bg-white px-4 py-3"
                        style={{
                          left:
                            companyWidth +
                            bankWidth * 3,
                          width: bankWidth,
                          minWidth: bankWidth,
                        }}
                      >
                        {item.bank_4 || "—"}
                      </td>


                      {/* БАНК 5 */}

                      <td
                        className="sticky z-30 border-r border-slate-200 bg-white px-4 py-3 shadow-[6px_0_10px_-8px_rgba(0,0,0,0.5)]"
                        style={{
                          left:
                            companyWidth +
                            bankWidth * 4,
                          width: bankWidth,
                          minWidth: bankWidth,
                        }}
                      >
                        {item.bank_5 || "—"}
                      </td>


                      {/* ВЫПИСКИ */}

                      <td className="border-r border-slate-100 px-4 py-3">
                        {item.statements || "—"}
                      </td>


                      {/* 8–10 */}

                      <td className="border-r border-slate-100 px-4 py-3">
                        {item.time_08_10 || "—"}
                      </td>


                      {/* 10–12 */}

                      <td className="border-r border-slate-100 px-4 py-3">
                        {item.time_10_12 || "—"}
                      </td>


                      {/* 12–14 */}

                      <td className="border-r border-slate-100 px-4 py-3">
                        {item.time_12_14 || "—"}
                      </td>


                      {/* 14–16 */}

                      <td className="border-r border-slate-100 px-4 py-3">
                        {item.time_14_16 || "—"}
                      </td>


                      {/* 16–20 */}

                      <td className="px-4 py-3">
                        {item.time_16_20 || "—"}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>
    </section>
  );
}