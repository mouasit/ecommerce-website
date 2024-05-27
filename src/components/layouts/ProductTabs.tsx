import { Tab, TabContent, Tabs, TabsList, TabsPanels } from "./Tabs";

export default function ProductTabs() {
  return (
    <Tabs className="mt-[5.7rem] md:mt-[14rem] lg:mt-[5.7rem] px-4 2xlg:px-0">
      <TabsList>
        <Tab>Description</Tab>
        <Tab>Information</Tab>
        <Tab>Review </Tab>
      </TabsList>
      <TabsPanels className="text-sm font-light text-bluePrimary">
        <TabContent>
          The iPhone 13 continues to amaze you. With its 6.1-inch Super Retina
          XDR display, it offers an unprecedented visual experience, with
          excellent color accuracy, contrast, and brightness. At the heart of
          Apple's smartphone, the A15 Bionic chip demonstrates unprecedented
          power and energy efficiency, allowing it to handle the most demanding
          applications without fail. Add to that 5G compatibility for ultra-fast
          connection speeds, and you get a smartphone perfectly equipped for the
          future.
        </TabContent>
        <TabContent>Information</TabContent>
        <TabContent>Review</TabContent>
      </TabsPanels>
    </Tabs>
  );
}
