import { IoMdCash } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { BsPercent } from "react-icons/bs";
import { CiBank } from "react-icons/ci";

export default function PaymentPage() {
  return (
    <section className="flex flex-col gap-16 justify-center w-full max-w-7xl px-10 pb-10 mx-auto">
      <div className="flex flex-col gap-4 mt-4">
        <h1 className="text-xl text-amber-600 font-semibold mt-4">Оплата</h1>
        <h2 className="text-4xl font-bold">Способы оплаты</h2>
        <p className="max-w-xl text-amber-50/40">
          Выберите удобный способ расчёта — наличными, картой, переводом по
          QR-коду или в рассрочку. Условия одинаковы для всех регионов доставки
          и не зависят от суммы заказа.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-2">Чем можно оплатить?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full">
          <div className="flex flex-col gap-2 border border-amber-600/20 p-6 rounded-md">
            <IoMdCash className="fill-amber-600 inline size-7 mb-2" />
            <h3 className="text-amber-50/80 text-lg font-semibold">
              Наличными при получении
            </h3>
            <p className="text-amber-50/40 text-xs">
              Оплата курьеру или в шоу-руме в момент получения мебели.
            </p>
          </div>
          <div className="flex flex-col gap-2 border border-amber-600/20 p-6 rounded-md">
            <MdOutlinePayment className="fill-amber-600 inline size-7 mb-2" />
            <h3 className="text-amber-50/80 text-lg font-semibold">
              Банковской картой
            </h3>
            <p className="text-amber-50/40 text-xs">
              Visa, Mastercard и Мир — онлайн на сайте или терминалом при
              получении.
            </p>
          </div>
          <div className="flex flex-col gap-2 border border-amber-600/20 p-6 rounded-md">
            <BsQrCode className="fill-amber-600 inline size-7 mb-2" />
            <h3 className="text-amber-50/80 text-lg font-semibold">
              СБП — по QR-коду
            </h3>
            <p className="text-amber-50/40 text-xs">
              Перевод через Систему быстрых платежей напрямую со счёта, без
              комиссии.
            </p>
          </div>
          <div className="flex flex-col gap-2 border border-amber-600/20 p-6 rounded-md">
            <IoHome className="fill-amber-600 inline size-7 mb-2" />
            <h3 className="text-amber-50/80 text-lg font-semibold">
              Безналичный расчёт
            </h3>
            <p className="text-amber-50/40 text-xs">
              Для юридических лиц — выставляем счёт с НДС и полным пакетом
              документов.
            </p>
          </div>
          <div className="flex flex-col gap-2 border border-amber-600/20 p-6 rounded-md">
            <BsPercent className="fill-amber-600 inline size-7 mb-2" />
            <h3 className="text-amber-50/80 text-lg font-semibold">
              Рассрочка 0%
            </h3>
            <p className="text-amber-50/40 text-xs">
              Разбиваем стоимость на 4–12 месяцев без переплат и скрытых
              процентов.
            </p>
          </div>
          <div className="flex flex-col gap-2 border border-amber-600/20 p-6 rounded-md">
            <CiBank className="fill-amber-600 inline size-7 mb-2" />
            <h3 className="text-amber-50/80 text-lg font-semibold">
              Банковский кредит
            </h3>
            <p className="text-amber-50/40 text-xs">
              Оформляем потребительский кредит от банков-партнёров прямо на
              сайте.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-2">Как проходит оплата заказа</h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-2">
            <span className="flex w-8 h-8 justify-center items-center rounded-full border border-amber-600 text-amber-600 text-xs mb-2">
              1
            </span>
            <h3 className="text-amber-50/80 text-base font-semibold">
              Предоплата 30%
            </h3>
            <p className="text-amber-50/40 text-xs">
              После согласования эскиза и размеров — для запуска изготовления.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex w-8 h-8 justify-center items-center rounded-full border border-amber-600 text-amber-600 text-xs mb-2">
              2
            </span>
            <h3 className="text-amber-50/80 text-base font-semibold">
              Производство
            </h3>
            <p className="text-amber-50/40 text-xs">
              Мебель изготавливается в мастерской — доплачивать на этом этапе не
              нужно.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex w-8 h-8 justify-center items-center rounded-full border border-amber-600 text-amber-600 text-xs mb-2">
              3
            </span>
            <h3 className="text-amber-50/80 text-base font-semibold">
              Остаток при получении
            </h3>
            <p className="text-amber-50/40 text-xs">
              Доплачиваете оставшиеся 70% курьеру или в шоу-руме любым удобным
              способом.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 max-w-6/9">
        <h2 className="text-2xl font-bold mb-2">Частые вопросы</h2>
        <div className="flex flex-col gap-2 rounded border border-amber-600/20 p-5">
          <h3 className="text-amber-50/80 text-base font-semibold">
            Можно ли оплатить частями?
          </h3>
          <p className="text-amber-50/40 text-base">
            Да, рассрочка 0% доступна на срок от 4 до 12 месяцев без переплат.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded border border-amber-600/20 p-5">
          <h3 className="text-amber-50/80 text-base font-semibold">
            Какая предоплата нужна для начала работы?
          </h3>
          <p className="text-amber-50/40 text-base">
            30% от стоимости заказа — после утверждения эскиза и размеров.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded border border-amber-600/20 p-5">
          <h3 className="text-amber-50/80 text-base font-semibold">
            Выдаёте ли вы закрывающие документы для организаций?
          </h3>
          <p className="text-amber-50/40 text-base">
            Да, для юридических лиц оформляем счёт, акт и счёт-фактуру с НДС.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded border border-amber-600/20 p-5">
          <h3 className="text-amber-50/80 text-base font-semibold">
            Можно ли оплатить картой другого банка?
          </h3>
          <p className="text-amber-50/40 text-base">
            Да, принимаем карты Visa, Mastercard и Мир любых российских банков.
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-2 rounded-lg border border-amber-600/40 p-10">
        <div className="flex flex-col gap-1">
          <h2 className="text-amber-50/80 text-xl font-semibold">
            Остались вопросы по оплате?
          </h2>
          <p className="text-amber-50/40 text-base">
            Перезвоним и поможем выбрать удобный вариант расчёта.
          </p>
        </div>
        <button className="cursor-pointer bg-amber-600 text-black font-bold rounded-lg px-6">
          Задать вопрос
        </button>
      </div>
    </section>
  );
}
