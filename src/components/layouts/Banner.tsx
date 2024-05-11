import bannerDesktop from "../../assets/banner-desktop.png";
import bannerMobile from "../../assets/banner-mobile.png";

export default function Banner() {
  return (
    <div className="mt-[8rem] px-4 2xlg:px-0">
      <img
        src={bannerDesktop}
        alt="banner"
        className=" hidden w-full md:block"
      />
      <img src={bannerMobile} alt="banner" className="w-full md:hidden" />
    </div>
  );
}
