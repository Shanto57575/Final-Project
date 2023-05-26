import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, subTitle, img, button }) => {
	return (
		<div className="py-10 ">
			{title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
			<div className="grid grid-cols-2 gap-5 px-5 mb-12 mt-16">
				{items.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
			<Link to={`/order/${title}`}>
				<div className="text-center ml-[450px]">
					<button className="btn btn-outline border-0 border-b-4 mt-5">
						{button}
					</button>
				</div>
			</Link>
		</div>
	);
};

export default MenuCategory;
