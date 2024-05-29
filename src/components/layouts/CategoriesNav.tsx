import { Link } from "react-router-dom";
import { DisplayedSousCategory } from "../../API";
import { capitalizeFirstLetter } from "../../Helpers";

export default function CategoriesNav({
  sousCategories,
  title,
}: {
  sousCategories: DisplayedSousCategory[];
  title: string;
}) {
  return (
    <div className="flex flex-col  gap-7 break-all capitalize text-bluePrimary lg:w-[19rem]">
      <span className="text-xl font-semibold">categories</span>
      <ul className="flex flex-col gap-5 font-light">
        {sousCategories.map(
          (sousCategory: DisplayedSousCategory, index: number) => (
            <li key={index}>
              <Link
                to={`/Category/${capitalizeFirstLetter(title)}/${capitalizeFirstLetter(sousCategory.name)}`}
                className="text-left capitalize"
              >
                {sousCategory.name}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
