import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenue from "../PopularMenu/PopularMenue";
import Testimonial from "../Testimonial/Testimonial";
import Call from "../Call/Call";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Home</title>
			</Helmet>

			<Banner></Banner>
			<Category></Category>
			<ChefService></ChefService>
			<PopularMenue></PopularMenue>
			<Call></Call>
			<FeaturedItem></FeaturedItem>
			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
