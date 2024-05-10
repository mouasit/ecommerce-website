import { Tab, TabContent, Tabs, TabsList, TabsPanels } from "./Tabs";

export default function ProductTabs() {
  return (
    <Tabs>
      <TabsList>
        <Tab>Achievements</Tab>
        <Tab>Friends</Tab>
      </TabsList>
      <TabsPanels>
        <TabContent>hello1</TabContent>
        <TabContent>hello2</TabContent>
      </TabsPanels>
    </Tabs>
  );
}
