import { CatalogPage } from "@/views/catalog/ui/CatalogPage";
import { ICatalogSlugProps } from "./model/CatalogSlug.interface";

export default async function CatalogSlug({ params }: ICatalogSlugProps) {
  const resolvedParams = await params;
  return <CatalogPage slug={resolvedParams.slug} />;
}
