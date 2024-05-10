import ProductDetails from "../layouts/ProductDetails";
import ProductTabs from "../layouts/ProductTabs";
import ProductsCardsSlider from "../layouts/ProductsCardsSlider";
import RelatedProducts from "../layouts/RelatedProducts";

export default function Product() {
  return (
    <div>
      <ProductDetails />
      <ProductTabs />
      <RelatedProducts />
    </div>
  );
}
