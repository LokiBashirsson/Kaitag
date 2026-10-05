import { MdFavoriteBorder } from "react-icons/md";
import CatalogCard from "@/entities/cards/catalog-card/ui/CatalogCard";
import AddToCart from "@/features/addtocart/ui/AddToCart";
import { memo, Suspense } from "react";
import { furnituresDB } from "@/shared/api/db/catalog/furnitures/furnitures.db";
import { SortCatalog } from "@/entities/sort/SortCatalog";
import { clothesDB } from "@/shared/api/db/catalog/clothes/clothes.db";
import Link from "next/link";

function CatalogPageElem({ slug }: { slug?: string }) {
  console.log("Эндпоинт", slug ? slug : "catalog");

  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full max-w-7xl px-10 pb-10 mx-auto">
      <h2 className="text-xl font-bold py-8">Хиты</h2>
      <hr className="h-1 w-full" />
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 max-w-full w-full">
        {furnituresDB.map((e) => {
          if (e.id === 100002 || e.id === 100004)
            return (
              <CatalogCard
                key={e.id}
                image={e.image}
                name={e.name}
                price={e.price}
                discount={0.2}
                shadowClassName="hover:shadow-lg shadow-amber-100/20"
              />
            );
        })}
      </div>
      <hr className="h-1 w-full" />

      <h1 className="text-2xl font-bold py-8">Другое</h1>
      <hr className="h-1 w-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-full">
        {clothesDB.map((e) => {
          if (e.id === 200001 || e.id === 200002 || e.id === 200003)
            return (
              <CatalogCard
                key={e.id}
                image={e.image}
                name={e.name}
                price={e.price}
                discount={0.2}
                shadowClassName="hover:shadow-lg shadow-amber-100/20"
              />
            );
        })}
        <Link
          href="/clothing"
          className="bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 h-max w-max mt-auto mb-0 ml-auto mr-0"
        >
          Смотреть все
        </Link>
      </div>
      <hr className="h-1 w-full" />

      <h1 className="text-2xl font-bold py-8">Каталог мебели</h1>
      <hr className="h-1 w-full" />
      <SortCatalog totalCount={furnituresDB.length} href="catalog" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-full">
        <Suspense fallback={<div>Данные загружаются...</div>}>
          {furnituresDB.map((e) => (
            <CatalogCard
              key={e.id}
              image={e.image}
              name={e.name}
              price={e.price}
              widthClassName="w-xs"
              addToCart={<AddToCart />}
              favorite={
                <MdFavoriteBorder className="w-6 h-6 text-amber-600 cursor-pointer" />
              }
            />
          ))}
          {clothesDB.map((e) => (
            <CatalogCard
              key={e.id}
              image={e.image}
              name={e.name}
              price={e.price}
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

export const CatalogPage = memo(CatalogPageElem);
