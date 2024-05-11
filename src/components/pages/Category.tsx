import CategoriesNav from "../layouts/CategoriesNav";
import CategoryProducts from "../layouts/CategoryProducts";

export default function Category() {
  return (
    <div className="mt-[4rem] flex flex-col-reverse gap-16 px-4 lg:flex-row lg:gap-0 2xlg:px-0">
      <CategoriesNav />
      <CategoryProducts />
    </div>
  );
}
