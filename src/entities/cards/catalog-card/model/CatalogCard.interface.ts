import { StaticImageData } from "next/image";

export interface ICatalogCard {
  image: StaticImageData;
  name: string;
  price: number;
  discount?: number;
  widthClassName?: string;
  shadowClassName?: string;
  addToCart?: React.ReactNode;
  favorite?: React.ReactNode;
}
