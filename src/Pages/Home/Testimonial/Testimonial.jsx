import SectionTittle from "../../../components/SectionTittle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("reviews.json")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	return (
		<section>
			<SectionTittle
				subHeading={"What Our Client Say"}
				heading={"Testimonial"}
			></SectionTittle>
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<div className="mx-20 my-10 flex flex-col justify-center items-center space-y-3 p-20">
							<Rating
								style={{ maxWidth: 180 }}
								value={review.rating}
								readOnly
							/>

							<p>{review.details}</p>
							<h3 className="text-2xl text-amber-600 uppercase mt-2">
								{review.name}
							</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonial;
