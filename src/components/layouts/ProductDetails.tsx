import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import {
  AddToCartProductIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  FullScreenIcon,
  MinusIcon,
  PlusIcon,
} from "./Icons";
import imageBlack1 from "../../assets/products/product-info/black/1.jpg";
import imageBlack2 from "../../assets/products/product-info/black/2.jpg";
import imageBlack3 from "../../assets/products/product-info/black/3.jpg";
import imageBlack4 from "../../assets/products/product-info/black/4.jpg";

import imageGreen1 from "../../assets/products/product-info/green/1.png";
import imageGreen2 from "../../assets/products/product-info/green/2.png";
import imageGreen3 from "../../assets/products/product-info/green/3.png";
import imageGreen4 from "../../assets/products/product-info/green/4.png";

import imageBlue1 from "../../assets/products/product-info/blue/1.png";
import imageBlue2 from "../../assets/products/product-info/blue/2.png";
import imageBlue3 from "../../assets/products/product-info/blue/3.png";
import imageBlue4 from "../../assets/products/product-info/blue/4.png";

import PrimaryButton from "../layouts/PrimaryButton";
import SelectedColorItem from "../layouts/SelectedColorItem";
import SlideCategoryProduct from "./SlideCategoryProduct";
import { useState } from "react";

export default function ProductDetails() {
  const [selectedColorProduct, setSelectedColorProduct] = useState<number>(0);
  const productWithColorsAndImages = [
    {
      imagesProduct: [imageBlack1, imageBlack2, imageBlack3, imageBlack4],
      colorProduct: "#000",
    },
    {
      imagesProduct: [imageGreen1, imageGreen2, imageGreen3, imageGreen4],
      colorProduct: "#59965C",
    },

    {
      imagesProduct: [imageBlue1, imageBlue2, imageBlue3, imageBlue4],
      colorProduct: "#3694C7",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    customPaging: (i: number) => {
      return (
        <img
          src={
            productWithColorsAndImages[selectedColorProduct].imagesProduct[i]
          }
          alt="product"
          className="product-slider-dots  w-full cursor-pointer rounded-xl border-[3px] border-grayLight"
        />
      );
    },
  };
  return (
    <section className="mt-[2rem] items-start gap-8 px-4 md:flex md:justify-between lg:gap-12 2xlg:px-0">
      <div className="relative  md:w-[50%] lg:ml-[8.5rem] lg:w-[45%]">
        <SlickSlider {...settings}>
          {productWithColorsAndImages[selectedColorProduct].imagesProduct.map(
            (image, index) => {
              return <SlideCategoryProduct imagesProduct={image} key={index} />;
            },
          )}
        </SlickSlider>
        <button className="absolute right-5 top-5 h-7 w-7">
          <FullScreenIcon className="fill-bluePrimary" />
        </button>
      </div>

      <div className="mt-[11rem]  flex flex-col gap-5 md:mt-2 md:w-[50%] lg:space-y-8">
        <span className="text-[1.5rem] font-semibold capitalize text-bluePrimary">
          Apple iPhone 13 6,1" 5G
        </span>
        <div className="space-x-2 text-[1.6rem] font-bold text-bluePrimary">
          <span>10 000</span>
          <span className="text-yellowPrimary">DH</span>
        </div>
        <ul className="ml-5 list-disc space-y-3 text-sm font-light text-grayPrimary">
          <li>Bass and Stereo Sound</li>
          <li>Display with 3088 x 1440 pixels resolution</li>
          <li>Memory, Storage & SIM: 12GB RAM, 256GB</li>
        </ul>
        <div className="flex items-center gap-5 text-lg font-medium text-bluePrimary">
          Chose color
          <div className="flex items-center gap-3">
            {productWithColorsAndImages.map((product, index) => {
              return (
                <SelectedColorItem
                  backgroundColor={product.colorProduct}
                  key={index}
                  selected={index === selectedColorProduct ? true : false}
                  onClick={() => setSelectedColorProduct(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-5 flex max-w-[533px] gap-2 md:max-w-none">
          <div className="flex w-[60%] items-center justify-between rounded-2xl bg-grayLight p-3 text-xl font-medium text-bluePrimary xlg:w-[65%]">
            <button className="rounded-full bg-yellowPrimary p-1">
              <MinusIcon className="h-4 w-4 fill-bluePrimary" />
            </button>
            1
            <button className="rounded-full bg-yellowPrimary p-1">
              <PlusIcon className="h-4 w-4 fill-bluePrimary" />
            </button>
          </div>
          <PrimaryButton
            icon={<AddToCartProductIcon className="h-8 w-8 fill-bluePrimary" />}
            value="Add to cart"
            className="flex w-full items-center justify-center gap-3 text-lg"
          />
        </div>
      </div>
    </section>
  );
}

function SliderNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute right-4  top-[50%] z-[1]">
      <ArrowRightIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}

function SliderPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute left-4  top-[50%] z-[1]">
      <ArrowLeftIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}
