import { useParams } from "react-router-dom";
import CategoriesNav from "../layouts/CategoriesNav";
import CategoryProducts from "../layouts/CategoryProducts";
import { useEffect, useState } from "react";
import { getCategory, getSousCategory } from "../../API";
import type { DisplayedCategory } from "../../API";
import NotFound from "./NotFound";

export default function Category() {
  const [category, setCategory] = useState<DisplayedCategory>();
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const { id, action } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    if (action)
      setCategory(
        getSousCategory({
          nameCategory: id as string,
          nameSousCategory: action,
        }),
      );
    else if (id) setCategory(getCategory({ nameCategory: id }));
    setDataLoaded(true);
  }, [id, action]);

  if (category) {
    return (
      <div className="mt-[4rem] flex flex-col-reverse gap-16 px-4 lg:flex-row lg:gap-0 2xlg:px-0">
        <CategoriesNav
          sousCategories={category.sousCategories}
          title={action ? (id as string) : category.name}
        />
        <CategoryProducts products={category.products} title={category.name} />
      </div>
    );
  }
  if (dataLoaded) return <NotFound />;
  return <div className="h-screen"></div>;
}
