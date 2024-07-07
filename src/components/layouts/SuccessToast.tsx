import { CheckIcon, CloseIcon } from "./Icons";

export default function SuccessToast({
  productName,
  setProductSuccessToast,
}: {
  productName: string;
  setProductSuccessToast: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="fadein-left px-4 pt-4 2xlg:px-0">
      <div className="  relative flex items-center justify-between  gap-3 rounded-lg bg-[#adf5ce] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-success">
            <CheckIcon className="h-3 w-3 fill-success" />
          </div>
          <div className="flex  flex-wrap  gap-1 break-all text-sm font-light text-success">
            <span className="space-x-1">
              <span>Product</span>
              <span className="inline-block font-medium capitalize">
                {productName}
              </span>
            </span>
            <span>successfully added to your cart.</span>
          </div>
        </div>
        <button
          className="rounded-full"
          onClick={() => {
            setProductSuccessToast("");
          }}
        >
          <CloseIcon className="h-3 w-3 fill-success" />
        </button>
      </div>
    </div>
  );
}
