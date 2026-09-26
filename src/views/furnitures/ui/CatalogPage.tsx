"use client";

import FurnitureCard from "@/entities/furniture/FurnitureCard";
import { mebel1, mebel2, mebel3, mebel4 } from "@/shared/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, Suspense } from "react";

function CatalogMenu() {
  const pathname = usePathname();

  const catalogMenu = [
    {
      id: 1,
      name: "Гостиная",
      link: "/catalog/lounge",
    },
    {
      id: 2,
      name: "Кухня",
      link: "/catalog/kitchen",
    },
    {
      id: 3,
      name: "Спальня",
      link: "/catalog/bedroom",
    },
    {
      id: 4,
      name: "Прихожая",
      link: "/catalog/hallways",
    },
    {
      id: 5,
      name: "Детская",
      link: "/catalog/children",
    },
    {
      id: 6,
      name: "Уличная мебель",
      link: "/catalog/outdoor",
    },
  ];

  return (
    <nav className="grid gap-3 wrap font-manrope text-sm justify-start items-center max-w-7xl w-full mb-2 lg:flex lg:flex-row lg:w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      {catalogMenu.map((i) => {
        return (
          <Link
            key={i.id}
            className={` border rounded py-2.5 px-5 transition-colors hover:border-amber-600 hover:text-amber-50
              ${i.link === pathname ? "border-amber-600 text-amber-50" : "border-amber-600/25"}`}
            href={i.link}
          >
            {i.name}
          </Link>
        );
      })}
    </nav>
  );
}

function SortCatalog() {
  return (
    <div className="flex justify-between items-center max-w-7xl w-full px-10">
      <span className="text-sm text-amber-600">Найдено 12 товаров</span>
      <h2>Сортировка:</h2>
      <p className="cursor-pointer hover:text-amber-50 transition-colors">
        По цене
      </p>
      <p className="cursor-pointer hover:text-amber-50 transition-colors">
        По популярности
      </p>
      <p className="cursor-pointer hover:text-amber-50 transition-colors">
        По новинкам
      </p>
      <p className="cursor-pointer hover:text-amber-50 transition-colors">
        По алфавиту
      </p>
      <Link
        href="/catalog"
        className="text-sm text-amber-600 hover:text-amber-50"
      >
        Смотреть все
      </Link>
    </div>
  );
}

function CatalogPage() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full max-w-7xl px-10 pb-10 mx-auto">
      <CatalogMenu />
      <h1 className="text-2xl font-bold py-8">Каталог мебели</h1>
      <hr className="h-1 w-full" />
      <SortCatalog />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-full">
        <Suspense fallback={<div>Данные загружаются...</div>}>
          <FurnitureCard image={mebel1} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel2} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel3} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel4} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel1} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel2} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel3} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel4} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel1} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel2} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel3} name="Кайтагская Мебель" price={100} />
          <FurnitureCard image={mebel4} name="Кайтагская Мебель" price={100} />
        </Suspense>
      </div>
    </section>
  );
}

export const FurnituresPage = memo(CatalogPage);
