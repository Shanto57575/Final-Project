import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import FoodCard from "../FoodCard/FoodCard";
import PopularMenue from "../PopularMenu/PopularMenue";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<ChefService></ChefService>
			<PopularMenue></PopularMenue>
			<FoodCard></FoodCard>
			<FeaturedItem></FeaturedItem>
			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
