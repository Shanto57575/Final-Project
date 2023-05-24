import img1 from "../../../assets/menu/pizza-bg.jpg";
import img2 from "../../../assets/menu/salad-bg.jpg";
import img3 from "../../../assets/menu/soup-bg.jpg";
import SectionTittle from "../../../components/SectionTittle";

const FoodCard = () => {
	return (
		<div>
			<SectionTittle
				subHeading={"Should Try"}
				heading={"CHEF RECOMMENDS"}
			></SectionTittle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-24">
				<div className="card w-80 rounded-none glass">
					<figure>
						<img src={img1} alt="car!" />
					</figure>
					<div className="card-body">
						<h2 className="card-title text-center">Ceaser Salad</h2>
						<p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
						<div className="card-actions justify-center mx-auto mt-3">
							<button className="bg-[#E8E8E8] text-[#BB8506] px-7 py-3 rounded-lg hover:bg-slate-700 hover:font-semibold border-[#BB8506] border-b-4 hover:border-b-0">
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<div className="card w-80 rounded-none glass">
					<figure>
						<img src={img2} alt="car!" />
					</figure>
					<div className="card-body">
						<h2 className="card-title text-center">Ceaser Salad</h2>
						<p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
						<div className="card-actions justify-center mx-auto mt-3">
							<button className="bg-[#E8E8E8] text-[#BB8506] px-7 py-3 rounded-lg hover:bg-slate-700 hover:font-semibold border-[#BB8506] border-b-4 hover:border-b-0">
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<div className="card w-80 rounded-none glass">
					<figure>
						<img src={img3} alt="car!" />
					</figure>
					<div className="card-body">
						<h2 className="card-title text-center">Ceaser Salad</h2>
						<p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
						<div className="card-actions justify-center mx-auto mt-3">
							<button className="bg-[#E8E8E8] text-[#BB8506] px-7 py-3 rounded-lg hover:bg-slate-700 hover:font-semibold border-[#BB8506] border-b-4 hover:border-b-0">
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
