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

import PrimaryButton from "../layouts/PrimaryButton";
import SelectedColorItem from "../layouts/SelectedColorItem";
import SlideCategoryProduct from "./SlideCategoryProduct";
import { useEffect, useRef, useState } from "react";
import FullScreenSlider from "./FullScreenSlider";
import {
  capitalizeFirstLetter,
  formatNumberWithSpaces,
  getInitialSlide,
} from "../../Helpers";
import DropDown from "./DropDown";
import type { ColorsDefinition, Variants } from "../../DataBase";
import type { ItemAttributes } from "../../API";
export type Filter = {
  name: string;
  value: string;
};

export default function ProductDetails({
  productId,
  title,
  price,
  features,
  itemsAttributes,
  images,
  variants,
  colorsDefinition,
}: {
  productId: string;
  title: string;
  price: number;
  features?: string[];
  itemsAttributes: ItemAttributes[];
  images?: string[] | null;
  variants?: Variants;
  colorsDefinition?: ColorsDefinition[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedColorProduct, setSelectedColorProduct] = useState<number>(0);
  const screenSize = 1024;
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(false);
  const [isVertical, setIsVertical] = useState(window.innerWidth >= screenSize);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [fullScreenSlider, setFullScreenSlider] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [filter, setFilter] = useState<Filter | undefined>(
    colorsDefinition
      ? { name: "color", value: colorsDefinition[0].name }
      : undefined,
  );
  let productWithColorsAndImages: {
    name?: string;
    imagesProduct: string[];
    colorProduct?: string;
  }[] = [];

  if (!colorsDefinition && images) {
    productWithColorsAndImages = [
      {
        imagesProduct: images,
      },
    ];
  }
  colorsDefinition?.forEach((color: any) => {
    productWithColorsAndImages.push({
      name: color.name,
      imagesProduct: color.imagesColor,
      colorProduct: color.code,
    });
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
          draggable={false}
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

  let isDragging = false;

  const handleDragging = (event: any) => {
    const container = sectionRef.current?.querySelector(
      ".slick-dots",
    ) as HTMLElement;
    if (!isDragging) return;
    if (isVertical) container.scrollTop -= event.movementY;
    else container.scrollLeft -= event.movementX;
  };

  const handleMouseDown = () => {
    isDragging = true;
  };

  const handleDragStop = () => {
    isDragging = false;
  };
  useEffect(() => {
    const container = sectionRef.current?.querySelector(
      ".slick-dots",
    ) as HTMLElement;

    container.classList.add("no-scrollbar");

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsVertical(window.innerWidth >= screenSize);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredItems = ({
    filter,
    attributeName,
  }: {
    filter: Filter | undefined;
    attributeName: string;
  }): any => {
    let items: string[] = [];
    if (variants && filter) {
      return variants.itemsAttributes
        .filter(
          (itemAttribute: any) => itemAttribute[filter.name] === filter.value,
        )
        .map((item: any) => item[attributeName]);
    }

    return items;
  };

  useEffect(() => {
    setFullScreenSlider(false);
    document.body.classList.remove("overflow-hidden");
    setFilter(
      colorsDefinition
        ? { name: "color", value: colorsDefinition[0].name }
        : undefined,
    );
    setSelectedColorProduct(0);
  }, [productId]);

  useEffect(() => {
    const container = sectionRef.current?.querySelector(
      ".slick-dots",
    ) as HTMLElement;

    const preventScroll = (e: any) => e.preventDefault();
    container.addEventListener("wheel", preventScroll, { passive: false });

    if (isVertical) {
      const section = sectionRef.current as HTMLElement;
      const dimensionSection = section.getBoundingClientRect();

      if (
        productWithColorsAndImages[selectedColorProduct].imagesProduct.length <=
        3
      )
        setShowNextArrow(false);
      else if (
        productWithColorsAndImages[selectedColorProduct].imagesProduct
          .length === 4 &&
        dimensionSection.width >= 1169
      ) {
        setShowNextArrow(false);
      } else setShowNextArrow(true);
    } else {
      if (container.scrollWidth > container.clientWidth) setShowNextArrow(true);
      else setShowNextArrow(false);
    }

    container.addEventListener("scroll", handleScroll);
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleDragging);
    document.addEventListener("mouseup", handleDragStop);

    return () => {
      container.removeEventListener("wheel", preventScroll);
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleDragging);
      document.removeEventListener("mouseup", handleDragStop);
    };
  }, [
    productWithColorsAndImages,
    productId,
    selectedColorProduct,
    screenWidth,
  ]);

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
        <button
          className="absolute right-5 top-5 h-7 w-7"
          onClick={() => {
            setFullScreenSlider(true);
            document.body.classList.add("overflow-hidden");
          }}
        >
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
      <div className="mt-[11rem]  flex flex-col gap-5 md:mt-2 md:w-[50%] lg:space-y-4">
        <span className="text-[1.5rem] font-semibold capitalize text-bluePrimary">
          {title}
        </span>
        <div className="space-x-2 text-[1.6rem] font-bold text-bluePrimary">
          <span>{formatNumberWithSpaces(price)}</span>
          <span className="text-yellowPrimary">DH</span>
        </div>
        {features ? (
          <ul className="ml-5 list-disc space-y-3 text-sm font-light text-grayPrimary">
            {features.map((feature: string, index: number) => (
              <li key={index}>{capitalizeFirstLetter(feature)}</li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-col gap-8">
          {itemsAttributes.map(
            (itemAttributes: ItemAttributes, index: number) =>
              itemAttributes.name === "color" ? (
                <div
                  className="flex items-center gap-5 text-lg font-medium text-bluePrimary"
                  key={index}
                >
                  <span className="w-[8.3rem]">Chose color</span>
                  <div className="flex items-center gap-3">
                    {productWithColorsAndImages.map((product, index) => {
                      return (
                        <SelectedColorItem
                          backgroundColor={product.colorProduct as string}
                          key={index}
                          selected={
                            index === selectedColorProduct ? true : false
                          }
                          onClick={() => {
                            setFilter({
                              name: itemAttributes.name,
                              value: product.name as string,
                            });
                            setSelectedColorProduct(index);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-5" key={index}>
                  <span className="w-[8.3rem] flex-none text-lg font-medium text-bluePrimary">
                    Chose {itemAttributes.name}
                  </span>
                  <DropDown
                    productId={productId}
                    items={
                      filter && itemAttributes.name !== filter.name
                        ? filteredItems({
                            filter,
                            attributeName: itemAttributes.name,
                          })
                        : itemAttributes.items
                    }
                    attributeName={itemAttributes.name}
                    filter={filter}
                    setFilter={setFilter}
                  />
                </div>
              ),
          )}
        </div>
        <div className="mt-5 flex max-w-[533px] gap-2 md:max-w-none">
          <div className="flex w-[60%] items-center justify-between rounded-2xl bg-grayLight p-3 text-xl font-medium text-bluePrimary xlg:w-[65%]">
            <button
              className="rounded-full bg-yellowPrimary p-1"
              onClick={() => {
                if (quantity > 0) setQuantity(quantity - 1);
              }}
            >
              <MinusIcon className="h-4 w-4 fill-bluePrimary" />
            </button>
            {quantity}
            <button
              className="rounded-full bg-yellowPrimary p-1"
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
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
      {fullScreenSlider ? (
        <FullScreenSlider
          productImages={
            productWithColorsAndImages[selectedColorProduct].imagesProduct
          }
          initialSlide={getInitialSlide(
            sectionRef.current?.querySelector(".slick-dots") as HTMLElement,
          )}
          setFullScreenSlider={setFullScreenSlider}
        />
      ) : null}
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
