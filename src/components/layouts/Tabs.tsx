import React, { createContext, useContext, useState, Children } from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  onClick?: any;
};

type TypeContext = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  count: number;
};

export const indexTab = createContext<TypeContext>({
  state: 0,
  setState: () => {},
  count: 0,
});

export function Tabs({ children, className }: Props) {
  const [state, setState] = useState<number>(0);

  return (
    <indexTab.Provider value={{ state: state, setState: setState, count: 0 }}>
      <div
        className={`flex h-full flex-col gap-6 lg:overflow-hidden ${className}`}
      >
        {children}
      </div>
    </indexTab.Provider>
  );
}

export function TabsList({ children, className }: Props) {
  return (
    <div
      className={`flex items-end border-b text-sm md:gap-[4rem] 2xlg:gap-[7rem] ${className}`}
    >
      {children}
    </div>
  );
}

export function Tab({ children, onClick }: Props) {
  const tabs = useContext(indexTab);

  return (
    <button
      className={`flex  w-full items-center justify-center border-b-2 px-5 pb-5 text-[1rem] md:w-auto  md:justify-start lg:text-[1.125rem] ${
        tabs.state === tabs.count++
          ? "border-b-yellowPrimary font-medium text-bluePrimary"
          : "border-b-transparent text-grayPrimary"
      }`}
      onClick={(e) => {
        let index = getIndexElement(e);
        tabs.setState(index);
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
}

export function TabsPanels({ children, className }: Props) {
  const index = useContext(indexTab).state;
  let arrChildren = Children.toArray(children);
  return (
    <div className={`h-full overflow-hidden ${className}`}>
      {arrChildren[index]}
    </div>
  );
}

export function TabContent({ children, className }: Props) {
  return <div className={`${className}`}>{children}</div>;
}

export function getIndexElement(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
): number {
  let listChild: NodeListOf<ChildNode> | undefined =
    e.currentTarget.parentNode?.childNodes;
  let index: number = 0;

  listChild?.forEach((element: ChildNode, i: number) => {
    if (element === e.currentTarget) {
      index = i;
      return;
    }
  });
  return index;
}
