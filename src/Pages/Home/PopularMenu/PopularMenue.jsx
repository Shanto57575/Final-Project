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
				<div className="text-center ml-[450px]">
					<button className="btn btn-outline border-0 border-b-4 mt-5">
						View full menu
					</button>
				</div>
			</div>
			<div className="bg-black p-12 text-2xl mt-3 text-center text-white">
				<h1>Call Us: +88 0192345678910</h1>
			</div>
		</div>
	);
};

export default PopularMenue;
