const MenuItem = ({ item }) => {
	const { name, recipe, image, price } = item;
	return (
		<div>
			<div className="flex items-center space-x-3">
				<figure>
					<img
						style={{ borderRadius: "0 200px 200px 200px" }}
						className="w-[100px]"
						src={image}
						alt=""
					/>
				</figure>
				<div>
					<p className="text-xl font-serif">{name}------------</p>
					<p>{recipe}</p>
				</div>{" "}
				<p className="text-amber-600">${price}</p>
			</div>
		</div>
	);
};

export default MenuItem;
