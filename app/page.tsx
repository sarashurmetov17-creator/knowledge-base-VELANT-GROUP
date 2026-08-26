const categories = [
  {
    title: "Регламент работы",
    description: "Порядок работы сотрудников по сменам",
    count: 3,
    icon: "📋",
    href: "/work-regulations",
  },
  {
    title: "Инструкции",
    description: "Пошаговые руководства и инструкции",
    count: 4,
    icon: "📚",
    href: "/instructions",
  },
  {
    title: "Настройки",
    description: "Настройка аккаунта и системы",
    count: 8,
    icon: "⚙️",
    href: "#",
  },
  {
    title: "Частые вопросы",
    description: "Ответы на популярные вопросы",
    count: 18,
    icon: "❓",
    href: "#",
  },
  {
    title: "Решение проблем",
    description: "Помощь с ошибками и проблемами",
    count: 15,
    icon: "🔧",
    href: "#",
  },
  {
    title: "Дополнительно",
    description: "Прочая полезная информация",
    count: 7,
    icon: "📦",
    href: "#",
  },
];

const articles = [
  {
    title: "Как начать пользоваться системой",
    category: "Начало работы",
    date: "Сегодня",
  },
  {
    title: "Как изменить настройки аккаунта",
    category: "Настройки",
    date: "Вчера",
  },
  {
    title: "Что делать, если не приходит письмо?",
    category: "Решение проблем",
    date: "2 дня назад",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="group">
            <h1 className="text-2xl font-bold group-hover:text-blue-600">
              База знаний
            </h1>

            <p className="text-sm text-slate-500">
              Всё необходимое в одном месте
            </p>
          </a>

          <nav className="hidden gap-6 text-sm font-medium md:flex">

            <a
              href="#categories"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Категории
            </a>

            <a
              href="#articles"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Статьи
            </a>

            <a
              href="/admin"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Админ-панель
            </a>

          </nav>

        </div>
      </header>


      {/* HERO */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mx-auto max-w-3xl text-center text-white">

            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-blue-100">
              Центр помощи
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Чем мы можем вам помочь?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
              Найдите инструкцию, ответ на вопрос или нужную статью.
            </p>


            {/* SEARCH */}
            <div className="mt-8 flex overflow-hidden rounded-2xl bg-white shadow-xl">

              <input
                type="text"
                placeholder="Поиск по базе знаний..."
                className="min-w-0 flex-1 px-6 py-4 text-slate-900 outline-none"
              />

              <button
                type="button"
                className="m-2 rounded-xl bg-blue-600 px-6 font-semibold text-white transition hover:bg-blue-700"
              >
                Найти
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* CATEGORIES */}
      <section
        id="categories"
        className="mx-auto max-w-7xl px-6 py-16"
      >

        <div>
          <h2 className="text-2xl font-bold">
            Категории
          </h2>

          <p className="mt-2 text-slate-500">
            Выберите нужный раздел базы знаний
          </p>
        </div>


        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl transition group-hover:bg-blue-100">
                {category.icon}
              </div>

              <h3 className="text-lg font-semibold group-hover:text-blue-600">
                {category.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {category.description}
              </p>

              <p className="mt-5 text-sm font-medium text-blue-600">
                {category.count} статей →
              </p>

            </a>
          ))}

        </div>

      </section>


      {/* ARTICLES */}
      <section
        id="articles"
        className="border-t border-slate-200 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-16">

          <h2 className="text-2xl font-bold">
            Последние статьи
          </h2>

          <p className="mt-2 text-slate-500">
            Недавно добавленные материалы
          </p>


          <div className="mt-8 grid gap-4">

            {articles.map((article) => (
              <a
                key={article.title}
                href="#"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:bg-white hover:shadow-sm"
              >

                <div>

                  <p className="text-xs font-medium text-blue-600">
                    {article.category}
                  </p>

                  <h3 className="mt-2 font-semibold group-hover:text-blue-600">
                    {article.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Обновлено: {article.date}
                  </p>

                </div>

                <span className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600">
                  →
                </span>

              </a>
            ))}

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-950 text-slate-400">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm">

          <p>
            © 2026 База знаний
          </p>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Наверх ↑
          </a>

        </div>

      </footer>

    </main>
  );
}