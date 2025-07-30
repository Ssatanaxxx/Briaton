import "./MainPage.css";
import MainPageProductList from "../../components/ui/PartsMainPage/MainPageProductList"
import { MainPageProduct } from "../../components/ui/PartsMainPage/interface"
import MainImage from "../../assets/mainImage.jpg"
import { memo } from "react";
export const MainPage = memo(() => {
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
					<MainPageProductList products={MainPageProduct} />
				</div>
				<div className="mainPage__content-right">
					<img
						src={MainImage}
						alt="Пример освещения от Briaton"
						className="mainPage__image"
						loading="lazy"
					/>
				</div>
			</div>
			<p className="main-page__mission-text">
				Наша миссия — вдохновлять вас на создание идеального света!
			</p>
			<span>💡 «Briaton» — освещаем вашу жизнь с 2015 года.</span>
		</div>
	);
})
