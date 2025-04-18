import React from 'react';
import styles from './MainTimeLine.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, A11y } from 'swiper/modules';

interface IMainTimeLine {
	children?: string,

}

const MainTimeLine: React.FC<IMainTimeLine> = () => {
	return (
		<div className={styles.container}>
			<Swiper modules={[Navigation, Pagination, A11y]}
				slidesPerView={1}
				navigation
				pagination={{clickable: true}}
				a11y={{}}
			>
				<SwiperSlide>kek</SwiperSlide>
				<SwiperSlide>cheburek</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default MainTimeLine;