import Information from "./Information";
import { Tab, TabContent, Tabs, TabsList, TabsPanels } from "./Tabs";

export default function ProductTabs() {
  return (
    <Tabs className="mt-[5.7rem] px-4 md:mt-[14rem] lg:mt-[5.7rem] 2xlg:px-0">
      <TabsList>
        <Tab>Description</Tab>
        <Tab>Additional information</Tab>
      </TabsList>
      <TabsPanels className="text-sm font-light text-bluePrimary">
        <TabContent className="text-[.9rem] leading-[1.8rem]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing.
        </TabContent>
        <TabContent className="flex flex-col gap-6">
          <Information numberOfInformation="01" />
          <Information numberOfInformation="02" />
          <Information numberOfInformation="03" />
          <Information numberOfInformation="04" />
        </TabContent>
      </TabsPanels>
    </Tabs>
  );
}
