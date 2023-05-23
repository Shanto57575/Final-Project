import { Swiper, SwiperSlide } from "swiper/react";
import SectionTittle from "../../../components/SectionTittle";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
	return (
		<section>
			<SectionTittle
				subHeading={"From 11:00am to 10:00pm"}
				heading={"ORDER ONLINE"}
			></SectionTittle>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper my-24"
			>
				<SwiperSlide>
					<img src={slide1} alt="" />
					<h3 className="text-4xl text-center font-serif -mt-20 mb-10 text-white shadow-2xl">
						Salads
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide2} alt="" />
					<h3 className="text-4xl text-center font-serif -mt-20 text-white shadow-2xl">
						Pizza
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} alt="" />
					<h3 className="text-4xl text-center font-serif -mt-20 text-white shadow-2xl">
						Soups
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide4} alt="" />
					<h3 className="text-4xl text-center font-serif -mt-20 text-white shadow-2xl">
						Desert
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide5} alt="" />
					<h3 className="text-4xl text-center font-serif -mt-20 text-white shadow-2xl">
						Salads
					</h3>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Category;
