export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-12 animate-pulse">
      {/* 1. Скелетон главного баннера (большой серый блок сверху) */}
      <div className="w-full h-[350px] sm:h-[450px] bg-zinc-200 dark:bg-zinc-800 rounded-3xl" />

      {/* 2. Блок секции: Заголовок и сетка товаров */}
      <div className="space-y-6">
        {/* Заголовок (например, "Популярная мебель") */}
        <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />

        {/* Сетка из 4-х мебельных карточек-скелетонов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="border border-zinc-100 dark:border-zinc-900 p-4 rounded-2xl space-y-4 bg-white dark:bg-zinc-950"
            >
              {/* Картинка мебели */}
              <div className="w-full h-48 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />

              {/* Название товара */}
              <div className="h-5 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded-md" />

              {/* Короткое описание */}
              <div className="h-4 w-full bg-zinc-100 dark:bg-zinc-900 rounded-md" />

              {/* Нижняя часть: Цена + Кнопка */}
              <div className="flex justify-between items-center pt-2">
                {/* Цена */}
                <div className="h-6 w-16 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                {/* Кнопка "Купить" */}
                <div className="h-10 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
