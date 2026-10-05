import { SortOptions } from "@/features/sort/ui/SortOptions";
import Link from "next/link";

export function SortCatalog({
  totalCount,
  href,
}: {
  totalCount: number;
  href: string;
}) {
  return (
    <div className="flex justify-between items-center max-w-7xl w-full px-10">
      <span className="text-sm text-amber-600">
        Найдено {totalCount} товаров
      </span>
      <SortOptions />
      <Link
        href={`/${href}`}
        className="text-sm text-amber-600 hover:text-amber-50"
      >
        Смотреть все
      </Link>
    </div>
  );
}
