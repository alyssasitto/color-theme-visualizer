import { useState } from "react";
import { useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { setTheme } from "../../features/Theme";

import ColorTheme from "../ColorTheme/ColorTheme";

import colorData from "../../data/colorData";

import "swiper/css";
import "swiper/css/navigation";
import "./ThemeMenu.css";

export default function ThemeMenu() {
	const [themeIndex, setThemeIndex] = useState(0);

	const dispatch = useDispatch();

	return (
		<Swiper
			slidesPerView={4}
			centeredSlides={true}
			spaceBetween={30}
			grabCursor={true}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="mySwiper"
			onActiveIndexChange={(swiperCore) => {
				dispatch(setTheme(colorData[swiperCore.activeIndex]));
				setThemeIndex(swiperCore.activeIndex);
			}}
		>
			{colorData.map((el, i) => {
				return (
					<SwiperSlide className={themeIndex === i ? "active" : ""}>
						<ColorTheme palette={el} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
