export default function CategoriesNav() {
  return (
    <div className="flex flex-col  gap-7 capitalize text-bluePrimary lg:w-[19rem]">
      <span className="text-xl font-semibold ">categories</span>
      <ul className="flex flex-col gap-5 font-light">
        <li>
          <button className="text-left capitalize">phones</button>
        </li>
        <li>
          <button className="text-left capitalize">tablets</button>
        </li>
        <li>
          <button className="text-left capitalize">air pods</button>
        </li>
        <li>
          <button className="text-left capitalize">headphones</button>
        </li>
        <li>
          <button className="text-left capitalize">laptops</button>
        </li>
        <li>
          <button className="text-left capitalize">smart watches</button>
        </li>
        <li>
          <button className="text-left capitalize">accessories</button>
        </li>
      </ul>
    </div>
  );
}
