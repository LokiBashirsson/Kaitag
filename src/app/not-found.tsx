"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center bg-white dark:bg-black">
      <span className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
        Ошибка 404
      </span>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
        Страница не найдена
      </h1>

      <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-md">
        Путь{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono text-zinc-950 dark:text-zinc-200">
          {pathname}
        </code>{" "}
        не существует или был перемещен.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="h-12 px-6 inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black font-medium text-base hover:opacity-90 transition-opacity"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
