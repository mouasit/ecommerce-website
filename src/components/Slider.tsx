import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import tv from "../assets/products/slider-products/tv.png";
import iphone from "../assets/products/slider-products/iphone.png";
import Slide from "./layouts/Slide";

export default function Slider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    customPaging: () => (
      <div className="h-[2px] rounded-full bg-bluePrimary"></div>
    ),
  };
  return (
    <SlickSlider {...settings}>
      <Slide
        nameProduct={`"85" Q60C QLED 4K (2023)"`}
        subtitle="QA85Q60CAUXMV"
        desc="Technologie Quantum Matrix Pro / Neural Quantum Processor 8K"
        linkImageProduct={tv}
      />
      <Slide
        nameProduct={`IPhone 15 Pro Max All Colors`}
        subtitle="QA85Q60CAUXMV"
        desc="The iPhone 15 display has rounded corners that follow a beautiful"
        linkImageProduct={iphone}
      />
    </SlickSlider>
  );
}

function SliderNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-[40%] z-[1] md:top-[50%] 2xl:right-0"
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
      className="absolute left-4 top-[40%] z-[1] md:top-[50%] 2xl:left-0"
    >
      <ArrowLeftIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}
