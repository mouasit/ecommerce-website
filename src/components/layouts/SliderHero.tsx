import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import tv from "../../assets/products/slider-products/tv.png";
import iphone from "../../assets/products/slider-products/iphone.png";
import SlideHeroContent from "./SlideHeroContent";

export default function SliderHero() {
  const settings = {
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
      <div className="hero-slider-dots h-[2px] rounded-full bg-bluePrimary"></div>
    ),
  };
  return (
    <SlickSlider {...settings}>
      <SlideHeroContent
        nameProduct={`"85" Q60C QLED 4K (2023)"`}
        subtitle="SAMSUNG"
        desc="Picture quality in a league of its own with Quantum Matrix"
        linkImageProduct={tv}
        path="/Product/p18"
      />
      <SlideHeroContent
        nameProduct={`IPhone 15 Pro Max All Colors`}
        subtitle="APPLE"
        desc="Improved camera system with better low-light performance"
        linkImageProduct={iphone}
        path="/Product/p19"
      />
    </SlickSlider>
  );
}

function SliderNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-[40%] z-[1] md:top-[50%] 2xlg:right-0"
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
      className="absolute left-4 top-[40%] z-[1] md:top-[50%] 2xlg:left-0"
    >
      <ArrowLeftIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}
