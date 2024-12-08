'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
// import styles from '../public/assets/sass/app.module.scss';
import '../../public/assets/sass/pages/home.scss';
import '../../public/assets/sass/components/charts.scss';

export default function Home() {
	// const [data, setData] = useState({ name: '', descr: '' });
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	fetch('/api/test')
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setData(data);
	// 			setLoading(false);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error fetching data:', error);
	// 			setLoading(false);
	// 		});
	// }, []);

	// if (loading) {
	// 	return (
	// 		<div className="loading-screen">
	// 			<div className="loading loading--dark loading--medium">
	// 				<Image src="/assets/images/icons/loading.svg" alt="Загрузка..." width={64} height={64} />
	// 				<div className="loading__text">Загрузка...</div>
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
		<>
			<section className="intro">
				<div className="intro__container">
					<div className="intro__wrapper">
						<div className="intro__left">
							<h1 className="intro__title">
								Платформа дистанционного <span className="accent-text"> наставничества</span>
							</h1>
							<p className="intro__caption">Эксперт в области педагогической карьеры</p>
							<p className="intro__desc">
								Здесь опытные наставники помогают начинающим педагогам Москвы с решением
								методических, юридических и коммуникационных вопросов, самоопределением и
								построением профессиональной траектории.
							</p>
						</div>
						<div className="intro__right">
							<div className="intro__carousel swiper">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="intro__carousel-item">
											<video preload="metadata" src="#" controls></video>
										</div>
									</div>
								</div>
							</div>
							<div className="intro__carousel-control slider-control">
								<button className="slider-control__prev"></button>
								<div className="swiper-pagination"></div>
								<button className="slider-control__next"></button>
							</div>
							<div className="intro__button">
								<a href="https://t.me/mcu_mentor_bot" className="btn btn--red btn--small">
									Нейросеть онлайн чат-бот GPT для учителей
								</a>
							</div>
						</div>
					</div>
					<div className="welcome-videos intro__videos">
						<div className="welcome-videos__wrapper">
							<div className="welcome-videos__gallery">
								<div className="welcome-videos__item">
									<video preload="metadata" src="#" controls></video>
								</div>
							</div>
							<div className="welcome-videos__control slider-control">
								<button className="slider-control__prev files__slider-prev"></button>
								<div className="swiper-pagination"></div>
								<button className="slider-control__next files__slider-next"></button>
							</div>
						</div>
					</div>
					<div className="intro__buttons"></div>
				</div>
			</section>
			<section className="carousel">
				<div className="carousel__container">
					<div className="carousel__wrapper">
						<div className="swiper carousel__slider">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<div className="carousel-item">
										<div className="carousel-item__header">
											<div className="carousel-item__title">Новости</div>
											<a href="<?php echo site_url('/news'); ?>" className="carousel-item__link">
												Смотреть все
											</a>
										</div>
										<div className="carousel-item__body">
											<div className="swiper carousel-item__slider">
												<div className="swiper-wrapper">
													<div className="swiper-slide">
														<a href="<?php the_permalink(); ?>" className="card">
															<div className="card__img"></div>
															<div className="card__bottom">
																<div className="card__date"></div>
																<div className="card__caption"></div>
																<div className="card__desc"></div>
																<div className="card__link">Читать далее</div>
															</div>
														</a>
													</div>
												</div>
											</div>
											<div className="slider-control carousel-item__control">
												<button
													className="slider-control__prev"
													aria-label="Предыдущий слайд"
												></button>
												<div className="swiper-pagination news-list__pagination"></div>
												<button
													className="slider-control__next"
													aria-label="Следующий слайд"
												></button>
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="carousel-item">
										<div className="carousel-item__header">
											<div className="carousel-item__title">Мероприятия</div>
											<a
												href="<?php echo site_url('/news/?category=event'); ?>"
												className="carousel-item__link"
											>
												Смотреть все
											</a>
										</div>
										<div className="carousel-item__body">
											<div className="swiper carousel-item__slider">
												<div className="swiper-wrapper">
													<div className="swiper-slide">
														<a href="<?php the_permalink(); ?>" className="card">
															<div className="card__img"></div>
															<div className="card__bottom">
																<div className="card__date"></div>
																<div className="card__caption"></div>
																<div className="card__desc"></div>
																<div className="card__link">Читать далее</div>
															</div>
														</a>
													</div>
												</div>
											</div>
											<div className="slider-control carousel-item__control">
												<button
													className="slider-control__prev"
													aria-label="Предыдущий слайд"
												></button>
												<div className="swiper-pagination news-list__pagination"></div>
												<button
													className="slider-control__next"
													aria-label="Следующий слайд"
												></button>
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="carousel-item">
										<div className="carousel-item__header">
											<div className="carousel-item__title">Наставнические практики</div>
										</div>
										<div className="carousel-item__body">
											<div className="swiper carousel-item__slider">
												<div className="swiper-wrapper">
													<div className="swiper-slide">
														<div className="card">
															<div className="card__img"></div>
															<div className="card__bottom">
																<div className="card__caption"></div>
																<div className="card__caption"></div>
																<a href="<?php echo get_field('link'); ?>" className="card__link">
																	Читать далее
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="slider-control carousel-item__control">
												<button
													className="slider-control__prev"
													aria-label="Предыдущий слайд"
												></button>
												<div className="swiper-pagination news-list__pagination"></div>
												<button
													className="slider-control__next"
													aria-label="Следующий слайд"
												></button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="slider-control carousel__control">
							<button className="slider-control__prev" aria-label="Предыдущий слайд"></button>
							<div className="swiper-pagination news-list__pagination"></div>
							<button className="slider-control__next" aria-label="Следующий слайд"></button>
						</div>
					</div>
				</div>
			</section>
			<section className="infographics">
				<div className="infographics__container">
					<h2 className="infographics__title title">
						Наставничество <span className="accent-text">в цифре</span>
					</h2>
					<div className="infographics__wrapper">
						<div className="infographics__item">
							<div className="infographics__icon">
								<svg
									width="64"
									height="64"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M28.9267 33.6475C32.0892 38.0765 31.2438 42.04 28.9908 45.8238C24.8944 47.8023 15.6392 49.8342 11.8579 45.0858C8.60783 41.0046 10.2613 36.1228 11.9905 33.7877C12.4631 33.1496 12.8235 32.4054 12.8235 31.6114C12.8235 30.1681 12.9811 28.6853 13.8016 27.498C14.9746 25.8009 17.1214 24 20.4806 24C23.7175 24 25.8867 25.672 27.1427 27.3121C28.1247 28.5945 28.3268 30.2587 28.3268 31.874C28.3268 32.5127 28.5555 33.1277 28.9267 33.6475Z"
										stroke="#202B3E"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M11.679 46.8886V51.5818H14.8844H17.6882H20.3708H22.3612H24.6977H29.0625V46.8886C29.0625 44.1803 26.9062 41.9643 24.1988 41.8904L20.3708 41.786L16.5427 41.8904C13.8354 41.9643 11.679 44.1803 11.679 46.8886Z"
										fill="white"
										stroke="#202B3E"
										stroke-width="2"
									/>
									<path
										d="M23 39H18V41.5C18 42.8807 19.1193 44 20.5 44C21.8807 44 23 42.8807 23 41.5V39Z"
										fill="#F4F5F7"
										stroke="#202B3E"
										stroke-width="2"
									/>
									<path
										d="M22.8643 30.1657C23.4332 30.6616 24.0624 30.5743 24.5368 30.3307C24.7291 30.232 25 30.3581 25 30.5742V35.5C25 37.9853 22.9853 40 20.5 40C18.0147 40 16 37.9853 16 35.5V30.4547C16 30.2588 16.2166 30.1363 16.3942 30.219C17.9936 30.9632 19.7302 30.4544 20.9547 29.7859C21.557 29.457 22.347 29.7148 22.8643 30.1657Z"
										fill="#F4F5F7"
										stroke="#202B3E"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M36.7177 47.3824V52.557H39.8681H43.139H45.9702H48.279H50.6154H55.2227V47.3823C55.2227 44.6843 53.082 42.4728 50.3854 42.385L45.9702 42.2413L41.555 42.385C38.8584 42.4728 36.7177 44.6843 36.7177 47.3824Z"
										fill="white"
										stroke="#202B3E"
										stroke-width="2"
									/>
									<path
										d="M48 40H44V43C44 44.1046 44.8954 45 46 45C47.1046 45 48 44.1046 48 43V40Z"
										fill="#F4F5F7"
										stroke="#202B3E"
										stroke-width="2"
									/>
									<path
										d="M46.1096 26.0918C46.8335 26.3323 48.8347 27.2074 50.8833 29.9715C50.9182 30.0185 50.9375 30.0766 50.9375 30.1351V35.5331C50.9375 38.3351 48.6661 40.6065 45.8641 40.6065C43.0622 40.6065 40.7907 38.3351 40.7907 35.5331V30.1442C40.7907 30.0801 40.8137 30.0173 40.8549 29.9682C42.8523 27.5872 44.8482 26.4778 45.556 26.1335C45.7305 26.0486 45.9255 26.0306 46.1096 26.0918Z"
										fill="#F4F5F7"
										stroke="#202B3E"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M40.5174 32.5808C43.2266 32.0391 46.0069 30.286 47.2691 28.7299C47.4849 28.4638 47.8098 28.2853 48.1109 28.4486C49.126 28.9993 50.6043 30.8162 51.2086 31.9811C51.2867 31.7444 51.334 31.3882 51.359 30.9664C51.5213 28.228 50.5003 24.9108 47.7635 25.0976C47.0054 25.1493 46.2269 25.3354 45.5239 25.5727C44.592 25.8872 43.5552 25.5447 42.6443 25.1733C42.1207 24.9599 41.6565 24.9764 41.4037 25.0493C38.7368 25.8415 39.6023 30.4023 40.5174 32.5808Z"
										fill="white"
										stroke="#202B3E"
										stroke-width="2"
									/>
									<path
										d="M43 10C43 9.44772 43.4477 9 44 9H57C57.5523 9 58 9.44772 58 10V16.1053C58 16.6575 57.5523 17.1053 57 17.1053H54.5462C54.0996 17.1053 53.6659 17.2547 53.3142 17.5298L53.9302 18.3175L53.3142 17.5298L51.116 19.2488C50.7541 19.5318 50.2459 19.5318 49.884 19.2488L47.6858 17.5298C47.3341 17.2547 46.9004 17.1053 46.4538 17.1053H44C43.4477 17.1053 43 16.6575 43 16.1053V10Z"
										fill="white"
										stroke="#E82113"
										stroke-width="2"
									/>
									<path
										d="M36.2188 15H17C10.3726 15 5 20.3726 5 27V53H59V26.5"
										stroke="#202B3E"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M2 52C2 50.3431 3.34315 49 5 49H19.8769C20.4807 49 21.0427 49.3083 21.3672 49.8175C22.059 50.9029 23.2571 51.56 24.5442 51.56H32H39.4558C40.7429 51.56 41.941 50.9029 42.6328 49.8175L41.7895 49.28L42.6328 49.8175C42.9573 49.3083 43.5193 49 44.1231 49H59C60.6568 49 62 50.3431 62 52C62 53.6569 60.6569 55 59 55H5C3.34315 55 2 53.6569 2 52Z"
										fill="white"
										stroke="#202B3E"
										stroke-width="2"
									/>
								</svg>
							</div>
							<span className="infographics__value">11</span>
							<div className="infographics__label">Количество консультаций на платформе</div>
						</div>
						<div className="infographics__item">
							<div className="infographics__icon">
								<svg
									width="64"
									height="64"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M28.4514 26.7008C32.176 32.2761 31.1729 37.267 28.5074 42.0319C23.6525 44.5278 12.6835 47.0911 8.20203 41.1009C4.37165 35.981 6.28816 29.8624 8.325 26.8976C8.90085 26.0594 9.34649 25.1013 9.34649 24.0843C9.34649 22.2744 9.52647 20.4168 10.5143 18.9002C11.9062 16.7631 14.4483 14.5005 18.4215 14.5005C22.2401 14.5005 24.8051 16.5905 26.2967 18.6505C27.4892 20.2974 27.7205 22.3914 27.7205 24.4248C27.7205 25.2386 27.9993 26.0241 28.4514 26.7008Z"
										fill="white"
										stroke="#E82113"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M8.68447 46.3747L10.2117 46.2487C11.6179 46.1327 13.0331 46.3008 14.3731 46.7428L14.819 46.8899C15.2662 47.0374 15.734 47.1126 16.2048 47.1126H18.4444H20.8009C21.1706 47.1126 21.5368 47.0413 21.8794 46.9025C23.2288 46.3559 24.6863 46.1285 26.1381 46.2381L28.2098 46.3944C29.1159 46.4628 29.8887 45.7461 29.8887 44.8375C29.8887 41.2048 27.1812 38.1417 23.5759 37.6957L18.4444 37.0608L13.299 37.6974C9.7017 38.1424 7.00014 41.1988 7.00014 44.8235C7.00014 45.7336 7.77752 46.4495 8.68447 46.3747Z"
										fill="white"
										stroke="#E82113"
										stroke-width="2"
									/>
									<path
										d="M20.9043 34.9326H15.9043V37.4326C15.9043 38.8133 17.0236 39.9326 18.4043 39.9326C19.785 39.9326 20.9043 38.8133 20.9043 37.4326V34.9326Z"
										fill="white"
										stroke="#E82113"
										stroke-width="2"
									/>
									<path
										d="M21.1887 22.308C22.0728 23.3594 23.1384 23.2356 23.8941 22.8517C24.1375 22.728 24.4727 22.8894 24.4727 23.1624V29.1259C24.4727 32.5269 21.7156 35.2839 18.3147 35.2839C14.9137 35.2839 12.1567 32.5269 12.1567 29.1259V23.0204C12.1567 22.7728 12.4266 22.6156 12.6527 22.7165C15.0756 23.7984 17.7362 22.8943 19.4253 21.9136C19.999 21.5805 20.7618 21.8002 21.1887 22.308Z"
										fill="white"
										stroke="#E82113"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M56.465 26.7008C60.1896 32.2761 59.1866 37.267 56.5211 42.0319C51.6661 44.5278 40.6972 47.0911 36.2157 41.1009C32.3853 35.981 34.3018 29.8624 36.3387 26.8976C36.9145 26.0594 37.3602 25.1013 37.3602 24.0843C37.3602 22.2744 37.5401 20.4168 38.5279 18.9002C39.9199 16.7631 42.462 14.5005 46.4351 14.5005C50.2538 14.5005 52.8188 16.5905 54.3103 18.6505C55.5028 20.2974 55.7341 22.3914 55.7341 24.4248C55.7341 25.2386 56.013 26.0241 56.465 26.7008Z"
										fill="white"
										stroke="#E82113"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M36.6981 46.3747L38.2254 46.2487C39.6316 46.1327 41.0468 46.3008 42.3868 46.7428L42.8327 46.8899C43.2798 47.0374 43.7477 47.1126 44.2185 47.1126H46.4581H48.8146C49.1843 47.1126 49.5504 47.0413 49.8931 46.9025C51.2425 46.3559 52.6999 46.1285 54.1517 46.2381L56.2235 46.3944C57.1295 46.4628 57.9023 45.7461 57.9023 44.8375C57.9023 41.2048 55.1948 38.1417 51.5896 37.6957L46.4581 37.0608L41.3127 37.6974C37.7154 38.1424 35.0138 41.1988 35.0138 44.8235C35.0138 45.7336 35.7912 46.4495 36.6981 46.3747Z"
										fill="white"
										stroke="#E82113"
										stroke-width="2"
									/>
									<path
										d="M48.9043 34.9326H43.9043V37.4326C43.9043 38.8133 45.0236 39.9326 46.4043 39.9326C47.785 39.9326 48.9043 38.8133 48.9043 37.4326V34.9326Z"
										fill="white"
										stroke="#E82113"
										stroke-width="2"
									/>
									<path
										d="M49.2024 22.308C50.0864 23.3594 51.1521 23.2356 51.9077 22.8517C52.1512 22.728 52.4863 22.8894 52.4863 23.1624V29.1259C52.4863 32.5269 49.7293 35.2839 46.3283 35.2839C42.9274 35.2839 40.1704 32.5269 40.1704 29.1259V23.0204C40.1704 22.7728 40.4403 22.6156 40.6664 22.7165C43.0893 23.7984 45.7499 22.8943 47.4389 21.9136C48.0127 21.5805 48.7754 21.8002 49.2024 22.308Z"
										fill="white"
										stroke="#E82113"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M20.5583 49.9619L22.4265 49.8078C24.1168 49.6684 25.8179 49.8704 27.4286 50.4018L27.9741 50.5817C28.5436 50.7696 29.1395 50.8654 29.7392 50.8654H32.4788H35.3614C35.8423 50.8654 36.3187 50.7725 36.7644 50.592C38.3832 49.9363 40.1316 49.6635 41.8732 49.7949L44.4075 49.9862C45.6453 50.0796 46.7012 49.1005 46.7012 47.8591C46.7012 43.3027 43.3052 39.4607 38.7833 38.9013L32.4788 38.1214L26.1573 38.9034C21.6451 39.4616 18.2564 43.2954 18.2564 47.842C18.2564 49.0857 19.3188 50.0641 20.5583 49.9619Z"
										fill="white"
										stroke="#202B3E"
										stroke-width="2"
									/>
									<path
										d="M35.9453 34.9131H28.6797V36.8086C28.6797 38.8149 30.3062 40.4414 32.3125 40.4414C34.3188 40.4414 35.9453 38.8149 35.9453 36.8086V34.9131Z"
										fill="#F4F5F7"
										stroke="#202B3E"
										stroke-width="2"
									/>
									<path
										d="M32.5485 14.5776C33.4855 14.8643 36.5907 16.088 39.7731 20.3818C39.8248 20.4516 39.8535 20.5377 39.8535 20.6246V28.6394C39.8535 32.7996 36.481 36.1721 32.3208 36.1721C28.1606 36.1721 24.7881 32.7996 24.7881 28.6394V20.6382C24.7881 20.543 24.8221 20.4497 24.8833 20.3768C27.9815 16.6838 31.0772 15.051 31.9925 14.6214C32.1681 14.539 32.363 14.5209 32.5485 14.5776Z"
										fill="#F4F5F7"
										stroke="#202B3E"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M24.3835 24.2557C28.528 23.4269 32.7847 20.6888 34.5724 18.3285C34.7793 18.0554 35.1018 17.8701 35.4173 18.0036C36.9213 18.6402 39.311 21.5411 40.2573 23.3652C40.4848 22.6759 40.5364 21.3039 40.507 19.8521C40.4515 17.1096 39.8269 13.8094 37.1402 13.2559C35.2064 12.8575 32.864 13.4185 31.0395 14.1338C30.1238 14.4928 29.0839 14.2006 28.2695 13.649C27.2128 12.9332 26.189 12.932 25.6994 13.0733C21.7397 14.2495 23.0248 21.0211 24.3835 24.2557Z"
										fill="white"
										stroke="#202B3E"
										stroke-width="2"
									/>
									<path
										d="M38.2031 45.0786C38.7549 44.9768 39.2327 44.6297 39.5 44.1363C39.7673 44.6297 40.2451 44.9768 40.7969 45.0786C40.4103 45.4853 40.2278 46.047 40.3016 46.6032C39.7953 46.3612 39.2047 46.3612 38.6984 46.6032C38.7722 46.047 38.5897 45.4853 38.2031 45.0786Z"
										fill="white"
										stroke="#202B3E"
										stroke-width="2"
									/>
								</svg>
							</div>
							<span className="infographics__value">11</span>
							<div className="infographics__label">Количество наставников</div>
						</div>
					</div>
				</div>
			</section>
			<div className="infographics-carousel">
				<div className="infographics-carousel__container">
					<div className="swiper infographics-carousel__slider">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<section className="infographics">
									<h2 className="infographics__title title">
										Молодые педагоги: <span className="accent-text">кто они?</span>
									</h2>
									<div className="infographics__wrapper">
										<div className="infographics__item infographics__item--gray">
											<div className="infographics__round-chart round-charts">
												<div className="round-charts__header">
													<div className="round-charts__icon">
														<svg
															width="65"
															height="64"
															viewBox="0 0 65 64"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M15 25.7766C15 23.0152 17.2386 20.7766 20 20.7766H46C48.7614 20.7766 51 23.0152 51 25.7766V46.0745C51 46.6268 50.5523 47.0745 50 47.0745H16C15.4477 47.0745 15 46.6268 15 46.0745V25.7766Z"
																stroke="#202B3E"
																stroke-width="2"
															/>
															<path
																d="M15 27.2447H23.0338C23.6249 27.2447 24.1857 26.9832 24.5657 26.5304L33 16.4811L41.4343 26.5304L42.2003 25.8876L41.4343 26.5304C41.8143 26.9832 42.3751 27.2447 42.9662 27.2447H51V46.0745C51 46.6268 50.5523 47.0745 50 47.0745H16C15.4477 47.0745 15 46.6268 15 46.0745V27.2447Z"
																fill="#F2F4F6"
																stroke="#202B3E"
																stroke-width="2"
															/>
															<path
																d="M37 45.9998V39.9998C37 37.7906 35.2091 35.9998 33 35.9998V35.9998C30.7909 35.9998 29 37.7906 29 39.9998V45.9998"
																stroke="#E82113"
																stroke-width="2"
															/>
															<path
																d="M29.5547 29.8831C29.5547 27.9795 31.0979 26.4363 33.0015 26.4363C34.9051 26.4363 36.4483 27.9795 36.4483 29.8831V31.3899C36.4483 31.5683 36.3037 31.7129 36.1253 31.7129H29.8777C29.6993 31.7129 29.5547 31.5683 29.5547 31.3899V29.8831Z"
																stroke="#202B3E"
																stroke-width="2"
															/>
															<path
																d="M20.4668 33.5212H24.9136"
																stroke="#202B3E"
																stroke-width="2"
																stroke-linecap="round"
															/>
															<path
																d="M41.4883 33.5212H45.9351"
																stroke="#202B3E"
																stroke-width="2"
																stroke-linecap="round"
															/>
															<path
																d="M20.4668 39.9895H24.9136"
																stroke="#202B3E"
																stroke-width="2"
																stroke-linecap="round"
															/>
															<path
																d="M41.4883 39.9895H45.9351"
																stroke="#202B3E"
																stroke-width="2"
																stroke-linecap="round"
															/>
														</svg>
													</div>
													<div className="round-charts__label">Год работы в школе</div>
												</div>
												<div className="round-charts__wrapper">
													<div className="round-charts__item">
														<div className="single-chart">
															<svg viewBox="0 0 36 36" className="circular-chart">
																<path
																	className="circle-bg"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<path
																	className="circle"
																	stroke-dasharray="11, 100"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<text x="18" y="20.35" className="percentage">
																	11%
																</text>
															</svg>
														</div>
														<div className="round-charts__caption">Первый</div>
													</div>
													<div className="round-charts__item">
														<div className="single-chart">
															<svg viewBox="0 0 36 36" className="circular-chart">
																<path
																	className="circle-bg"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<path
																	className="circle"
																	stroke-dasharray="11, 100"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<text x="18" y="20.35" className="percentage">
																	11%
																</text>
															</svg>
														</div>
														<div className="round-charts__caption">Второй</div>
													</div>
													<div className="round-charts__item">
														<div className="single-chart">
															<svg viewBox="0 0 36 36" className="circular-chart">
																<path
																	className="circle-bg"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<path
																	className="circle"
																	stroke-dasharray="11, 100"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<text x="18" y="20.35" className="percentage">
																	11%
																</text>
															</svg>
														</div>
														<div className="round-charts__caption">Третий</div>
													</div>
												</div>
											</div>
										</div>
										<div className="infographics__item infographics__item--gray">
											<div className="infographics__round-chart round-charts">
												<div className="round-charts__header">
													<div className="round-charts__icon">
														<svg
															width="64"
															height="64"
															viewBox="0 0 64 64"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M32.3443 43.2185L33.6837 43.108C34.9334 43.0049 36.1911 43.1543 37.382 43.5471L37.7731 43.6761C38.1528 43.8014 38.5501 43.8653 38.95 43.8653H40.9141H42.9809C43.2893 43.8653 43.5947 43.8057 43.8805 43.69C45.0816 43.2035 46.3788 43.0011 47.671 43.0986L49.488 43.2357C50.2112 43.2903 50.8281 42.7182 50.8281 41.9929C50.8281 38.869 48.4998 36.2349 45.3995 35.8513L40.9141 35.2964L36.4166 35.8528C33.3232 36.2355 31.0002 38.8637 31.0002 41.9806C31.0002 42.7069 31.6205 43.2782 32.3443 43.2185Z"
																fill="white"
																stroke="#202B3E"
																stroke-width="2"
															/>
															<path
																d="M43.1172 32.9941H38.474V34.0701C38.474 35.3523 39.5134 36.3917 40.7956 36.3917C42.0778 36.3917 43.1172 35.3523 43.1172 34.0701V32.9941Z"
																fill="#F4F5F7"
																stroke="#202B3E"
																stroke-width="2"
															/>
															<path
																d="M41.044 18.1566C41.7992 18.4041 43.9457 19.3272 46.1435 22.2925C46.1806 22.3426 46.2012 22.4043 46.2012 22.4666V28.213C46.2012 31.1957 43.7832 33.6137 40.8004 33.6137C37.8177 33.6137 35.3997 31.1957 35.3997 28.213V22.4764C35.3997 22.4081 35.4241 22.3412 35.468 22.2889C37.6099 19.7358 39.7502 18.556 40.4889 18.1989C40.6635 18.1144 40.8597 18.0962 41.044 18.1566Z"
																fill="#F4F5F7"
																stroke="#202B3E"
																stroke-width="2"
																stroke-linecap="round"
															/>
															<path
																d="M35.1107 25.07C38.0108 24.49 40.9876 22.6061 42.3205 20.9427C42.5347 20.6753 42.8591 20.4957 43.1627 20.6544C44.2439 21.2196 45.8421 23.1794 46.4917 24.4315C46.5908 24.1312 46.6434 23.65 46.6646 23.0851C46.7677 20.3438 45.8334 17.0145 43.0913 17.0909C42.1643 17.1168 41.1932 17.3474 40.3361 17.6453C39.407 17.9683 38.371 17.6363 37.476 17.2282C36.8777 16.9554 36.3394 16.9702 36.0541 17.0525C33.2152 17.8958 34.1365 22.7509 35.1107 25.07Z"
																fill="white"
																stroke="#202B3E"
																stroke-width="2"
															/>
															<path
																d="M25.9435 27.2941C29.0862 31.9983 28.2398 36.2094 25.9908 40.2298C21.8944 42.3358 12.6393 44.4986 8.858 39.4443C5.62609 35.1243 7.24316 29.9617 8.96176 27.4601C9.44763 26.7529 9.82364 25.9445 9.82364 25.0864C9.82364 23.5593 9.9755 21.992 10.809 20.7123C11.9834 18.9091 14.1283 17 17.4807 17C20.7027 17 22.867 18.7635 24.1255 20.5016C25.1316 21.8912 25.3268 23.658 25.3268 25.3737C25.3268 26.0603 25.5621 26.7231 25.9435 27.2941Z"
																fill="white"
																stroke="#E82113"
																stroke-width="2"
																stroke-linecap="round"
															/>
															<path
																d="M9.25222 43.7384L10.5408 43.6321C11.7482 43.5325 12.9633 43.6768 14.1138 44.0563L14.4901 44.1805C14.8516 44.2997 15.2298 44.3605 15.6104 44.3605H17.5001H19.4884C19.7802 44.3605 20.0692 44.3042 20.3397 44.1946C21.5006 43.7244 22.7544 43.5288 24.0034 43.623L25.7515 43.755C26.4253 43.8058 27 43.2728 27 42.5971C27 39.6108 24.7743 37.0928 21.8106 36.7262L17.5001 36.1929L13.1778 36.7276C10.2208 37.0935 8.00014 39.6058 8.00014 42.5853C8.00014 43.2618 8.57802 43.794 9.25222 43.7384Z"
																fill="white"
																stroke="#E82113"
																stroke-width="2"
															/>
															<path
																d="M19.4199 34.396H15.5136V36.3491C15.5136 37.4278 16.3881 38.3023 17.4668 38.3023C18.5455 38.3023 19.4199 37.4278 19.4199 36.3491V34.396Z"
																fill="white"
																stroke="#E82113"
																stroke-width="2"
															/>
															<path
																d="M19.9541 23.7398C20.6704 24.461 21.4993 24.3503 22.0978 24.0462C22.3032 23.9419 22.5859 24.0781 22.5859 24.3084V29.3402C22.5859 32.2098 20.2597 34.536 17.3901 34.536C14.5205 34.536 12.1943 32.2098 12.1943 29.3402V24.1886C12.1943 23.9797 12.422 23.8471 12.6128 23.9322C14.573 24.8075 16.7177 24.1422 18.1472 23.3564C18.7286 23.0369 19.4865 23.2691 19.9541 23.7398Z"
																fill="white"
																stroke="#E82113"
																stroke-width="2"
																stroke-linecap="round"
															/>
														</svg>
													</div>
													<div className="round-charts__label">Пол</div>
												</div>
												<div className="round-charts__wrapper">
													<div className="round-charts__item">
														<div className="single-chart">
															<svg viewBox="0 0 36 36" className="circular-chart">
																<path
																	className="circle-bg"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<path
																	className="circle"
																	stroke-dasharray="11, 100"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<text x="18" y="20.35" className="percentage">
																	11%
																</text>
															</svg>
														</div>
														<div className="round-charts__caption">Женский</div>
													</div>
													<div className="round-charts__item">
														<div className="single-chart">
															<svg viewBox="0 0 36 36" className="circular-chart">
																<path
																	className="circle-bg"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<path
																	className="circle"
																	stroke-dasharray="11, 100"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<text x="18" y="20.35" className="percentage">
																	11%
																</text>
															</svg>
														</div>
														<div className="round-charts__caption">Мужской</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
							<div className="swiper-slide">
								<section className="infographics">
									<h2 className="infographics__title title">
										Наставники: <span className="accent-text">кто они?</span>
									</h2>
									<div className="infographics__wrapper">
										<div className="infographics__item infographics__item--gray">
											<div className="infographics__round-chart round-charts">
												<div className="round-charts__header">
													<div className="round-charts__icon">
														<svg
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															height="48"
															width="48"
															viewBox="0 0 64 64"
														>
															<path
																d="M32.0788 41.773C36.7478 41.773 40.5328 37.988 40.5328 33.319C40.5328 28.65 36.7478 24.865 32.0788 24.865C27.4098 24.865 23.6248 28.65 23.6248 33.319C23.6248 37.988 27.4098 41.773 32.0788 41.773Z"
																fill="#FACAC6"
															></path>
															<path
																d="M32.0788 43.6685V45.1889H33.0915V43.6328"
																stroke="#E82113"
																stroke-miterlimit="10"
															></path>
															<path
																d="M32.487 55.9999L31.2676 54.7806C29.6503 53.1632 27.4539 52.2525 25.1656 52.2525H17.1581C12.653 52.2525 9 48.5995 9 44.0945V14.3601C9 14.3601 26.2983 13.0642 31.8135 20.4111C31.8135 20.4111 34.9359 14.0718 55.9739 14.3601V44.0945C55.9739 48.5995 52.3209 52.2525 47.8159 52.2525H39.8109C37.5226 52.2525 35.3262 53.1607 33.7089 54.7806L32.487 55.9999Z"
																stroke-miterlimit="10"
																stroke-linecap="round"
																stroke="black"
															></path>
															<path
																d="M9 10.8448C9 10.8448 23.3289 9.54888 32.015 18.1942C32.015 18.1942 40.4104 8.97746 54.6755 10.7759"
																stroke-miterlimit="10"
																stroke="#202B3E"
															></path>
															<path
																d="M9 8.30157C9 8.30157 23.3289 7.00567 32.015 15.651C32.015 15.651 40.4104 6.43425 54.6755 8.2327"
																stroke-miterlimit="10"
																stroke="#202B3E"
															></path>
															<path
																d="M32.0788 41.773C36.7478 41.773 40.5328 37.988 40.5328 33.319C40.5328 28.65 36.7478 24.865 32.0788 24.865C27.4098 24.865 23.6248 28.65 23.6248 33.319C23.6248 37.988 27.4098 41.773 32.0788 41.773Z"
																stroke="#E82113"
																stroke-miterlimit="10"
															></path>
															<path
																d="M36.3568 23.8906C39.9384 25.5182 42.4282 29.1278 42.4282 33.3165C42.4282 39.0333 37.793 43.6659 32.0788 43.6659C30.4334 43.6659 28.8773 43.2807 27.4947 42.597"
																stroke="#E82113"
																stroke-miterlimit="10"
															></path>
															<path
																d="M36.2752 45.3521H28.8926C28.1401 45.3521 27.5304 45.9617 27.5304 46.7143V47.9694H37.64V46.7143C37.64 45.9617 37.0303 45.3521 36.2752 45.3521Z"
																stroke="#E82113"
																stroke-miterlimit="10"
															></path>
														</svg>
													</div>
													<div className="round-charts__label">Сферы консультирования</div>
												</div>
												<div className="round-charts__wrapper">
													<div className="round-charts__item">
														<div className="single-chart">
															<svg viewBox="0 0 36 36" className="circular-chart">
																<path
																	className="circle-bg"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<text x="18" y="20.35" className="percentage">
																	11
																</text>
															</svg>
														</div>
														<div className="round-charts__caption">Рабочая проблема</div>
													</div>
													<div className="round-charts__item">
														<div className="single-chart">
															<svg viewBox="0 0 36 36" className="circular-chart">
																<path
																	className="circle-bg"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<text x="18" y="20.35" className="percentage">
																	11
																</text>
															</svg>
														</div>
														<div className="round-charts__caption">Карьерное консультирование</div>
													</div>
													<div className="round-charts__item">
														<div className="single-chart">
															<svg viewBox="0 0 36 36" className="circular-chart">
																<path
																	className="circle-bg"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<text x="18" y="20.35" className="percentage">
																	11
																</text>
															</svg>
														</div>
														<div className="round-charts__caption">
															Профессиональное самоопределение
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="infographics__item infographics__item--gray">
											<div className="infographics__round-chart round-charts">
												<div className="round-charts__header">
													<div className="round-charts__icon">
														<svg
															width="64"
															height="64"
															viewBox="0 0 64 64"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M32.3443 43.2185L33.6837 43.108C34.9334 43.0049 36.1911 43.1543 37.382 43.5471L37.7731 43.6761C38.1528 43.8014 38.5501 43.8653 38.95 43.8653H40.9141H42.9809C43.2893 43.8653 43.5947 43.8057 43.8805 43.69C45.0816 43.2035 46.3788 43.0011 47.671 43.0986L49.488 43.2357C50.2112 43.2903 50.8281 42.7182 50.8281 41.9929C50.8281 38.869 48.4998 36.2349 45.3995 35.8513L40.9141 35.2964L36.4166 35.8528C33.3232 36.2355 31.0002 38.8637 31.0002 41.9806C31.0002 42.7069 31.6205 43.2782 32.3443 43.2185Z"
																fill="white"
																stroke="#202B3E"
																stroke-width="2"
															/>
															<path
																d="M43.1172 32.9941H38.474V34.0701C38.474 35.3523 39.5134 36.3917 40.7956 36.3917C42.0778 36.3917 43.1172 35.3523 43.1172 34.0701V32.9941Z"
																fill="#F4F5F7"
																stroke="#202B3E"
																stroke-width="2"
															/>
															<path
																d="M41.044 18.1566C41.7992 18.4041 43.9457 19.3272 46.1435 22.2925C46.1806 22.3426 46.2012 22.4043 46.2012 22.4666V28.213C46.2012 31.1957 43.7832 33.6137 40.8004 33.6137C37.8177 33.6137 35.3997 31.1957 35.3997 28.213V22.4764C35.3997 22.4081 35.4241 22.3412 35.468 22.2889C37.6099 19.7358 39.7502 18.556 40.4889 18.1989C40.6635 18.1144 40.8597 18.0962 41.044 18.1566Z"
																fill="#F4F5F7"
																stroke="#202B3E"
																stroke-width="2"
																stroke-linecap="round"
															/>
															<path
																d="M35.1107 25.07C38.0108 24.49 40.9876 22.6061 42.3205 20.9427C42.5347 20.6753 42.8591 20.4957 43.1627 20.6544C44.2439 21.2196 45.8421 23.1794 46.4917 24.4315C46.5908 24.1312 46.6434 23.65 46.6646 23.0851C46.7677 20.3438 45.8334 17.0145 43.0913 17.0909C42.1643 17.1168 41.1932 17.3474 40.3361 17.6453C39.407 17.9683 38.371 17.6363 37.476 17.2282C36.8777 16.9554 36.3394 16.9702 36.0541 17.0525C33.2152 17.8958 34.1365 22.7509 35.1107 25.07Z"
																fill="white"
																stroke="#202B3E"
																stroke-width="2"
															/>
															<path
																d="M25.9435 27.2941C29.0862 31.9983 28.2398 36.2094 25.9908 40.2298C21.8944 42.3358 12.6393 44.4986 8.858 39.4443C5.62609 35.1243 7.24316 29.9617 8.96176 27.4601C9.44763 26.7529 9.82364 25.9445 9.82364 25.0864C9.82364 23.5593 9.9755 21.992 10.809 20.7123C11.9834 18.9091 14.1283 17 17.4807 17C20.7027 17 22.867 18.7635 24.1255 20.5016C25.1316 21.8912 25.3268 23.658 25.3268 25.3737C25.3268 26.0603 25.5621 26.7231 25.9435 27.2941Z"
																fill="white"
																stroke="#E82113"
																stroke-width="2"
																stroke-linecap="round"
															/>
															<path
																d="M9.25222 43.7384L10.5408 43.6321C11.7482 43.5325 12.9633 43.6768 14.1138 44.0563L14.4901 44.1805C14.8516 44.2997 15.2298 44.3605 15.6104 44.3605H17.5001H19.4884C19.7802 44.3605 20.0692 44.3042 20.3397 44.1946C21.5006 43.7244 22.7544 43.5288 24.0034 43.623L25.7515 43.755C26.4253 43.8058 27 43.2728 27 42.5971C27 39.6108 24.7743 37.0928 21.8106 36.7262L17.5001 36.1929L13.1778 36.7276C10.2208 37.0935 8.00014 39.6058 8.00014 42.5853C8.00014 43.2618 8.57802 43.794 9.25222 43.7384Z"
																fill="white"
																stroke="#E82113"
																stroke-width="2"
															/>
															<path
																d="M19.4199 34.396H15.5136V36.3491C15.5136 37.4278 16.3881 38.3023 17.4668 38.3023C18.5455 38.3023 19.4199 37.4278 19.4199 36.3491V34.396Z"
																fill="white"
																stroke="#E82113"
																stroke-width="2"
															/>
															<path
																d="M19.9541 23.7398C20.6704 24.461 21.4993 24.3503 22.0978 24.0462C22.3032 23.9419 22.5859 24.0781 22.5859 24.3084V29.3402C22.5859 32.2098 20.2597 34.536 17.3901 34.536C14.5205 34.536 12.1943 32.2098 12.1943 29.3402V24.1886C12.1943 23.9797 12.422 23.8471 12.6128 23.9322C14.573 24.8075 16.7177 24.1422 18.1472 23.3564C18.7286 23.0369 19.4865 23.2691 19.9541 23.7398Z"
																fill="white"
																stroke="#E82113"
																stroke-width="2"
																stroke-linecap="round"
															/>
														</svg>
													</div>
													<div className="round-charts__label">Пол</div>
												</div>
												<div className="round-charts__wrapper">
													<div className="round-charts__item">
														<div className="single-chart">
															<svg viewBox="0 0 36 36" className="circular-chart">
																<path
																	className="circle-bg"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<path
																	className="circle"
																	stroke-dasharray="11, 100"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<text x="18" y="20.35" className="percentage">
																	11%
																</text>
															</svg>
														</div>
														<div className="round-charts__caption">Женский</div>
													</div>
													<div className="round-charts__item">
														<div className="single-chart">
															<svg viewBox="0 0 36 36" className="circular-chart">
																<path
																	className="circle-bg"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<path
																	className="circle"
																	stroke-dasharray="11, 100"
																	d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																/>
																<text x="18" y="20.35" className="percentage">
																	11%
																</text>
															</svg>
														</div>
														<div className="round-charts__caption">Мужской</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
					<div className="intro__carousel-control slider-control">
						<button className="slider-control__prev"></button>
						<div className="swiper-pagination"></div>
						<button className="slider-control__next"></button>
					</div>
				</div>
			</div>
		</>
	);
}
