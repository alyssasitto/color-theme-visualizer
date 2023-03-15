import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { setTheme } from "../../features/Theme";

import ColorTheme from "../ColorTheme/ColorTheme";

import "swiper/css";
import "swiper/css/navigation";
import "./ThemeMenu.css";

export default function ThemeMenu() {
	const [themeIndex, setThemeIndex] = useState(0);

	const themesArr = useSelector((state) => state.themesArr.value);

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
				dispatch(setTheme(themesArr[swiperCore.activeIndex]));
				setThemeIndex(swiperCore.activeIndex);
			}}
		>
			{themesArr.map((el, i) => {
				return (
					<SwiperSlide className={themeIndex === i ? "active" : ""}>
						<ColorTheme palette={el} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
