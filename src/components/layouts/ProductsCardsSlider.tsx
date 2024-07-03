import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import ProductCard from "./ProductCard";
import { getProductsByCategory } from "../../API";

export default function ProductsCardsSlider({
  category,
  productDetailsId,
}: {
  category: string;
  productDetailsId?: string;
}) {
  const [products, setProducts] = useState<string[]>();
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow:
      screenWidth >= 632 && screenWidth < 898
        ? 2
        : screenWidth >= 898 && screenWidth < 1190
          ? 3
          : screenWidth >= 1190
            ? 4
            : 1,
    slidesToScroll:
      screenWidth >= 632 && screenWidth < 898
        ? 2
        : screenWidth >= 898 && screenWidth < 1190
          ? 3
          : screenWidth >= 1190
            ? 4
            : 1,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    customPaging: () => (
      <div className="h-[2px] rounded-full bg-bluePrimary"></div>
    ),
  };

  React.useEffect(() => {
    setProducts(getProductsByCategory({ nameCategory: category }));
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  return (
    <SlickSlider {...settings} className="px-7">
      {products ? (
        products.map((productId: string, index: number) => {
          if (productId !== productDetailsId)
            return (
              <div className="card-slide" key={index}>
                <ProductCard productId={productId} />
              </div>
            );
        })
      ) : (
        <div className="h-[5rem]"></div>
      )}
    </SlickSlider>
  );
}

function SliderNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-[40%] z-[1] md:top-[50%] 2xlg:right-0"
    >
      <ArrowRightIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}

function SliderPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-[40%] z-[1] md:top-[50%] 2xlg:left-0"
    >
      <ArrowLeftIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}
