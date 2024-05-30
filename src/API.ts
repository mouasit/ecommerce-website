import { categories, products } from "./data";
import type { Category, SousCategory } from "./data";
import type { Product } from "./data";

export type DisplayedCategory = {
  id: string;
  name: string;
  products: string[];
  sousCategories: DisplayedSousCategory[];
};

export type DisplayedSousCategory = {
  id: string;
  name: string;
};

export function getCategory({
  nameCategory,
}: {
  nameCategory: string;
}): DisplayedCategory | undefined {
  const targetCategory = categories.find(
    (category: Category) =>
      category.name.toLowerCase() === nameCategory.toLowerCase(),
  );

  if (targetCategory)
    return {
      id: targetCategory.id,
      name: targetCategory.name,
      products: targetCategory.products,
      sousCategories: targetCategory.sousCategories.map(
        (sousCategory: SousCategory) => {
          return { id: sousCategory.id, name: sousCategory.name };
        },
      ),
    };
  return undefined;
}

export function getSousCategory({
  nameCategory,
  nameSousCategory,
}: {
  nameCategory: string;
  nameSousCategory: string;
}): DisplayedCategory | undefined {
  const targetCategory = categories.find(
    (category: Category) =>
      category.name.toLowerCase() === nameCategory.toLowerCase(),
  );
  if (targetCategory) {
    const targetSousCategory = targetCategory.sousCategories.find(
      (sousCategory: SousCategory) =>
        sousCategory.name.toLowerCase() === nameSousCategory.toLowerCase(),
    );
    if (targetSousCategory)
      return {
        id: targetSousCategory.id,
        name: targetSousCategory.name,
        products: targetSousCategory.products,
        sousCategories: targetCategory.sousCategories.map(
          (sousCategory: SousCategory) => {
            return { id: sousCategory.id, name: sousCategory.name };
          },
        ),
      };
  }
  return undefined;
}

export function getProduct(productId: string): Product | undefined {
  return products.find((product: Product) => product.id === productId);
}

export function getRecentProduct(): string[] {
  return ["p7", "p9", "p10", "p11", "p12", "p2", "p6"];
}
