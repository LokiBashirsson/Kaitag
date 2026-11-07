import { INavMenuDB } from "../../model/INavMenuDB.interface";
import { GrCatalogOption } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

export const headerNavDB: INavMenuDB[] = [
  {
    id: 1,
    name: "Каталог",
    link: "/catalog",
    Icon: GrCatalogOption,
  },
  {
    id: 2,
    name: "Мебель",
    link: "/furnitures",
    Icon: IoHomeOutline,
  },
  {
    id: 3,
    name: "Одежда",
    link: "/clothing",
    Icon: GiClothes,
  },
  {
    id: 4,
    name: "Доставка",
    link: "/delivery",
    Icon: TbTruckDelivery,
  },
  {
    id: 5,
    name: "Оплата",
    link: "/payment",
    Icon: MdOutlinePayment,
  },
  {
    id: 6,
    name: "О Компании",
    link: "/about",
    Icon: IoIosInformationCircleOutline,
  },
];
