import { ComponentType } from "react";

export interface INavMenuDB {
  id: number;
  name: string;
  link: string;
  Icon?: ComponentType<{ className?: string }>;
}
