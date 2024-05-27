import logo from "../../assets/logo-blue.svg";
import { FacebookIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-[12rem] overflow-hidden">
      <div className="app-container flex flex-col items-center gap-16 px-4 mmd:flex-row mmd:items-start mmd:justify-between mmd:gap-0 2xlg:px-0">
        <button className="mb-10 mmd:mb-0">
          <img src={logo} alt="logo" className="w-[10rem]" />
        </button>
        <div className="flex flex-col items-center gap-6 text-bluePrimary mmd:items-start">
          <span className="text-[1.8rem] font-bold capitalize">shop</span>
          <ul className="flex flex-col gap-3 font-light">
            <li>
              <button>Hot deals</button>
            </li>
            <li>
              <button>Categories</button>
            </li>
            <li>
              <button>Brands</button>
            </li>
            <li>
              <button>Rebates</button>
            </li>
            <li>
              <button>Weekly deals</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6 text-bluePrimary mmd:items-start">
          <span className="text-[1.8rem] font-bold capitalize">Need help?</span>
          <ul className="flex flex-col gap-3 font-light">
            <li>
              <button>Contact</button>
            </li>
            <li>
              <button>Order traking</button>
            </li>
            <li>
              <button>FAQs</button>
            </li>
            <li>
              <button>Return policy</button>
            </li>
            <li>
              <button>Privacy policy</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6 text-bluePrimary mmd:items-start">
          <span className="text-[1.8rem] font-bold capitalize">Contact</span>
          <ul className="flex flex-col gap-3 font-light">
            <li>23 Fifth Avenue, New York, NY</li>
            <li>20000</li>
            <li>contact@info.com</li>
            <li>06.12.34.56.78</li>
            <li className="mt-16 flex items-center justify-center gap-4 mmd:mt-0 mmd:justify-start">
              <button className="h-7 w-7 rounded-full">
                <FacebookIcon className="fill-bluePrimary" />
              </button>
              <button className="h-7 w-7 rounded-full">
                <InstagramIcon className="fill-bluePrimary" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 bg-bluePrimary p-6 text-center font-light text-white">
        © 2024 Come. Powered by Come
      </div>
    </footer>
  );
}
