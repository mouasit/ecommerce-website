import Services from "../layouts/Services";
import Gaming from "../layouts/Gaming";
import Banner from "../layouts/Banner";
import ProductsList from "../layouts/ProductsList";
import CategoriesList from "../layouts/CategoriesList";
import SliderHero from "../layouts/SliderHero";

export default function Home() {
  return (
    <>
      <SliderHero />
      <Services />
      <ProductsList />
      <CategoriesList />
      <Gaming />
      <Banner />
    </>
  );
}
