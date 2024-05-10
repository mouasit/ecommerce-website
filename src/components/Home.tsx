import Services from "./Services";
import Gaming from "./Gaming";
import Banner from "./Banner";
import Slider from "./Slider";
import ProductsList from "./ProductsList";
import CategoriesList from "./CategoriesList";

export default function Home() {
  return (
    <>
      <Slider />
      <Services />
      <ProductsList />
      <CategoriesList />
      <Gaming />
      <Banner />
    </>
  );
}
