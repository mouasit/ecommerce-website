import Services from "../layouts/Services";
import Gaming from "../layouts/Gaming";
import Banner from "../layouts/Banner";
import ProductsList from "../layouts/ProductsList";
import CategoriesList from "../layouts/CategoriesList";
import SliderHero from "../layouts/SliderHero";
import { useEffect } from "react";
import { changeTitleDocument } from "../../Helpers";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    changeTitleDocument({ routeName: "home" });
  }, []);
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
