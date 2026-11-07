"use client";
import { headerNavDB } from "@/shared/api/db/navs/header/ui/headerNavDB";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-3 wrap font-manrope text-sm justify-start max-w-7xl w-full md:flex-row md:w-full items-stretch ">
      {headerNavDB.map((i) => {
        const { id, name, link, Icon } = i;

        return (
          <Link
            key={i.id}
            className={`flex items-center lg:w-max border rounded py-2.5 px-5 transition-colors hover:border-amber-600 hover:text-amber-50
              ${pathname.toLowerCase().startsWith(i.link.toLowerCase()) ? "border-amber-600 text-amber-50" : "border-amber-600/25"}`}
            href={i.link}
          >
            {Icon && <Icon className="mr-2" />}
            {i.name}
          </Link>
        );
      })}
    </nav>
  );
}
