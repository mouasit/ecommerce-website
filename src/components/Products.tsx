import Product from "./layouts/Product";

export default function Products() {
  return (
    <section className="mt-[5.7rem] flex flex-wrap items-center justify-center sm:justify-start gap-24 sm:gap-0 px-4">
      <Product />
      <Product />
      <Product />
    </section>
  );
}
