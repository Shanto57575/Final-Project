import { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenue = () => {
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		fetch("Menu.json")
			.then((res) => res.json())
			.then((data) => {
				const popularItems = data.filter((item) => item.category === "popular");
				setMenu(popularItems);
			});
	}, []);

	return (
		<div>
			<SectionTittle
				subHeading={"Popular items"}
				heading={"From Our Menu"}
			></SectionTittle>
			<div className="grid grid-cols-2 gap-5 px-5 mb-12">
				{menu.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
		</div>
	);
};

export default PopularMenue;
