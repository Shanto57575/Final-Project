const FoodCard = ({ item }) => {
	const { name, recipe, image, price } = item;
	return (
		<div>
			<div className="card w-80 rounded-none bg-base-100 shadow-2xl text-center">
				<figure>
					<img className="h-[200px] w-full" src={image} alt="Food" />
				</figure>
				<p className="absolute right-0 bg-slate-800 text-white m-3 px-3 py-1">
					${price}
				</p>
				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<p>{recipe.slice(0, 50)}....</p>
					<div className="card-actions justify-center mx-auto mt-3">
						<button className="bg-[#E8E8E8] text-[#BB8506] px-7 py-3 rounded-lg hover:bg-slate-700 hover:font-semibold border-[#BB8506] border-b-4 hover:border-b-0">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
