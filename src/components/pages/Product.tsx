import { useParams } from "react-router-dom";
import ProductDetails from "../layouts/ProductDetails";
import ProductTabs from "../layouts/ProductTabs";
import RelatedProducts from "../layouts/RelatedProducts";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import { getProductDetails } from "../../API";
import type { DisplayProductDetails } from "../../API";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<DisplayProductDetails>();
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    if (id) setProduct(getProductDetails({ productId: id }));

    setDataLoaded(true);
  }, [id]);
  if (product)
    return (
      <div>
        <ProductDetails
          productId={id as string}
          productName={product.name}
          imageProduct={product.imageProduct}
          title={product.title as string}
          price={product.price}
          images={product.images}
          variants={product.variants}
          features={product.features}
          itemsAttributes={product.itemsAttributes}
          colorsDefinition={product.colorsDefinition}
        />
        <ProductTabs />
        <RelatedProducts />
      </div>
    );
  if (dataLoaded) return <NotFound />;
  return (
    <div className="fixed left-0 top-0 z-[2] h-full w-full bg-white"></div>
  );
}
