const instructions = [
  {
    number: "01",
    title: "Проверка писем и запросов от банка",
    description:
      "Проверка сообщений, уведомлений и запросов в системе Банк-клиент.",
    icon: "📨",
  },
  {
    number: "02",
    title: "Формирование выписок",
    description:
      "Формирование, скачивание и размещение банковских выписок.",
    icon: "📄",
  },
  {
    number: "03",
    title: "Оплата платежных поручений",
    description:
      "Обработка заявок, импорт и подписание платежных поручений.",
    icon: "💳",
  },
  {
    number: "04",
    title: "Оплата реестров по заработной плате",
    description:
      "Работа с ведомостями и платежными документами по зарплатным проектам.",
    icon: "💰",
  },
];

export default function InstructionsPage() {
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
              📚 Инструкции
            </div>

            <h1 className="text-4xl font-bold md:text-5xl">
              Инструкции
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
              Пошаговые инструкции по работе сотрудников с банками,
              выписками, платежными поручениями и реестрами по заработной плате.
            </p>

          </div>

        </div>
      </section>


      {/* NAVIGATION */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <h2 className="text-2xl font-bold">
          Разделы инструкций
        </h2>

        <p className="mt-2 text-slate-500">
          Выберите нужную инструкцию для просмотра подробного порядка работы.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {instructions.map((instruction) => (
            <a
              key={instruction.number}
              href={`#instruction-${instruction.number}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {instruction.icon}
                </div>

                <span className="text-sm font-bold text-slate-300">
                  {instruction.number}
                </span>

              </div>

              <h3 className="mt-6 text-xl font-semibold group-hover:text-blue-600">
                {instruction.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {instruction.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-blue-600">
                Открыть →
              </p>

            </a>
          ))}

        </div>

      </section>


      {/* ====================================================== */}
      {/* ИНСТРУКЦИЯ 01 */}
      {/* ====================================================== */}

      <section
        id="instruction-01"
        className="border-t border-slate-200 bg-white"
      >

        <div className="mx-auto max-w-5xl px-6 py-16">

          <div className="mb-10">

            <span className="inline-flex rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              ИНСТРУКЦИЯ 01
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Проверка писем и запросов от банка
            </h2>

            <p className="mt-3 text-slate-500">
              Своевременное получение информации по изменениям в условиях
              работы Банк-клиента и реагирование на запросы банка.
            </p>

          </div>


          {/* ТЕРМИНЫ */}

          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <h3 className="text-xl font-semibold">
              Термины
            </h3>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">

              <li>
                <strong>Запрос</strong> — текстовое сообщение, возможно с
                вложениями, полученное в системе Банк-клиент, содержащее
                требование о предоставлении информации либо документов.
              </li>

              <li>
                <strong>БК</strong> — Банк-клиент. Веб-страница, в которой
                осуществляется взаимодействие с банком, в котором у организации
                открыт расчетный счет.
              </li>

            </ul>

          </div>


          <Steps
            steps={[
              <>
                <strong>Проверка писем и уведомлений.</strong> При каждом
                входе в БК, а также во время проведения различных операций,
                сотрудник просматривает наличие писем и уведомлений.
              </>,

              <>
                Если в Банк-клиенте есть непрочитанные сообщения, сотрудник
                просматривает содержание письма либо уведомления.
              </>,

              <>
                Если письмо содержит запрос или требование со стороны банка,
                сотрудник копирует данное сообщение и направляет в чат
                «Запросы/Ответы на запросы».
              </>,

              <>
                Если письмо содержит информацию об изменении тарифов,
                условий обслуживания или режима работы, сотрудник копирует
                сообщение и направляет его в чат «Стафф СМС».
              </>,

              <>
                После получения ответа в чатах сотрудник действует
                в соответствии с поставленной задачей.
              </>,
            ]}
          />


          <InfoBlock title="Контроль">

            Если сотрудник видит непрочитанное письмо прошедшей датой
            (то есть письмо, которое должно было быть прочитано ранее),
            он немедленно сообщает об этом непосредственному руководителю
            и проводит шаги 2–5.

            <br />
            <br />

            Руководитель находит ответственного сотрудника, который был
            назначен на работу в данном БК на момент поступления сообщения,
            и применяет к нему соответствующие меры.

          </InfoBlock>


          <InfoBlock title="Ожидаемый результат">

            Все запросы банка прочитаны, ответственные проинформированы,
            ответные письма и документы переданы. Сотрудники иных отделов
            оповещены об изменениях в режиме работы банка и условиях
            обслуживания.

          </InfoBlock>

        </div>

      </section>


      {/* ====================================================== */}
      {/* ИНСТРУКЦИЯ 02 */}
      {/* ====================================================== */}

      <section
        id="instruction-02"
        className="border-t border-slate-200 bg-slate-50"
      >

        <div className="mx-auto max-w-5xl px-6 py-16">

          <span className="inline-flex rounded-xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            ИНСТРУКЦИЯ 02
          </span>

          <h2 className="mt-4 text-3xl font-bold">
            Формирование выписок
          </h2>

          <p className="mt-3 text-slate-500">
            Передача информации о движениях денежных средств на счетах.
          </p>


          <div className="mt-10">

            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6">

              <h3 className="text-xl font-semibold">
                Термины
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">

                <li>
                  <strong>БК</strong> — Банк-клиент.
                </li>

                <li>
                  <strong>Выписка</strong> — документ, содержащий информацию
                  об остатках на счету организации и о движениях денежных
                  средств.
                </li>

                <li>
                  <strong>Операционный день</strong> — рабочий день банка
                  в соответствии с режимом работы и производственным
                  календарем.
                </li>

              </ul>

            </div>


            <Steps
              steps={[
                <>
                  <strong>Вход в БК.</strong> Сотрудник осуществляет вход
                  на мини-сервер организации. Переходит в браузер и через
                  автозаполнение вводит логин и пароль для входа в БК.
                </>,

                <>
                  Переход в соответствующий сервис в БК «Выписки».
                </>,

                <>
                  <strong>
                    Заполнение заявки на формирование выписки.
                  </strong>

                  <br />
                  <br />

                  Заявка содержит: формат выписки, период и содержимое.

                  <br />
                  <br />

                  Ежедневные выписки предполагают форматы PDF, XLS, TXT.
                  Период — с даты предыдущего операционного дня по текущий
                  операционный день. Выписка должна включать платежные
                  поручения.

                  <br />
                  <br />

                  Если за указанный период не было движений по расчетному
                  счету, выписка формируется только в формате XLS (Excel).
                  РРБ допустимо в формате PDF при отсутствии движений по счету.

                  <br />
                  <br />

                  Выписки по запросу формируются в соответствии с заявкой.
                </>,

                <>
                  <strong>Скачивание выписки.</strong> После передачи заявки
                  на формирование документы скачиваются в папку «Загрузки»
                  автоматически либо через кнопку «Скачать».
                </>,

                <>
                  <strong>
                    Перенос скачанных файлов с мини-сервера
                    на основной сервер.
                  </strong>

                  <br />
                  <br />

                  Файлы переносятся в:

                  <div className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-sm text-blue-300">
                    M:\ВЫПИСКИ ДЛЯ БАНКА\* месяц*\* день*
                  </div>

                  <br />

                  Если выписка скачивается в виде архива, необходимо
                  извлечь всё содержимое и создать в папке с выписками
                  папку по данной организации и банку.

                  <br />
                  <br />

                  Если по выписке не было движений, она сохраняется
                  в корневую папку текущего дня. В названии указывается
                  наименование соответствующей организации и банка.
                </>,
              ]}
            />


            <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6">

              <h3 className="text-lg font-semibold text-orange-900">
                Отдельное примечание
              </h3>

              <p className="mt-2 leading-7 text-orange-800">
                Выписка ПСБ Банк — в PDF с документами.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* ИНСТРУКЦИЯ 03 */}
      {/* ====================================================== */}

      <section
        id="instruction-03"
        className="border-t border-slate-200 bg-white"
      >

        <div className="mx-auto max-w-5xl px-6 py-16">

          <span className="inline-flex rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            ИНСТРУКЦИЯ 03
          </span>

          <h2 className="mt-4 text-3xl font-bold">
            Оплата платежных поручений
          </h2>

          <p className="mt-3 text-slate-500">
            Оплата и выгрузка подтверждающих документов по заявкам
            на оплату платежных поручений в адрес контрагентов-юридических лиц.
          </p>


          <div className="mt-10">

            <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <h3 className="text-xl font-semibold">
                Термины
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">

                <li>
                  <strong>Заявка</strong> — сообщение в чате
                  «Счета на оплату ГОТОВО», содержащее ссылку на адрес
                  папки, где выгружены платежные документы.
                </li>

                <li>
                  <strong>ПП</strong> — платежное поручение, документ
                  в формате TXT, загружаемый в Банк-клиент.
                </li>

                <li>
                  <strong>БК</strong> — Банк-клиент.
                </li>

              </ul>

            </div>


            <Steps
              steps={[
                <>
                  <strong>Прием заявки.</strong> Сотрудник, работающий
                  в БК организации, ставит отметку «лайк» в чате,
                  тем самым отмечая, что заявка принята в работу.
                </>,

                <>
                  <strong>Ознакомление с заявкой.</strong> Сотрудник
                  открывает папку:

                  <div className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-sm text-blue-300">
                    M:\РЕЕСТРЫ НА ОПЛАТУ ДЛЯ БАНКА\*текущий месяц*\*текущий день*
                  </div>

                  <br />

                  Заявки по каждому отдельному банку и организации
                  нумеруются в порядке формирования.

                  <br />
                  <br />

                  Сотрудник соотносит сообщение в чате с наименованием
                  папки, определяет организацию и банк.

                  <br />
                  <br />

                  Открывает XLS-документ, проверяет количество платежных
                  поручений и их общую сумму.
                </>,

                <>
                  <strong>Перенос платежных документов.</strong> Сотрудник
                  копирует TXT-файл из папки по заявке и вставляет его
                  в папку «Загрузки» на мини-сервере организации.
                </>,

                <>
                  <strong>Вход в БК.</strong> Сотрудник производит вход
                  в Банк-клиент, используя данные автозаполнения и SMS-код,
                  пересланный на почту.
                </>,

                <>
                  <strong>Осуществление оплаты.</strong> Сотрудник
                  переходит в соответствующий раздел Банк-клиента,
                  импортирует TXT-файл и подписывает загруженный реестр
                  платежей с помощью SMS-кода.
                </>,

                <>
                  <strong>Отметка об отправке.</strong> После подписания
                  реестра сотрудник возвращается в папку с заявкой
                  и ставит в её наименовании знак «!».
                </>,

                <>
                  <strong>Скачивание исполненных ПП.</strong> После исполнения
                  всех ПП сотрудник скачивает каждое платежное поручение
                  отдельно в формате PDF и указывает в названии файла
                  наименование контрагента-получателя.
                </>,

                <>
                  <strong>Отметка об исполнении заявки.</strong> Сотрудник
                  переносит скачанные ПП с мини-сервера организации в:

                  <div className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-sm text-blue-300">
                    M:\ПЛАТЕЖКИ\*Месяц*\*Дата*\*Наименование организации*
                  </div>

                  <br />

                  В папке по заявке ставит отметку «+».
                </>,
              ]}
            />


            <InfoBlock title="Результат">

              В папке с заявками за текущий день все заявки помечены
              «!» и «+», по всем заявкам выгружены все ПП.

              <br />
              <br />

              Количество ПП соответствует количеству ПП в заявке
              (контроль на стороне отдела подготовки ПП).

            </InfoBlock>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* ИНСТРУКЦИЯ 04 */}
      {/* ====================================================== */}

      <section
        id="instruction-04"
        className="border-t border-slate-200 bg-slate-50"
      >

        <div className="mx-auto max-w-5xl px-6 py-16">

          <span className="inline-flex rounded-xl bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-600">
            ИНСТРУКЦИЯ 04
          </span>

          <h2 className="mt-4 text-3xl font-bold">
            Оплата реестров по заработной плате
          </h2>

          <p className="mt-3 text-slate-500">
            Оплата платежных документов на счета физических лиц
            и работа с ведомостями по зарплатному проекту.
          </p>


          <div className="mt-10">

            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6">

              <h3 className="text-xl font-semibold">
                Термины
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">

                <li>
                  <strong>Заявка</strong> — сообщение в чате
                  «Реестры на оплату», содержащее ссылку на адрес папки,
                  где выгружены платежные документы.
                </li>

                <li>
                  <strong>ПП</strong> — платежное поручение, документ
                  в формате TXT, загружаемый в Банк-клиент.
                </li>

                <li>
                  <strong>Ведомость</strong> — документ в формате XML,
                  загружаемый в Банк-клиент в разделе «Зарплатный проект».
                </li>

                <li>
                  <strong>БК</strong> — Банк-клиент.
                </li>

              </ul>

            </div>


            <Steps
              steps={[
                <>
                  <strong>Прием заявки.</strong> Сотрудник ставит отметку
                  «лайк» в чате «Реестры на оплату».
                </>,

                <>
                  <strong>Ознакомление с заявкой.</strong> Сотрудник
                  открывает:

                  <div className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-sm text-blue-300">
                    M:\РЕЕСТРЫ\*текущий месяц*\*текущий день*
                  </div>

                  <br />

                  Заявки содержат в названии папки информацию
                  об организации, банке, сумме приложенных налоговых
                  платежей и периоде выплаты.

                  <br />
                  <br />

                  Сотрудник открывает XLS-документ и проверяет количество
                  платежных поручений и их общую сумму.
                </>,

                <>
                  <strong>Перенос платежных документов.</strong> Сотрудник
                  копирует все XML- и TXT-файлы из папки заявки в папку
                  «Загрузки» на мини-сервере организации.
                </>,

                <>
                  <strong>Вход в БК.</strong> Сотрудник входит
                  в Банк-клиент, используя данные автозаполнения
                  и SMS-код, пересланный на почту.
                </>,

                <>
                  <strong>Осуществление оплаты.</strong>

                  <div className="mt-4 rounded-xl border-2 border-gray-300 bg-gray-50 p-5">

                    <strong className="text-red-600">
                      ВАЖНО: обратите внимание на вид выплаты!
                    </strong>

                    <p className="mt-2 text-slate-600">
                      ЗП, компенсация, отпуск и т.д. прописываются
                      в названии папок и загрузочного файла.
                    </p>

                    <p className="mt-2 font-semibold text-red-600">
                      НЕОБХОДИМО РЕДАКТИРОВАТЬ НА НУЖНЫЙ ВИД ОПЛАТЫ
                      ДЛЯ ПРАВИЛЬНОГО УЧЕТА!
                    </p>

                  </div>

                  <p className="mt-4">
                    Сотрудник переходит в соответствующий раздел
                    Банк-клиента, позволяющий импортировать ведомости
                    по Зарплатному проекту. Поочередно производит импорт
                    ведомостей XML.
                  </p>

                  <p className="mt-4">
                    После успешного импорта всех ведомостей необходимо
                    подписать каждую из них SMS-кодом, который поступает
                    на почту на сервере.
                  </p>

                  <p className="mt-4">
                    Далее сотрудник переходит в раздел импорта реестров
                    с платежными поручениями, импортирует TXT-файл
                    и подписывает загруженный реестр платежей SMS-кодом.
                  </p>
                </>,

                <>
                  <strong>Отметка об отправке.</strong> После подписания
                  всех платежных документов сотрудник возвращается
                  в папку с заявкой и ставит в её наименовании знак «!».
                </>,

                <>
                  <strong>Скачивание исполненных ведомостей.</strong>
                  По окончании рабочего дня сотрудник выгружает все
                  исполненные ведомости по зарплатному проекту в:

                  <div className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-sm text-purple-300">
                    M:\ВЫПИСКИ ДЛЯ БАНКА\*Месяц*\*День*\_ведомости\*Наименование организации и банка*
                  </div>
                </>,
              ]}
            />


            <InfoBlock title="Результат">

              Все заявки обработаны: ведомости и платежные поручения
              загружены, подписаны и отправлены в банк.

              <br />
              <br />

              Все заявки отмечены «!», исполненные ведомости выгружены,
              количество документов соответствует заявкам.

            </InfoBlock>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-slate-800 bg-slate-950">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-slate-500">

          <p>
            © 2026 OOO Velant Group
          </p>

          <a
            href="/"
            className="transition hover:text-white"
          >
            ← На главную
          </a>

        </div>

      </footer>

    </main>
  );
}


/* ====================================================== */
/* COMPONENTS */
/* ====================================================== */

function Steps({
  steps,
}: {
  steps: React.ReactNode[];
}) {
  return (
    <div className="space-y-5">

      {steps.map((step, index) => (

        <div
          key={index}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
        >

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            {index + 1}
          </div>

          <div className="pt-1 leading-7 text-slate-600">
            {step}
          </div>

        </div>

      ))}

    </div>
  );
}


function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">

      <h3 className="mb-3 text-lg font-bold">
        {title}
      </h3>

      <div className="leading-7 text-slate-600">
        {children}
      </div>

    </div>
  );
}