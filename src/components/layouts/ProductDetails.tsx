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
import imageBlack5 from "../../assets/products/product-info/black/5.jpg";

import imageGreen1 from "../../assets/products/product-info/green/1.jpg";
import imageGreen2 from "../../assets/products/product-info/green/2.jpg";
import imageGreen3 from "../../assets/products/product-info/green/3.jpg";
import imageGreen4 from "../../assets/products/product-info/green/4.jpg";

import imageBlue1 from "../../assets/products/product-info/blue/1.jpg";
import imageBlue2 from "../../assets/products/product-info/blue/2.jpg";
import imageBlue3 from "../../assets/products/product-info/blue/3.jpg";
import imageBlue4 from "../../assets/products/product-info/blue/4.jpg";

import PrimaryButton from "../layouts/PrimaryButton";
import SelectedColorItem from "../layouts/SelectedColorItem";
import SlideCategoryProduct from "./SlideCategoryProduct";
import { useEffect, useRef, useState } from "react";

export default function ProductDetails() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedColorProduct, setSelectedColorProduct] = useState<number>(0);
  const screenSize = 1024;
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(false);
  const [isVertical, setIsVertical] = useState(window.innerWidth >= screenSize);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const productWithColorsAndImages = [
    {
      imagesProduct: [
        imageBlack1,
        imageBlack2,
        imageBlack3,
        imageBlack4,
        // imageBlack5,
      ],
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

  const scrollPrev = () => {
    const container = sectionRef.current?.querySelector(
      ".slick-dots",
    ) as HTMLElement;
    if (isVertical) {
      container.scrollBy({ top: -container.clientHeight, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    const container = sectionRef.current?.querySelector(
      ".slick-dots",
    ) as HTMLElement;
    if (isVertical) {
      container.scrollBy({ top: container.clientHeight, behavior: "smooth" });
    } else {
      container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const container = sectionRef.current?.querySelector(
      ".slick-dots",
    ) as HTMLElement;
    if (isVertical) {
      setShowPrevArrow(container.scrollTop > 0);
      setShowNextArrow(
        container.scrollTop + container.clientHeight < container.scrollHeight,
      );
    } else {
      setShowPrevArrow(container.scrollLeft > 0);
      setShowNextArrow(
        container.scrollLeft + container.clientWidth < container.scrollWidth,
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsVertical(window.innerWidth >= screenSize);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const container = sectionRef.current?.querySelector(
      ".slick-dots",
    ) as HTMLElement;

    const preventScroll = (e: any) => e.preventDefault();
    // container.addEventListener('wheel', preventScroll, { passive: false });

    if (isVertical) {
      const section = sectionRef.current as HTMLElement;
      const dimensionSection = section.getBoundingClientRect();
      console.log(dimensionSection.width);

      if (container.childElementCount <= 3) setShowNextArrow(false);
      else if (
        container.childElementCount === 4 &&
        dimensionSection.width >= 1169
      ) {
        setShowNextArrow(false);
      } else setShowNextArrow(true);
    } else {
      if (container.scrollWidth > container.clientWidth) setShowNextArrow(true);
      else setShowNextArrow(false);
    }

    container.addEventListener("scroll", handleScroll);

    return () => {
      // container.removeEventListener('wheel', preventScroll);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [screenWidth]);

  return (
    <section
      className="relative mt-[2rem] items-start gap-8 px-4 md:flex md:justify-between lg:gap-12 2xlg:px-0"
      ref={sectionRef}
    >
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
        {!isVertical && showPrevArrow ? (
          <div className="absolute top-[105%] flex h-[6.5rem] items-center">
            <button
              className="rounded-full bg-white p-3 shadow-xl"
              onClick={scrollPrev}
            >
              <ArrowLeftIcon className="h-3 w-3 fill-bluePrimary" />
            </button>
          </div>
        ) : null}
        {!isVertical && showNextArrow ? (
          <div className="absolute right-0 top-[105%] flex h-[6.5rem] items-center">
            <button
              className="rounded-full bg-white p-3 shadow-xl"
              onClick={scrollNext}
            >
              <ArrowRightIcon className="h-3 w-3 fill-bluePrimary" />
            </button>
          </div>
        ) : null}
      </div>
      {isVertical && showPrevArrow ? (
        <div className="absolute top-0 flex w-[6.5rem] justify-center">
          <button
            className="rounded-full bg-white p-3 shadow-xl"
            onClick={scrollPrev}
          >
            <ArrowLeftIcon className="h-3 w-3 rotate-90 fill-bluePrimary" />
          </button>
        </div>
      ) : null}
      {isVertical && showNextArrow ? (
        <div className="absolute bottom-0 flex w-[6.5rem] justify-center">
          <button
            className="rounded-full bg-white p-3 shadow-xl"
            onClick={scrollNext}
          >
            <ArrowRightIcon className="h-3 w-3 rotate-90 fill-bluePrimary" />
          </button>
        </div>
      ) : null}
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
