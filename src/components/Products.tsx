import Product from "./layouts/Product";

export default function Products() {
  return (
    <section className="cards mt-[5.7rem] flex flex-col items-center gap-16 px-4 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-0 sm:px-[8vw] md:gap-x-0 md:px-4 lg:gap-x-[3rem] lg:px-4 2xl:px-0">
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  );
}
