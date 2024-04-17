import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import tv from "../assets/products/tv.png";

export default function Slider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    customPaging: () => <div></div>,
  };
  return (
    <SlickSlider {...settings}>
      <div className="h-[33.5rem]">
        <div className="flex flex-col items-center gap-10 px-6 pt-12">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col">
                <h3 className="text-[1.5rem] font-semibold text-bluePrimary">
                  85" Q60C QLED 4K (2023)
                </h3>
                <span className="text-sm font-light text-grayPrimary">
                  QA85Q60CAUXMV
                </span>
              </div>
              <p className="text-center font-light text-bluePrimary">
                Technologie Quantum Matrix Pro / Neural Quantum Processor 8K
              </p>
            </div>
            <button className="w-[34vw] rounded-[0.5rem] border-2 border-yellowPrimary bg-yellowPrimary p-2 font-medium capitalize text-bluePrimary">
              shop now
            </button>
          </div>
          <img src={tv} alt="product" className="w-[23rem]" />
        </div>
      </div>
      <div className=" bg-green-300">
        <h3>1</h3>
      </div>
      <div className=" bg-green-300">
        <h3>1</h3>
      </div>
      <div className=" bg-green-300">
        <h3>1</h3>
      </div>
    </SlickSlider>
  );
}

function SliderNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute right-2 top-[40%] z-[1]">
      <ArrowRightIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}

function SliderPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute left-2 top-[40%] z-[1]">
      <ArrowLeftIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}
