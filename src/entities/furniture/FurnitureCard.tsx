import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function FurnitureCard({
  image,
  name,
  price,
}: {
  image: StaticImageData;
  name: string;
  price: number;
}) {
  return (
    <Link
      href="/furniture"
      className="flex flex-col gap-2 rounded p-4 w-xs hover:shadow-lg transition-shadow"
    >
      <Image
        loading="eager"
        className="w-full h-70 object-cover rounded"
        src={image}
        alt=""
      />
      <div>{name}</div>
      <div>{price.toFixed(2)}р</div>
      <button className="cursor-pointer bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition-colors">
        В Корзину
      </button>
    </Link>
  );
}
