import { HeaderNav } from "@/widgets/navigation-header/HeaderNav";
import { FavoriteButton } from "@/features/favoritebutton/FavoriteButton";
import { HomeIcon } from "@/shared/assets/icons/HomeIcon";
import { CiSearch } from "react-icons/ci";
import { AdminButton } from "@/features/adminButton/AdminButton";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center py-5 gap-5">
      <div className="flex justify-between items-center max-w-7xl w-full px-10">
        <div className="flex font-semibold text-xl items-center text-amber-600 gap-3 h-min">
          <HomeIcon className="w-7 h-7" />
          Столица
          <span className="bg-amber-600 text-black p-2 rounded">Кайтаг</span>
        </div>
        <div className="flex gap-3 items-bottom justify-end">
          <div className="flex border-b items-center border-amber-600/40">
            <input
              className="text-amber-50/40 outline-0"
              type="text"
              placeholder="Поиск"
            />
            <CiSearch className="cursor-pointer" />
          </div>
          <FavoriteButton />
          <AdminButton />
        </div>
      </div>
      <hr className="h-1 w-full" />
      <div className="flex flex-col justify-between items-center max-w-7xl w-full px-10 gap-5 lg:flex-row">
        <HeaderNav />
      </div>
    </header>
  );
}
