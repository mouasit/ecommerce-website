export default function SliderProduct({
  imagesProduct,
}: {
  imagesProduct: any;
}) {
  return (
    <div className="relative top-[1rem] p-16 lg:top-0 lg:h-[34rem]">
      <div className="flex justify-center lg:h-full lg:items-center">
        <img src={imagesProduct} alt="product" className="lg:w-[20rem]" />
      </div>
    </div>
  );
}
