import SectionTittle from "../../../components/SectionTittle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featuredimg.css";

const FeaturedItem = () => {
	return (
		<div className="featured-img text-white bg-fixed pt-8 my-20">
			<SectionTittle
				subHeading="check it out"
				heading="FROM OUR MENU"
			></SectionTittle>
			<div className="md:flex justify-center items-center pb-20 pt-12 px-36 space-x-3 font-bold">
				<div>
					<img src={featuredImg} alt="" />
				</div>
				<div className="md:ml-10">
					<p>March 20, 2023</p>
					<p>WHERE CAN I GET SOME?</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
						voluptate facere, deserunt dolores maiores quod nobis quas quasi.
						Eaque repellat recusandae ad laudantium tempore consequatur
						consequuntur omnis ullam maxime tenetur.
					</p>
					<button className="btn btn-outline border-0 border-b-4 text-white mt-5">
						Order Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItem;
