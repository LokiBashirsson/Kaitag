import { StaticImageData } from "next/image";

export interface ICatalogCard {
  id: number;
  image: StaticImageData;
  name: string;
  price: number;
}
