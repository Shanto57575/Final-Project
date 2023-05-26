import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
	const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
	const { category } = useParams();

	console.log(category);

	const initialIndex = categories.indexOf(category);
	console.log(initialIndex);
	const [tabIndex, setTabIndex] = useState(initialIndex);
	const [menu] = useMenu();

	const desserts = menu.filter((item) => item.category === "dessert");
	const soup = menu.filter((item) => item.category === "soup");
	const salad = menu.filter((item) => item.category === "salad");
	const pizza = menu.filter((item) => item.category === "pizza");
	const drinks = menu.filter((item) => item.category === "drinks");

	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Order Food</title>
			</Helmet>
			<Cover
				img={orderImg}
				title={"Order Food"}
				subTitle={"Would you like to try a dish?"}
			></Cover>
			<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<TabList>
					<Tab>Salad</Tab>
					<Tab>Pizza</Tab>
					<Tab>Soup</Tab>
					<Tab>Dessert</Tab>
					<Tab>Drinks</Tab>
				</TabList>
				<TabPanel>
					<OrderTab items={salad}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={pizza}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={soup}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={desserts}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={drinks}></OrderTab>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Order;