import CatalogCard from "@/entities/cards/catalog-card/ui/CatalogCard";
import { SortCatalog } from "@/entities/sort/SortCatalog";
import AddToCart from "@/features/addtocart/ui/AddToCart";
import { clothesDB } from "@/shared/api/db/catalog/clothes/clothes.db";
import { memo, Suspense } from "react";
import { MdFavoriteBorder } from "react-icons/md";

function ClothingPageElem() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full max-w-7xl px-10 pb-10 mx-auto">
      <h1 className="text-2xl font-bold py-8">Одежда</h1>
      <hr className="h-1 w-full" />
      <p>
        Добро пожаловать в наш каталог одежды! Здесь вы найдете разнообразные
        модели и стили для любого вкуса.
      </p>
      <hr className="h-1 w-full" />
      <SortCatalog totalCount={clothesDB.length} href="clothing" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Suspense fallback={<div>Данные загружаются...</div>}>
          {clothesDB.map((item) => (
            <CatalogCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              discount={0.2}
              shadowClassName="hover:shadow-lg shadow-amber-100/20"
              widthClassName="w-xs"
              addToCart={<AddToCart />}
              favorite={
                <MdFavoriteBorder className="w-6 h-6 text-amber-600 cursor-pointer" />
              }
            />
          ))}
        </Suspense>
      </div>
    </section>
  );
}

export const ClothingPage = memo(ClothingPageElem);
