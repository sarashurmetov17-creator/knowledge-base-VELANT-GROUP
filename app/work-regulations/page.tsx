const shifts = [
  {
    number: "01",
    title: "Первая смена",
    description: "Начало рабочего дня, проверка банков и подготовка выписок.",
    icon: "🌅",
    color: "blue",
  },
  {
    number: "02",
    title: "Последующие смены",
    description: "Приём компаний, выполнение оставшихся задач и мониторинг.",
    icon: "🔄",
    color: "indigo",
  },
  {
    number: "03",
    title: "Последняя смена",
    description: "Завершение задач, оплаты и подготовка ведомостей.",
    icon: "🌙",
    color: "purple",
  },
];

export default function WorkRegulations() {
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
              OOO Velant Group
            </a>

            <p className="text-sm text-slate-500">
              База знаний
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

          <div className="max-w-4xl text-white">

            <div className="mb-5 inline-flex rounded-full bg-blue-500 px-4 py-2 text-sm font-medium">
              📋 Рабочий регламент
            </div>

            <h1 className="text-4xl font-bold md:text-5xl">
              Регламент работы
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
              Порядок работы сотрудников OOO Velant Group
              по сменам, работа с банками, выписками,
              оплатами и передача незавершённых задач.
            </p>

          </div>

        </div>
      </section>


      {/* NAVIGATION */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <h2 className="text-2xl font-bold">
          Работа по сменам
        </h2>

        <p className="mt-2 text-slate-500">
          Выберите нужную смену для просмотра регламента.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          {shifts.map((shift) => (
            <a
              key={shift.number}
              href={`#shift-${shift.number}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {shift.icon}
                </div>

                <span className="text-sm font-bold text-slate-300">
                  {shift.number}
                </span>

              </div>

              <h3 className="mt-6 text-xl font-semibold group-hover:text-blue-600">
                {shift.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {shift.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-blue-600">
                Открыть →
              </p>

            </a>
          ))}

        </div>

      </section>


      {/* ====================================================== */}
      {/* ПЕРВАЯ СМЕНА */}
      {/* ====================================================== */}

      <section
        id="shift-01"
        className="border-t border-slate-200 bg-white"
      >

        <div className="mx-auto max-w-5xl px-6 py-16">

          <div className="mb-10">

            <span className="inline-flex rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              СМЕНА 01
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Первая смена
            </h2>

            <p className="mt-3 text-slate-500">
              Начало рабочего дня и первичная проверка банков.
            </p>

          </div>


          {/* ШАГ 1 */}

          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <h3 className="text-xl font-semibold">
              1. Открытие файла «Разделение»
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              На диске <strong>W:</strong> открыть папку
              <strong> «Разделение»</strong>.
              Найти файл XLSX со своим именем и открыть его.
            </p>

          </div>


          {/* ШАГ 2 */}

          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <h3 className="text-xl font-semibold">
              2. Проверка банков
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              По списку необходимо сделать выписки по всем
              банкам компании, кроме РРБ.
            </p>

            <div className="mt-6 rounded-xl bg-white p-5">

              <h4 className="font-semibold">
                При проверке каждого банка:
              </h4>

              <ul className="mt-4 space-y-3 text-slate-600">

                <li>☐ Открыть мини-сервер.</li>

                <li>☐ Зайти в БК.</li>

                <li>☐ Проверить наличие уведомлений.</li>

                <li>☐ Проверить счета на наличие блокировок.</li>

                <li>☐ Проверить наличие неотправленных ПП.</li>

                <li>☐ Проверить наличие неотправленных ведомостей.</li>

              </ul>

            </div>

          </div>


          {/* ШАГ 3 */}

          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <h3 className="text-xl font-semibold">
              3. Получение выписок
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              После проверки перейти в раздел
              <strong> «Выписки»</strong>.
            </p>


            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <div className="rounded-xl border border-green-200 bg-green-50 p-5">

                <h4 className="font-semibold text-green-800">
                  ✓ Если есть обороты
                </h4>

                <p className="mt-2 text-sm leading-6 text-green-700">
                  За период вчера — сегодня скачать:
                </p>

                <ul className="mt-3 space-y-2 text-sm text-green-700">
                  <li>• Выписку 1С</li>
                  <li>• PDF с комплектом документов</li>
                  <li>• XLSX</li>
                </ul>

              </div>


              <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">

                <h4 className="font-semibold text-orange-800">
                  Если оборотов нет
                </h4>

                <p className="mt-2 text-sm leading-6 text-orange-700">
                  Скачать выписку в формате PDF.
                  Файл переименовать названием компании и банка.
                </p>

              </div>

            </div>

          </div>


          {/* ШАГ 4 */}

          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <h3 className="text-xl font-semibold">
              4. Формирование папки
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Все скачанные файлы поместить в одну папку.
              Папку назвать названием компании и банка.
            </p>

            <div className="mt-4 rounded-xl bg-slate-900 p-4 font-mono text-sm text-green-400">
              Праймстрой Альфа
            </div>

          </div>


          {/* ШАГ 5 */}

          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <h3 className="text-xl font-semibold">
              5. Перенос файлов
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Перенести файлы в:
            </p>

            <div className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-sm text-blue-300">
              M:\ВЫПИСКИ ДЛЯ БАНКА\текущий месяц\предыдущий рабочий день
            </div>

          </div>


          {/* ШАГ 6 */}

          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <h3 className="text-xl font-semibold">
              6. Заполнение файла «Разделение»
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              В открытом файле XLSX внести:
            </p>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• исходящий остаток;</li>
              <li>• информацию о блокировках;</li>
              <li>• информацию об арестах по соответствующему счёту.</li>
            </ul>

            <p className="mt-5 leading-7 text-slate-600">
              После обработки всех компаний сохранить файл
              «Разделение» и закрыть его.
              После этого ответственный за остатки сможет открыть файл
              и скопировать данные.
            </p>

          </div>


          {/* ШАГ 7 */}

          <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">

            <h3 className="text-xl font-semibold text-blue-900">
              7. Мониторинг чатов и новые задачи
            </h3>

            <p className="mt-3 leading-7 text-blue-800">
              Проверить рабочие чаты на наличие недостающих
              ведомостей или информации по ним.
            </p>

            <p className="mt-3 leading-7 text-blue-800">
              Параллельно выполняются оплаты и новые задачи.
            </p>

          </div>


          {/* ПЕРЕХОДЯЩИЕ ЗАДАЧИ */}

          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">

            <h3 className="text-xl font-semibold text-red-900">
              ⚠️ Переходящие задачи
            </h3>

            <p className="mt-3 leading-7 text-red-800">
              Если задача занимает больше времени, чем длится ваша смена,
              её необходимо записать в файл XLSX
              <strong> «Переходящие задачи»</strong>
              на диске W:.
            </p>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* ПОСЛЕДУЮЩИЕ СМЕНЫ */}
      {/* ====================================================== */}

      <section
        id="shift-02"
        className="border-t border-slate-200 bg-slate-50"
      >

        <div className="mx-auto max-w-5xl px-6 py-16">

          <span className="inline-flex rounded-xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            СМЕНА 02
          </span>

          <h2 className="mt-4 text-3xl font-bold">
            Последующие смены
          </h2>

          <p className="mt-3 text-slate-500">
            Приём работы от предыдущего сотрудника и выполнение текущих задач.
          </p>


          <div className="mt-10 space-y-5">

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                1. Приём компаний
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Работа начинается с приёма компаний.
                Используется список компаний, переходящих
                от сотрудника к сотруднику.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                2. Сверка с графиком
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                После приёма компаний необходимо провести сверку с графиком.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                3. Анализ оставшихся задач
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Проверить задачи, которые предыдущий сотрудник
                не успел выполнить, и выполнить их.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                4. Мониторинг банков
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Проверять банки клиента на наличие:
              </p>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• уведомлений;</li>
                <li>• ошибок;</li>
                <li>• новостей.</li>
              </ul>

              <p className="mt-4 leading-7 text-slate-600">
                При наличии важной информации необходимо
                проинформировать соответствующий чат.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                5. Мониторинг рабочих чатов
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Проверять чаты на новые задачи и ознакомиться
                с актуальными новостями.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                6. Проведение выплат
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                После выполнения текущих задач производится
                проведение выплат.
              </p>
            </div>


            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">

              <h3 className="text-lg font-semibold text-red-900">
                ⚠️ Переходящие задачи
              </h3>

              <p className="mt-2 leading-7 text-red-800">
                Если задача не может быть выполнена в течение смены,
                её необходимо внести в файл XLSX
                <strong> «Переходящие задачи»</strong>
                на диске W:.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* ПОСЛЕДНЯЯ СМЕНА */}
      {/* ====================================================== */}

      <section
        id="shift-03"
        className="border-t border-slate-200 bg-white"
      >

        <div className="mx-auto max-w-5xl px-6 py-16">

          <span className="inline-flex rounded-xl bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-600">
            СМЕНА 03
          </span>

          <h2 className="mt-4 text-3xl font-bold">
            Последняя смена
          </h2>

          <p className="mt-3 text-slate-500">
            Завершение рабочего цикла и подготовка документов.
          </p>


          <div className="mt-10 space-y-5">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <h3 className="text-lg font-semibold">
                1. Выполнение задач последующих смен
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Выполнить все действия, предусмотренные разделом
                «Последующие смены».
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <h3 className="text-lg font-semibold">
                2. Проверка необработанных задач
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Проверить наличие оставшихся необработанных задач
                и выполнить их.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <h3 className="text-lg font-semibold">
                3. Выполнение всех оплат
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                После выполнения всех необходимых задач провести
                оставшиеся оплаты.
              </p>

            </div>


            <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6">

              <h3 className="text-lg font-semibold text-purple-900">
                4. Скачивание ведомостей
              </h3>

              <p className="mt-3 leading-7 text-purple-800">
                После выполнения всех оплат скачать ведомости
                и разместить их по следующему пути:
              </p>

              <div className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-sm leading-6 text-purple-300">
                M:\ВЫПИСКИ ДЛЯ БАНКА\текущий месяц\текущий день\Ведомости\Наименование организации и банка
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* ПЕРЕДАЧА СМЕНЫ */}
      {/* ====================================================== */}

      <section className="border-t border-slate-200 bg-slate-950">

        <div className="mx-auto max-w-5xl px-6 py-16">

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">

            <div className="text-3xl">
              🔄
            </div>

            <h2 className="mt-4 text-2xl font-bold text-white">
              Передача смены
            </h2>

            <p className="mt-3 leading-7 text-slate-400">
              Перед завершением смены необходимо убедиться,
              что выполненные задачи обработаны, а незавершённые
              задачи переданы следующему сотруднику.
            </p>

            <div className="mt-8 space-y-4">

              <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
                ✓ Проверить выполненные задачи.
              </div>

              <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
                ✓ Проверить наличие необработанных задач.
              </div>

              <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
                ✓ Незавершённые задачи внести в файл
                «Переходящие задачи».
              </div>

              <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
                ✓ Важную информацию передать в соответствующий рабочий чат.
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-slate-800 bg-slate-950 text-slate-500">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm">

          <p>
            © 2026 OOO Velant Group
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