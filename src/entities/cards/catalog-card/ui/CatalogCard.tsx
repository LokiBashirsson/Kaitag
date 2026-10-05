import Image from "next/image";
import Link from "next/link";
import { ICatalogCard } from "../model/CatalogCard.interface";

export default function CatalogCard({
  image,
  name,
  price,
  discount,
  widthClassName,
  shadowClassName,
  addToCart,
  favorite,
}: ICatalogCard) {
  return (
    <div
      className={`flex flex-col gap-2 p-2 rounded-lg transition-shadow ${shadowClassName}`}
    >
      <Link
        href="/furniture"
        className={`flex flex-col gap-2 max-w-full ${widthClassName}`}
      >
        <Image
          loading="eager"
          className="w-full h-70 object-cover rounded"
          src={image}
          alt=""
        />
        <div>{name}</div>
        <div>
          {discount ? (
            <>
              <span className="text-lg font-bold text-amber-600">
                {(price - price * discount).toFixed(2)}р
              </span>
              <span className="text-sm text-gray-500 line-through ml-2">
                {price.toFixed(2)}р
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-amber-600">
              {price.toFixed(2)}р
            </span>
          )}
        </div>
      </Link>
      <div className="flex justify-between items-center gap-2">
        {favorite}
        {addToCart}
      </div>
    </div>
  );
}
