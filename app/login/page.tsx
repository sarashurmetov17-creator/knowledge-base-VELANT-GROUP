"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    if (!login || !password) {
      setError("Введите логин и пароль");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Неверный логин или пароль");
        setLoading(false);
        return;
      }

      window.location.href = "/";
    } catch {
      setError("Не удалось подключиться к серверу");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          {/* ЗАГОЛОВОК */}
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              База знаний
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Вход для сотрудников
            </p>
          </div>

          {/* ФОРМА */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* ЛОГИН */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Логин
              </label>

              <input
                type="text"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                placeholder="Введите логин"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                disabled={loading}
              />
            </div>

            {/* ПАРОЛЬ */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Пароль
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Введите пароль"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                disabled={loading}
              />
            </div>

            {/* ОШИБКА */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* КНОПКА */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Выполняется вход..." : "Войти"}
            </button>

          </form>

        </div>

        {/* НИЖНИЙ ТЕКСТ */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Доступ только для сотрудников
        </p>
      </div>
    </main>
  );
}