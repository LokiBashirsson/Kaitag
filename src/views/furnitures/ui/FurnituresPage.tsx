import CatalogCard from "@/entities/cards/catalog-card/ui/CatalogCard";
import { SortCatalog } from "@/entities/sort/SortCatalog";
import AddToCart from "@/features/addtocart/ui/AddToCart";
import { furnituresDB } from "@/shared/api/db/catalog/furnitures/furnitures.db";
import { FurnitureCatalog } from "@/widgets/navigation-furniture/FurnitureCatalog";
import { memo, Suspense } from "react";
import { MdFavoriteBorder } from "react-icons/md";

function FurnituresPageElem() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full max-w-7xl px-10 pb-10 mx-auto">
      <FurnitureCatalog />
      <h1 className="text-2xl font-bold py-8">Мебель</h1>
      <hr className="h-1 w-full" />
      <p>
        Добро пожаловать в наш каталог мебели! Здесь вы найдете разнообразные
        модели и стили для любого вкуса.
      </p>
      <hr className="h-1 w-full" />
      <SortCatalog totalCount={furnituresDB.length} href="furnitures" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Suspense fallback={<div>Данные загружаются...</div>}>
          {furnituresDB.map((item) => (
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

export const FurnituresPage = memo(FurnituresPageElem);
