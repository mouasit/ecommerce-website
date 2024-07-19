export default function Information({
  numberOfInformation,
}: {
  numberOfInformation: string;
}) {
  return (
    <div className="flex items-start gap-4 text-[.9rem] text-bluePrimary">
      <span className="flex-shrink-0 font-semibold">
        Information {numberOfInformation} :
      </span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
  );
}
