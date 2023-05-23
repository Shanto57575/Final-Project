import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenue from "../PopularMenu/PopularMenue";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<PopularMenue></PopularMenue>
			<FeaturedItem></FeaturedItem>
			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
