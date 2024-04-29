import Services from "./Services";
import Products from "./Products";
import Categories from "./Categories";
import Gaming from "./Gaming";
import Banner from "./Banner";
import Slider from "./Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Services />
      <Products />
      <Categories />
      <Gaming />
      <Banner />
    </>
  );
}
