import Image from 'next/image';

import '../../../public/assets/sass/components/loading.scss';

export default () => {
	return (
		<>
			<div className="loading-screen">
				<div className="loading loading--dark loading--medium">
					<Image src="/assets/images/icons/loading.svg" alt="Загрузка..." width={64} height={64} />
					<div className="loading__text">Загрузка...</div>
				</div>
			</div>
		</>
	);
};
