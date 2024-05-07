import Category from "./layouts/Category";
import headphones from "../assets/products/headphones-white.png";
import smartWatch from "../assets/products/smart-watch.png";
import washingMachine from "../assets/products/washing-machine.png";

export default function Categories() {
  return (
    <section className="mt-[8rem] flex flex-wrap justify-center gap-24 px-4 md:flex-row md:flex-wrap md:justify-start md:gap-x-[2.1vw] xl:gap-x-[11vw]  xlg:gap-x-[11.4%] 2xlg:px-0">
      <Category
        name="mobile accessories"
        imageProduct={headphones}
        backgroundColor="bg-yellowPrimary"
        textColor="text-bluePrimary"
      />
      <Category
        name="home appliance"
        imageProduct={washingMachine}
        backgroundColor="bg-bluePrimary"
        textColor="text-white"
      />
      <Category
        name="smart watches"
        imageProduct={smartWatch}
        backgroundColor="bg-blueSky"
        textColor="text-bluePrimary"
      />
    </section>
  );
}
