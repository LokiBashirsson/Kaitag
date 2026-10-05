"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FavoriteButton() {
  const pathname = usePathname();

  return (
    <Link
      href="/favorite"
      className={`lg:w-max border rounded py-2.5 px-5 transition-colors hover:border-amber-600 hover:text-amber-50 w-full
              ${pathname.toLowerCase().startsWith("/favorite") ? "border-amber-600 text-amber-50" : "border-amber-600/25"}`}
    >
      Избранное
    </Link>
  );
}
