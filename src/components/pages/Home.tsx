import Services from "../layouts/Services";
import Gaming from "../layouts/Gaming";
import Banner from "../layouts/Banner";
import Slider from "../layouts/Slider";
import ProductsList from "../layouts/ProductsList";
import CategoriesList from "../layouts/CategoriesList";

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
