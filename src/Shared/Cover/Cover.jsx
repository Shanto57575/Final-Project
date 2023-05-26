import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
	return (
		<Parallax
			blur={{ min: -15, max: 15 }}
			bgImage={img}
			bgImageAlt="the dog"
			strength={-200}
		>
			<div className="hero h-[600px]">
				<div className="hero-overlay "></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-7xl font-semibold font-serif uppercase">
							{title}
						</h1>
						<p className="mb-5 font-serif font-bold text-xl">{subTitle}</p>
					</div>
				</div>
			</div>
		</Parallax>
	);
};

export default Cover;
