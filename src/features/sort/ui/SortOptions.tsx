"use client";

import { useState } from "react";

export const SortOptions = () => {
  const [sorting, setSorting] = useState<string | null>();

  return (
    <>
      <h2>Сортировка по: {sorting}</h2>
      <p
        onClick={() => setSorting("цене")}
        className="cursor-pointer hover:text-amber-50 transition-colors"
      >
        По цене
      </p>
      <p
        onClick={() => setSorting("популярности")}
        className="cursor-pointer hover:text-amber-50 transition-colors"
      >
        По популярности
      </p>
      <p
        onClick={() => setSorting("новинкам")}
        className="cursor-pointer hover:text-amber-50 transition-colors"
      >
        По новинкам
      </p>
      <p
        onClick={() => setSorting("алфавиту")}
        className="cursor-pointer hover:text-amber-50 transition-colors"
      >
        По алфавиту
      </p>
    </>
  );
};
