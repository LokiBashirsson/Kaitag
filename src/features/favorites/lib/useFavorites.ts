import { useAppSelector } from "@/shared/hooks/useAppStore";

export const useFavorites = () => {
  const favorites = useAppSelector((state) => state.favorites);
  return { favorites };
};
