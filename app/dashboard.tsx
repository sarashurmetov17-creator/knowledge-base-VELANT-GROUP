"use client";

import { useEffect, useState } from "react";

const companies = [
  "СТИГРУПП",
  "СТИНГ",
  "ПИПЛКРАФТ",
  "СБИ",
  "УК АЛЬЯНС",
  "ВОРКБРАЙТ",
  "ПРЕССБУК",
  "БИЛЛТРЕЙД",
  "ТИНАДАР",
  "ССС",
  "МОС-ТРАДО",
  "ПРАЙМСТРОЙ",
  "АНО ТСК",
  "БМТ",
  "ТРИУМФ",
  "НЬЮГРАД",
  "СИ",
  "СБ ЗАЩИТА",
  "ПЛАГА",
  "АИТЭРА",
  "ЭВЕЛИН",
  "КОСМОС СИТИ",
  "БЛИНКФОРТ",
  "ИЛЕОН ГРУППЭ",
  "БАЛЧУГ",
  "МИТРЕЙД",
  "ЭВОЛЮТ ТД",
  "ВЕКТОР АЛЬФА",
  "ВОРКЛЭНД",
  "ИСТЕЙТ",
  "Принтшоппе",
  "Лайн",
  "ДеливериСтафф",
  "Бенивента",
  "Парус",
  "Модус",
  "СуперДос",
  "Инсторадио",
  "Веритас",
  "Гелиос Резерв",
  "Солана",
  "Аристократ",
  "Флай Финанс",
  "АНО ЦНПНИ",
  "БФ Делаем добрые дела",
  "Флай Капитал",
  "Позитив",
  "Профи Финанс",
  "Сервис Проект",
];

const banks = [
  "Альфа",
  "ВТБ",
  "Сбер",
  "РРБ",
  "ГПБ",
  "ПСБ",
  "Экспо",
  "Абсолют",
  "МТС",
  "Точка",
  "ТКБ",
  "РСХБ",
];

const employees = [
  "Игорь",
  "Евгений",
  "Андрей",
  "Матвей",
  "Данил",
  "Володя",
  "Дмитрий",
  "Олег",
  "Марк",
  "Павел",
  "Кристина",
  "Богдан",
  "Артур",
  "Самсон",
  "Тамара",
];

const statuses = [
  "Контроль",
  "Закрыт",
  "В работе",
];

type RequestItem = {
  id: number;
  company: string;
  bank: string;
  date: string;
  problem: string;
  comment: string | null;
  employee: string;
  destination: string | null;
  nextSteps: string | null;
  deadline: string | null;
  status: string;
};

type FormData = {
  company: string;
  bank: string;
  date: string;
  problem: string;
  comment: string;
  employee: string;
  destination: string;
  nextSteps: string;
  deadline: string;
  status: string;
};

const emptyForm: FormData = {
  company: "",
  bank: "",
  date: "",
  problem: "",
  comment: "",
  employee: "",
  destination: "",
  nextSteps: "",
  deadline: "",
  status: "Контроль",
};

export default function Dashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [requests, setRequests] = useState<RequestItem[]>([]);

  const [form, setForm] = useState<FormData>({
    ...emptyForm,
  });

  const [isLoading, setIsLoading] = useState(true);

  const [isSaving, setIsSaving] = useState(false);

  const [deletingId, setDeletingId] = useState<number | null>(null);

  // =========================================================
  // ЗАГРУЗКА ЗАПРОСОВ
  // =========================================================

  async function loadRequests() {
    try {
      setIsLoading(true);

      const response = await fetch("/api/requests", {
        method: "GET",
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Не удалось загрузить запросы"
        );
      }

      const formattedData: RequestItem[] = result.map(
        (item: any) => ({
          id: item.id,
          company: item.company,
          bank: item.bank,
          date: item.date,
          problem: item.problem,
          comment: item.comment,
          employee: item.employee,
          destination: item.destination,
          nextSteps: item.next_steps,
          deadline: item.deadline,
          status: item.status,
        })
      );

      setRequests(formattedData);
    } catch (error) {
      console.error(
        "Ошибка загрузки запросов:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Не удалось загрузить запросы"
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  // =========================================================
  // ИЗМЕНЕНИЕ ПОЛЕЙ ФОРМЫ
  // =========================================================

  function updateForm(
    field: keyof FormData,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  // =========================================================
  // ОТКРЫТЬ ФОРМУ ДЛЯ НОВОГО ЗАПРОСА
  // =========================================================

  function openForm() {
    setEditingId(null);

    setForm({
      ...emptyForm,
    });

    setIsFormOpen(true);
  }

  // =========================================================
  // РЕДАКТИРОВАНИЕ
  // =========================================================

  function editRequest(request: RequestItem) {
    setEditingId(request.id);

    setForm({
      company: request.company || "",
      bank: request.bank || "",
      date: request.date || "",
      problem: request.problem || "",
      comment: request.comment || "",
      employee: request.employee || "",
      destination: request.destination || "",
      nextSteps: request.nextSteps || "",
      deadline: request.deadline || "",
      status: request.status || "Контроль",
    });

    setIsFormOpen(true);
  }

  // =========================================================
  // СОХРАНЕНИЕ
  // НОВЫЙ ЗАПРОС ИЛИ РЕДАКТИРОВАНИЕ
  // =========================================================

  async function saveRequest() {
    if (
      !form.company ||
      !form.bank ||
      !form.date ||
      !form.problem ||
      !form.employee ||
      !form.status
    ) {
      alert("Заполните обязательные поля.");
      return;
    }

    try {
      setIsSaving(true);

      // =====================================================
      // РЕДАКТИРОВАНИЕ
      // =====================================================

      if (editingId !== null) {
        const response = await fetch(
          `/api/requests/${editingId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.error ||
              "Не удалось изменить запрос"
          );
        }

        const updatedRequest: RequestItem = {
          id: result.id,
          company: result.company,
          bank: result.bank,
          date: result.date,
          problem: result.problem,
          comment: result.comment,
          employee: result.employee,
          destination: result.destination,
          nextSteps: result.next_steps,
          deadline: result.deadline,
          status: result.status,
        };

        setRequests((prev) =>
          prev.map((item) =>
            item.id === editingId
              ? updatedRequest
              : item
          )
        );

        alert("Запрос успешно изменён.");
      }

      // =====================================================
      // НОВЫЙ ЗАПРОС
      // =====================================================

      else {
        const response = await fetch(
          "/api/requests",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.error ||
              "Не удалось сохранить запрос"
          );
        }

        const newRequest: RequestItem = {
          id: result.id,
          company: result.company,
          bank: result.bank,
          date: result.date,
          problem: result.problem,
          comment: result.comment,
          employee: result.employee,
          destination: result.destination,
          nextSteps: result.next_steps,
          deadline: result.deadline,
          status: result.status,
        };

        setRequests((prev) => [
          newRequest,
          ...prev,
        ]);
      }

      // =====================================================
      // ОЧИЩАЕМ ФОРМУ
      // =====================================================

      setForm({
        ...emptyForm,
      });

      setEditingId(null);

      setIsFormOpen(false);

    } catch (error) {
      console.error(
        "Ошибка сохранения:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Не удалось сохранить запрос"
      );
    } finally {
      setIsSaving(false);
    }
  }

  // =========================================================
  // УДАЛЕНИЕ
  // =========================================================

  async function deleteRequest(id: number) {
    const confirmed = window.confirm(
      "Вы действительно хотите удалить этот запрос?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      const response = await fetch(
        `/api/requests/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Не удалось удалить запрос"
        );
      }

      setRequests((prev) =>
        prev.filter(
          (request) => request.id !== id
        )
      );

    } catch (error) {
      console.error(
        "Ошибка удаления:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Не удалось удалить запрос"
      );
    } finally {
      setDeletingId(null);
    }
  }

  // =========================================================
  // ЗАКРЫТИЕ ФОРМЫ
  // =========================================================

  function closeForm() {
    if (isSaving) {
      return;
    }

    setForm({
      ...emptyForm,
    });

    setEditingId(null);

    setIsFormOpen(false);
  }

  // =========================================================
  // HTML
  // =========================================================

  return (
    <section
      id="dashboard"
      className="border-b border-slate-200 bg-slate-100"
    >
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
              Dashboard
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Запросы и задачи
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Добавление и контроль обращений по компаниям и банкам
            </p>
          </div>

          <button
            type="button"
            onClick={openForm}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            + Добавить запрос
          </button>

        </div>

        {/* ===================================================
            ФОРМА
        =================================================== */}

        {isFormOpen && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            {/* Заголовок */}

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-lg font-bold">
                  {editingId !== null
                    ? "Редактирование запроса"
                    : "Новый запрос"}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {editingId !== null
                    ? "Измените необходимые данные"
                    : "Заполните информацию по задаче"}
                </p>
              </div>

              <button
                type="button"
                onClick={closeForm}
                disabled={isSaving}
                className="text-2xl text-slate-400 hover:text-slate-700 disabled:opacity-50"
              >
                ×
              </button>

            </div>

            {/* Поля */}

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              {/* КОМПАНИЯ */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Компания *
                </label>

                <select
                  value={form.company}
                  onChange={(e) =>
                    updateForm(
                      "company",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="">
                    Выберите компанию
                  </option>

                  {companies.map((company) => (
                    <option
                      key={company}
                      value={company}
                    >
                      {company}
                    </option>
                  ))}
                </select>
              </div>

              {/* БАНК */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Банк *
                </label>

                <select
                  value={form.bank}
                  onChange={(e) =>
                    updateForm(
                      "bank",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="">
                    Выберите банк
                  </option>

                  {banks.map((bank) => (
                    <option
                      key={bank}
                      value={bank}
                    >
                      {bank}
                    </option>
                  ))}
                </select>
              </div>

              {/* ДАТА */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Дата поступления *
                </label>

                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    updateForm(
                      "date",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* СОТРУДНИК */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Кто принял запрос/задачу *
                </label>

                <select
                  value={form.employee}
                  onChange={(e) =>
                    updateForm(
                      "employee",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="">
                    Выберите сотрудника
                  </option>

                  {employees.map((employee) => (
                    <option
                      key={employee}
                      value={employee}
                    >
                      {employee}
                    </option>
                  ))}
                </select>
              </div>

              {/* ПРОБЛЕМА */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Проблема *
                </label>

                <input
                  type="text"
                  value={form.problem}
                  onChange={(e) =>
                    updateForm(
                      "problem",
                      e.target.value
                    )
                  }
                  placeholder="Опишите проблему"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* КОММЕНТАРИЙ */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Комментарий по проблеме
                </label>

                <textarea
                  value={form.comment}
                  onChange={(e) =>
                    updateForm(
                      "comment",
                      e.target.value
                    )
                  }
                  placeholder="Дополнительная информация"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* КУДА НАПРАВЛЕН */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Куда направлен запрос
                </label>

                <input
                  type="text"
                  value={form.destination}
                  onChange={(e) =>
                    updateForm(
                      "destination",
                      e.target.value
                    )
                  }
                  placeholder="Отдел / сотрудник"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* СРОК */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Срок выполнения
                </label>

                <input
                  type="date"
                  value={form.deadline}
                  onChange={(e) =>
                    updateForm(
                      "deadline",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* ПОСЛЕДУЮЩИЕ ШАГИ */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Последующие шаги
                </label>

                <textarea
                  value={form.nextSteps}
                  onChange={(e) =>
                    updateForm(
                      "nextSteps",
                      e.target.value
                    )
                  }
                  placeholder="Что необходимо сделать дальше"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* СТАТУС */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Статус *
                </label>

                <select
                  value={form.status}
                  onChange={(e) =>
                    updateForm(
                      "status",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                >
                  {statuses.map((status) => (
                    <option
                      key={status}
                      value={status}
                    >
                      {status}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* КНОПКИ */}

            <div className="mt-6 flex justify-end gap-3">

              <button
                type="button"
                onClick={closeForm}
                disabled={isSaving}
                className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Отмена
              </button>

              <button
                type="button"
                onClick={saveRequest}
                disabled={isSaving}
                className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSaving
                  ? "Сохранение..."
                  : editingId !== null
                  ? "Сохранить изменения"
                  : "Сохранить запрос"}
              </button>

            </div>

          </div>
        )}

        {/* ===================================================
            ТАБЛИЦА
        =================================================== */}

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {isLoading ? (

            <div className="px-6 py-12 text-center">

              <div className="text-4xl">
                ⏳
              </div>

              <h3 className="mt-3 font-semibold">
                Загрузка запросов...
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Получаем данные из базы
              </p>

            </div>

          ) : requests.length === 0 ? (

            <div className="px-6 py-12 text-center">

              <div className="text-4xl">
                📊
              </div>

              <h3 className="mt-3 font-semibold">
                Запросов пока нет
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Нажмите «Добавить запрос», чтобы создать первую запись.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[1550px] text-left text-sm">

                <thead className="bg-slate-50">

                  <tr className="border-b border-slate-200">

                    <th className="px-4 py-4 font-semibold">
                      Компания
                    </th>

                    <th className="px-4 py-4 font-semibold">
                      Банк
                    </th>

                    <th className="px-4 py-4 font-semibold">
                      Дата поступления
                    </th>

                    <th className="px-4 py-4 font-semibold">
                      Проблема
                    </th>

                    <th className="px-4 py-4 font-semibold">
                      Комментарий
                    </th>

                    <th className="px-4 py-4 font-semibold">
                      Кто принял
                    </th>

                    <th className="px-4 py-4 font-semibold">
                      Куда направлен
                    </th>

                    <th className="px-4 py-4 font-semibold">
                      Последующие шаги
                    </th>

                    <th className="px-4 py-4 font-semibold">
                      Срок
                    </th>

                    <th className="px-4 py-4 font-semibold">
                      Статус
                    </th>

                    <th className="px-4 py-4 font-semibold">
                      Действия
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {requests.map((request) => (

                    <tr
                      key={request.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >

                      <td className="px-4 py-4 font-medium">
                        {request.company}
                      </td>

                      <td className="px-4 py-4">
                        {request.bank}
                      </td>

                      <td className="whitespace-nowrap px-4 py-4">
                        {request.date}
                      </td>

                      <td className="px-4 py-4">
                        {request.problem}
                      </td>

                      <td className="max-w-[250px] px-4 py-4">
                        {request.comment || "—"}
                      </td>

                      <td className="whitespace-nowrap px-4 py-4">
                        {request.employee}
                      </td>

                      <td className="px-4 py-4">
                        {request.destination || "—"}
                      </td>

                      <td className="px-4 py-4">
                        {request.nextSteps || "—"}
                      </td>

                      <td className="whitespace-nowrap px-4 py-4">
                        {request.deadline || "—"}
                      </td>

                      <td className="whitespace-nowrap px-4 py-4">

                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            request.status === "Закрыт"
                              ? "bg-green-100 text-green-700"
                              : request.status === "В работе"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {request.status}
                        </span>

                      </td>

                      {/* ДЕЙСТВИЯ */}

                      <td className="whitespace-nowrap px-4 py-4">

                        <div className="flex gap-2">

                          <button
                            type="button"
                            onClick={() =>
                              editRequest(request)
                            }
                            className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-100"
                          >
                            Редактировать
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              deleteRequest(
                                request.id
                              )
                            }
                            disabled={
                              deletingId ===
                              request.id
                            }
                            className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {deletingId ===
                            request.id
                              ? "Удаление..."
                              : "Удалить"}
                          </button>

                        </div>

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