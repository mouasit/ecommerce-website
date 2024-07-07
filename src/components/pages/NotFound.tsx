import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AstroIcon } from "../layouts/Icons";
import { changeTitleDocument } from "../../Helpers";

export default function NotFound() {
  useEffect(() => {
    changeTitleDocument({ routeName: "not found" });
  }, []);
  return (
    <main className="not-found-container flex h-screen items-center justify-center">
      <div className="flex flex-col items-center lg:flex-row lg:gap-20">
        <AstroIcon className=" h-[25rem] w-[25rem] lg:h-[34rem] lg:w-[34rem]" />
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-[6rem] font-extrabold text-bluePrimary">
            404
          </span>
          <div className="flex flex-col items-center gap-8 lg:items-start">
            <span className="text-[1.5rem] font-bold text-bluePrimary">
              UH OH! You're lost.
            </span>
            <p className="w-[80%] text-center text-sm text-bluePrimary lg:w-[29rem] lg:text-left">
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </p>
            <Link
              to="/"
              className="w-[50%] break-words rounded-[0.5rem] border-2 border-yellowPrimary bg-yellowPrimary p-2 text-center font-medium text-bluePrimary"
            >
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
