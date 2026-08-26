"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!login || !password) {
      setError("Введите логин и пароль");
      return;
    }

    // Временная проверка для тестирования.
    // В следующей части сделаем нормальную авторизацию.
    if (login === "admin" && password === "admin123") {
      window.location.href = "/";
      return;
    }

    setError("Неверный логин или пароль");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">

        {/* ЛОГОТИП */}
        <div className="mb-8 text-center">
          <a
            href="/"
            className="text-3xl font-bold text-slate-900 hover:text-blue-600"
          >
            OOO Velant Group
          </a>

          <p className="mt-2 text-sm text-slate-500">
            База знаний
          </p>
        </div>

        {/* ФОРМА */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          <h1 className="text-2xl font-bold text-slate-900">
            Вход в систему
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Введите логин и пароль для доступа к базе знаний.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* ЛОГИН */}
            <div>
              <label
                htmlFor="login"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Логин
              </label>

              <input
                id="login"
                type="text"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                placeholder="Введите логин"
                autoComplete="username"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* ПАРОЛЬ */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Пароль
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Введите пароль"
                autoComplete="current-password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
              className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Войти
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