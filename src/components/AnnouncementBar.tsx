import { LocationIcon, PhoneIcon } from "./Icons";

export default function AnnouncementBar() {
  return (
    <div className="ms:justify-between ms:gap-0 flex  flex-wrap items-center justify-center gap-4 bg-yellowPrimary p-4 text-sm  font-light text-bluePrimary">
      <span>Welcome to COME store</span>
      <span className="flex  items-center gap-4">
        <span className="flex items-center gap-1">
          <LocationIcon className="h-4 w-4 fill-bluePrimary" />
          Casablanca
        </span>
        <span className="flex items-center gap-1">
          <PhoneIcon className="h-4 w-4 fill-bluePrimary" />
          06.12.34.56.78
        </span>
      </span>
    </div>
  );
}
