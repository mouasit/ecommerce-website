import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "./Icons";

export default function FullScreenSlider({
  productImages,
  initialSlide,
  setFullScreenSlider,
}: {
  productImages: string[];
  initialSlide: number;
  setFullScreenSlider: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: initialSlide,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
  };
  return (
    <div className="fadein fixed left-0 top-0 z-[2] h-full w-full bg-black bg-opacity-1">
      <button
        className="absolute right-4 top-4 z-[2] rounded-full"
        onClick={() => {
          setFullScreenSlider(false);
          document.body.classList.remove("overflow-hidden");
        }}
      >
        <CloseIcon className="h-5 w-5 fill-gray-200" />
      </button>
      <SlickSlider {...settings}>
        {productImages.map((image, index) => (
          <div className="h-screen" key={index}>
            <div className="flex h-screen items-center justify-center">
              <img src={image} alt="product" className="sm:w-[33rem] md:w-[40rem] xl:w-[43rem]" />
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
}

function SliderNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-[50%] z-[1] rounded-full bg-white p-3 md:top-[50%]"
    >
      <ArrowRightIcon className="h-4 w-4 fill-bluePrimary" />
    </button>
  );
}

function SliderPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-[50%] z-[1] rounded-full bg-white p-3 md:top-[50%]"
    >
      <ArrowLeftIcon className="h-4 w-4 fill-bluePrimary" />
    </button>
  );
}
