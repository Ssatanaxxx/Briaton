import "./MainPage.css";
import MainImage from "../../assets/mainImage.jpg"
export const MainPage = () => {
	return (
		<div className="mainPage">
			<h3 className="main-page__title">Добро пожаловать в «Briaton» — мир света и уюта!</h3>

			<p className="main-page__intro-text">
				Мы — команда энтузиастов, которые верят, что правильное освещение может преобразить любое пространство.
				С 2015 года мы помогаем нашим клиентам создавать атмосферу тепла, комфорта и стиля в их домах, офисах и общественных помещениях.
			</p>

			<h3 className="main-page__subtitle">Что мы предлагаем?</h3>
			<h4 className="main-page__section-title">У нас вы найдёте всё для идеального освещения:</h4>
			<div className="mainPage__content">
				<div className="mainPage__content-left">

					<ul className="main-page__product-list">
						<li className="main-page__product-item">
							Люстры — роскошные, классические и современные, для гостиных, спален и столовых.
						</li>
						<li className="main-page__product-item">
							Светильники — стильные решения для любого интерьера.
						</li>
						<li className="main-page__product-item">
							Бра и подсветки — уютное локальное освещение для коридоров, спален и зон отдыха.
						</li>
						<li className="main-page__product-item">
							Споты — гибкие системы направленного света для современного дизайна.
						</li>
						<li className="main-page__product-item">
							Настольные лампы — функциональные и декоративные, для работы и уюта.
						</li>
						<li className="main-page__product-item">
							Торшеры — элегантные напольные лампы для создания атмосферы.
						</li>
						<li className="main-page__product-item">
							Трековые системы — универсальное освещение для магазинов, лофтов и кухонь.
						</li>
						<li className="main-page__product-item">
							Уличное освещение — фонари, садовые светильники и подсветка фасадов.
						</li>
						<li className="main-page__product-item">
							Офисное освещение — эргономичные и энергоэффективные решения.
						</li>
						<li className="main-page__product-item">
							Лампочки — LED, филаментные, умные и другие технологии.
						</li>
						<li className="main-page__product-item">
							Светодиодная подсветка — для мебели, потолков и декоративных элементов.
						</li>
						<li className="main-page__product-item">
							Предметы интерьера — светильники-скульптуры и арт-объекты.
						</li>
						<li className="main-page__product-item">
							Электротовары — кабели, выключатели и умные системы управления светом.
						</li>
					</ul>

				</div>
				<div className="mainPage__content-right">
					<img src={MainImage} alt="" />
				</div>
			</div>
			<p className="main-page__mission-text">
				Наша миссия — вдохновлять вас на создание идеального света!
			</p>
			<span>💡 «Briaton» — освещаем вашу жизнь с 2015 года.</span>
		</div>
	);
}
