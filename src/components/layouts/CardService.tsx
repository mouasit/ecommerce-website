type ServiceInfo = {
  icon: JSX.Element;
  title: string;
  desc: string;
};

export default function CardService({ icon, title, desc }: ServiceInfo) {
  return (
    <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
      {icon}
      <div className="flex flex-col items-center lg:items-start">
        <span className="text-[1.1rem] font-semibold text-bluePrimary">
          {title}
        </span>
        <span className="text-xs font-light text-grayPrimary">{desc}</span>
      </div>
    </div>
  );
}
