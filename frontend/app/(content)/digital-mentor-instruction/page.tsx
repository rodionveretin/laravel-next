import '../../public/assets/sass/pages/instruction.scss';

export default function Page() {
	return (
		<>
			<section className="instruction">
				<div className="instruction__container case__container--x-small">
					<div className="instruction__title title">
						Вы начинаете работать с сервисом
						<span className="accent-text">«Цифровой наставник»</span> (чат-бот для консультирования
						молодых учителей)
					</div>
					<div className="instruction__caption">
						Для эффективной работы с сервисом просим вас соблюдать следующие правила:
					</div>
					<ol className="instruction__list">
						<li className="instruction__item">
							Формулируйте запрос максимально четко и подробно, старайтесь избегать общих фраз
						</li>
						<li className="instruction__item">
							Формулируйте уточняющие вопросы с использованием фрагмента ответа, полученного ранее
						</li>
						<li className="instruction__item">
							Внимательно следите за контекстом, нейросеть может его терять (иногда это происходит
							через несколько сообщений)
						</li>
						<li className="instruction__item">
							<span>
								В случае отсутствия удовлетворительного ответа обращайтесь за консультацию к
								наставникам на платформе <a href="/">mentor.mgpu.ru</a>
							</span>
						</li>
						<li className="instruction__item">
							По всем возникшим вопросам вы можете связаться с модератором платформы.
						</li>
					</ol>
					<a
						href="https://t.me/mcu_mentor_bot"
						className="btn btn--red btn--large instruction__button"
						target="_black"
					>
						Нейросеть онлайн чат-бот GPT для учителей
					</a>
				</div>
			</section>
		</>
	);
}
