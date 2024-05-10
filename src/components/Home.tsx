import Services from "./Services";
import Categories from "./Categories";
import Gaming from "./Gaming";
import Banner from "./Banner";
import Slider from "./Slider";
import ProductsList from "./ProductsList";

export default function Home() {
  return (
    <>
      <Slider />
      <Services />
      <ProductsList />
      <Categories />
      <Gaming />
      <Banner />
    </>
  );
}
