"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Ошибка на главной странице:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="p-4 bg-amber-50 dark:bg-amber-950 text-amber-600 rounded-full">
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h1 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Не удалось загрузить главную страницу
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-sm">
        Проверьте интернет-соединение. Мы уже восстанавливаем работу <br />
        «Кайтаг_Мебель».
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 h-12 px-6 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium transition-transform active:scale-95 shadow-sm"
      >
        Перезагрузить страницу
      </button>
    </div>
  );
}
