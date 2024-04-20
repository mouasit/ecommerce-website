import { ChatIcon, RefreshIcon, TrackIcon } from "./Icons";
import CardService from "./layouts/CardService";

export default function Services() {
  return (
    <section className="mt-[10rem] flex flex-wrap items-end justify-center gap-10 px-4 md:gap-[9vw] lg:gap-[4vw] xl:gap-24">
      <CardService
        icon={
          <TrackIcon className="h-[3.5rem] w-[3.5rem] fill-yellowPrimary" />
        }
        title="Free shipping"
        desc="When you spend 30 MAD or more"
      />
      <CardService
        icon={<ChatIcon className="h-[3.2rem] w-[3.2rem] fill-yellowPrimary" />}
        title="Free shipping"
        desc="When you spend 30 MAD or more"
      />
      <CardService
        icon={
          <RefreshIcon className="h-[2.6rem] w-[2.6rem] fill-yellowPrimary" />
        }
        title="Free shipping"
        desc="When you spend 30 MAD or more"
      />
    </section>
  );
}
