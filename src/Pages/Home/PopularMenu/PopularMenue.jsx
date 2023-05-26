import SectionTittle from "../../../components/SectionTittle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenue = () => {
	const [menu] = useMenu();
	const popular = menu.filter((item) => item.category === "popular");

	return (
		<div>
			<SectionTittle
				subHeading={"Popular items"}
				heading={"From Our Menu"}
			></SectionTittle>
			<div className="grid grid-cols-2 gap-5 px-5 mb-12">
				{popular.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
			<div className="text-center ml-[450px]">
				<button className="btn btn-outline border-0 border-b-4 mt-5">
					View full menu
				</button>
			</div>
		</div>
	);
};

export default PopularMenue;
