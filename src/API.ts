import { categories, products } from "./DataBase";
import type {
  Category,
  SousCategory,
  Product,
  Variants,
  ColorsDefinition,
} from "./DataBase";

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

export type DisplayProduct = {
  id: string;
  name: string;
  price: number;
  imageProduct: any;
};

export type DisplayProductDetails = {
  id: string;
  name: string;
  title?: string;
  price: number;
  features?: string[];
  itemsAttributes: ItemAttributes[];
  images?: string[] | null;
  variants?: Variants;
  colorsDefinition?: ColorsDefinition[];
};

export type ItemAttributes = {
  name: string;
  items: string[];
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

export function getProduct(productId: string): DisplayProduct | undefined {
  const targetProduct = products.find(
    (product: Product) => product.id === productId,
  );

  if (targetProduct)
    return {
      id: targetProduct.id,
      name: targetProduct.name,
      price: targetProduct.price,
      imageProduct: targetProduct.imageProduct,
    };
  return undefined;
}

export function getRecentProduct(): string[] {
  return ["p17", "p10", "p3", "p11", "p12", "p9", "p2", "p6"];
}

export function getProductsByCategory({
  nameCategory,
}: {
  nameCategory: string;
}): string[] | undefined {
  return categories.find((category: Category) => category.name === nameCategory)
    ?.products;
}

export function getProductDetails({
  productId,
}: {
  productId: string;
}): DisplayProductDetails | undefined {
  const targetProduct: Product | undefined = products.find(
    (product: Product) => product.id === productId,
  );
  if (targetProduct) {
    let itemsAttributes: ItemAttributes[] = [];
    if (targetProduct.variants) {
      targetProduct.variants.attributesName.forEach(
        (attributeName: string, index: number) => {
          if (attributeName !== "quantity") {
            itemsAttributes.push({ name: attributeName, items: [] });
            targetProduct.variants?.itemsAttributes.forEach(
              (itemAttribute: any) => {
                if (
                  !itemsAttributes[index].items.includes(
                    itemAttribute[attributeName],
                  )
                )
                  itemsAttributes[index].items.push(
                    itemAttribute[attributeName],
                  );
              },
            );
          }
        },
      );
    }
    return {
      id: targetProduct.id,
      name: targetProduct.name,
      title: targetProduct.title ? targetProduct.title : targetProduct.name,
      price: targetProduct.price,
      features: targetProduct.features,
      itemsAttributes: itemsAttributes,
      images: targetProduct.images
        ? targetProduct.images
        : [targetProduct.imageProduct],
      variants: targetProduct.variants,
      colorsDefinition: targetProduct.colorsDefinition,
    };
  }

  return;
}
