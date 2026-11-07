"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";

export function AdminButton() {
  const pathname = usePathname();

  return (
    <Link
      href="/admin"
      className={`flex items-center border rounded py-2.5 px-5 transition-colors hover:border-amber-600 hover:text-amber-50 w-full
              ${pathname.toLowerCase().startsWith("/admin") ? "border-amber-600 text-amber-50" : "border-amber-600/25"}`}
    >
      <FaUser className="mr-2" />
      Админ
    </Link>
  );
}
