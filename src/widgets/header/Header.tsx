"use client";
import { HomeIcon } from "@/shared/assets/icons/HomeIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";

interface IheaderMenu {
  id: number;
  name: string;
  link: string;
}

const headerMenu: IheaderMenu[] = [
  {
    id: 1,
    name: "Каталог",
    link: "/catalog",
  },
  {
    id: 2,
    name: "Доставка",
    link: "/delivery",
  },
  {
    id: 3,
    name: "Оплата",
    link: "/payment",
  },
  {
    id: 4,
    name: "О Компании",
    link: "/about",
  },
];

function HeaderMenu() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-3 wrap font-manrope text-sm justify-start items-center max-w-7xl w-full px-10 md:flex-row md:w-full ">
      {headerMenu.map((i) => {
        return (
          <Link
            key={i.id}
            className={`lg:w-max border rounded py-2.5 px-5 transition-colors hover:border-amber-600 hover:text-amber-50 w-full
              ${pathname.toLowerCase().startsWith(i.link.toLowerCase()) ? "border-amber-600 text-amber-50" : "border-amber-600/25"}`}
            href={i.link}
          >
            {i.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center py-5 gap-5">
      <div className="flex justify-between items-center max-w-7xl w-full px-10">
        <div className="flex font-semibold text-xl items-end text-amber-600 gap-3 h-min">
          <HomeIcon className="w-7 h-7" />
          Столица Кайтаг
        </div>
        <div className="flex border-b items-center border-amber-600/40 pb-2">
          <input
            className="text-amber-50/40 outline-0"
            type="text"
            placeholder="Поиск"
          />
          <CiSearch className="cursor-pointer" />
        </div>
      </div>
      <hr className="h-1 w-full" />
      <HeaderMenu />
    </header>
  );
}
