import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex flex-col gap-8 max-w-7xl w-full px-10 py-10 mx-auto text-[14px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-4 mb-8">
          <div className="flex flex-col gap-4">
            <div className="text-[18px] text-amber-600 font-bold">
              Столица Кайтаг
            </div>
            <p>
              Мебель ручной работы из массива дерева. Собственное производство,
              доставка и сборка по всей России.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-amber-100 font-bold gap-0.5">Каталог</h5>
            <div className="flex flex-col gap-2.5">
              <Link href="/catalog">Гостиные</Link>
              <Link href="/catalog">Спальни</Link>
              <Link href="/catalog">Кухни</Link>
              <Link href="/catalog">Прихожие</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-amber-100 font-bold gap-0.5">Компания</h5>
            <div className="flex flex-col gap-2.5">
              <Link href="/about">О мастерской</Link>
              <Link href="/warranty">Гарантия</Link>
              <Link href="/payment">Оплата и рассрочка</Link>
              <Link href="/delivery">Доставка</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-amber-100 font-bold gap-0.5">Контакты</h5>
            <div className="flex flex-col gap-2.5">
              <span>+7 (988) 000-00-00</span>
              <span>info@stolitsa-kaytag.ru</span>
              <span>Респ. Дагестан, с. Джавгат</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center text-amber-50/40 text-[12px]">
          <span>© 2026 Столица Кайтаг. Все права защищены.</span>
          <span>Мебель ручной работы с 2025 года</span>
        </div>
      </div>
    </footer>
  );
}
