import { BurgerMenuIcon, ShoppingCartIcon } from "./Icons";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="mt-[1.25rem] flex items-center justify-between px-4">
      <span className="flex items-center gap-5">
        <button>
          <BurgerMenuIcon className="h-7 w-7 fill-bluePrimary" />
        </button>
        <button>
          <img src={logo} alt="logo" className="w-[8.5rem]" />
        </button>
      </span>
      <button className="flex items-start gap-[.2rem]">
        <ShoppingCartIcon className="h-[2.3rem] w-[2.3rem] fill-bluePrimary" />
        <span className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-yellowPrimary font-bold text-bluePrimary">
          0
        </span>
      </button>
    </nav>
  );
}
