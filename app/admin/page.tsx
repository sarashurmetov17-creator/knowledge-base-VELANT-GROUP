export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <a
              href="/"
              className="text-2xl font-bold hover:text-blue-600"
            >
              База знаний
            </a>

            <p className="text-sm text-slate-500">
              Панель администратора
            </p>
          </div>

          <a
            href="/"
            className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium transition hover:border-blue-300 hover:text-blue-600"
          >
            ← На главную
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="max-w-3xl text-white">

            <div className="mb-5 inline-flex rounded-full bg-blue-500 px-4 py-2 text-sm font-medium">
              ⚙️ Администратор
            </div>

            <h1 className="text-4xl font-bold md:text-5xl">
              Админ-панель
            </h1>

            <p className="mt-5 text-lg leading-8 text-blue-100">
              Управление базой знаний и пользователями.
            </p>

          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-3">

          {/* ПОЛЬЗОВАТЕЛИ */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              👥
            </div>

            <h2 className="mt-5 text-xl font-semibold">
              Пользователи
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Добавление и управление пользователями базы знаний.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Управление
            </button>

          </div>

          {/* ИНСТРУКЦИИ */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              📚
            </div>

            <h2 className="mt-5 text-xl font-semibold">
              Инструкции
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Редактирование и добавление инструкций.
            </p>

            <a
              href="/instructions"
              className="mt-5 inline-block rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Открыть
            </a>

          </div>

          {/* РЕГЛАМЕНТ */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              📋
            </div>

            <h2 className="mt-5 text-xl font-semibold">
              Регламент
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Просмотр и управление регламентом работы.
            </p>

            <a
              href="/work-regulations"
              className="mt-5 inline-block rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Открыть
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-950 text-slate-500">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm">

          <p>
            © 2026 База знаний
          </p>

          <a
            href="/"
            className="hover:text-white"
          >
            ← На главную
          </a>

        </div>

      </footer>

    </main>
  );
}