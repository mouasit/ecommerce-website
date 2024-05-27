export default function SlideCategoryProduct({
  imagesProduct,
}: {
  imagesProduct: any;
}) {
  return (
    <div className="product-slider-media">
      <img src={imagesProduct} alt="product" className="w-full" />
    </div>
  );
}
