import Category from "./layouts/Category";
import headphones from "../assets/products/headphones-white.png";
import smartWatch from "../assets/products/smart-watch.png";
import washingMachine from "../assets/products/washing-machine.png";

export default function Categories() {
  return (
    <section className="mt-[5.7rem] flex flex-col items-center gap-24 ">
      <Category
        name="mobile accessories"
        imageProduct={headphones}
        backgroundColor="yellowPrimary"
        textColor="bluePrimary"
      />
      <Category
        name="home appliance"
        imageProduct={washingMachine}
        backgroundColor="bluePrimary"
        textColor="white"
      />
      <Category
        name="smart watches"
        imageProduct={smartWatch}
        backgroundColor="blueSky"
        textColor="bluePrimary"
      />
    </section>
  );
}
