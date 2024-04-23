import Product from "./layouts/Product";

export default function Products() {
  return (
    <section className="mt-[5.7rem] flex flex-col items-center gap-16 px-4 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-0 sm:px-[6vw]">
      <Product />
      <Product />
      <Product />
    </section>
  );
}
