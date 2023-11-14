/* eslint-disable no-unused-vars */
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const dessert = menu.filter((d) => d.category === "dessert");
  const soup = menu.filter((d) => d.category === "soup");
  const pizza = menu.filter((d) => d.category === "pizza");
  const salad = menu.filter((d) => d.category === "salad");
  const offered = menu.filter((d) => d.category === "offered");
  console.log(salad);
  return (
    <div>
      <Cover img={orderImg} title={`Order from us`} />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
