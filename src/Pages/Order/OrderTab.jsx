import FoodCard from "../Home/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
	return (
		<div className="w-full mx-auto grid md:grid-cols-3 gap-10 my-10">
			{items.map((item) => (
				<FoodCard key={item._id} item={item}></FoodCard>
			))}
		</div>
	);
};

export default OrderTab;
