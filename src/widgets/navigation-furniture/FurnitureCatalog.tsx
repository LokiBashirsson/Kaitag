"use client";
import { furnitureMenuDB } from "@/shared/api/db/navs/furniture/ui/furnitureMenu.db";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FurnitureCatalog() {
  const pathname = usePathname();

  return (
    <nav className="grid gap-3 wrap font-manrope text-sm justify-start items-center max-w-7xl w-full mb-2 lg:flex lg:flex-row lg:w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      {furnitureMenuDB.map((i) => {
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
