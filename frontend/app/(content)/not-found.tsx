import type { Metadata } from 'next';

import Image from 'next/image';

import '../../public/assets/sass/pages/404.scss';
import errorImage from '../../public/assets/images/404.png';

export const metadata: Metadata = {
	title: '404',
};

export default function Custom404() {
	return (
		<>
			<section className="error-block">
				<div className="error-block__container">
					<div className="error-block__wrapper">
						<div className="error-block__img">
							<Image src={errorImage} alt="" />
						</div>
						<h1 className="error-block__title title">Страница не найдена</h1>
						<p className="error-block__desc">
							Такая страница не найдена или не существует. Проверьте адрес страницы в адресной
							строке или начните заново.
						</p>
						<a href="/" className="btn btn--red btn--large error-block__btn">
							Вернуться на главную
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
