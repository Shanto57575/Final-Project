import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../../components/SectionTittle";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from "../MenuCategory/Menucategory";

const Menu = () => {
	const [menu] = useMenu();
	const desserts = menu.filter((item) => item.category === "dessert");
	const soup = menu.filter((item) => item.category === "soup");
	const salad = menu.filter((item) => item.category === "salad");
	const pizza = menu.filter((item) => item.category === "pizza");
	const offered = menu.filter((item) => item.category === "offered");

	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Menu</title>
			</Helmet>
			<Cover
				img={coverImg}
				title="Our Menu"
				subTitle="Would you like to try a dish?"
			></Cover>
			<SectionTittle
				subHeading={"Dont miss"}
				heading={"Todays Offer"}
			></SectionTittle>
			{/* Offered Items */}
			<MenuCategory
				items={offered}
				button={"ORDER YOUR FAVOURITE FOOD"}
			></MenuCategory>
			{/* Desserts */}
			<MenuCategory
				items={desserts}
				title="desserts"
				subTitle={
					"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				}
				img={dessertImg}
				button={"ORDER YOUR FAVOURITE FOOD"}
			></MenuCategory>
			{/* salad */}
			<MenuCategory
				items={salad}
				title="salad"
				subTitle={
					"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				}
				img={saladImg}
				button={"ORDER YOUR FAVOURITE FOOD"}
			></MenuCategory>
			{/* Pizza */}
			<MenuCategory
				items={pizza}
				title="pizza"
				subTitle={
					"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				}
				img={pizzaImg}
				button={"ORDER YOUR FAVOURITE FOOD"}
			></MenuCategory>
			{/* Soup */}
			<MenuCategory
				items={soup}
				title="soup"
				subTitle={
					"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				}
				img={soupImg}
				button={"ORDER YOUR FAVOURITE FOOD"}
			></MenuCategory>
		</div>
	);
};

export default Menu;
