import { Tab, TabContent, Tabs, TabsList, TabsPanels } from "./Tabs";

export default function ProductTabs() {
  return (
    <Tabs edit="gap-0 lg:overflow-visible">
      <TabsList>
        <Tab>Achievements</Tab>
        <Tab>Friends</Tab>
      </TabsList>
      <TabsPanels edit="overflow-visible">
        <TabContent edit="overflow-visible">
            hello1
        </TabContent>
        <TabContent edit="overflow-visible">
          hello2
        </TabContent>
      </TabsPanels>
    </Tabs>
  );
}
