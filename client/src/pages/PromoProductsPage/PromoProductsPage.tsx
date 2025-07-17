import "./PromoProductsPage.css";
// import IconArrowPrev from "../../assets/sprite/icon-arrow-prev.svg?react"
// import IconArrowNext from "../../assets/sprite/icon-arrow-next.svg"
export function PromoProductsPage() {

	return (
		<div className="container">
			<div className="day-products__top">
				<h2 className="catalog__title">Светильники</h2>
				<div className="day-products__navigation">
					<button className="day-products__navigation-btn day-products__navigation-btn--prev" disabled type="button">
						{/* <IconArrowPrev width={41} height={9} aria-hidden="true" /> */}
					</button>
					<button className="day-products__navigation-btn day-products__navigation-btn--next" type="button">
						{/* <IconArrowNext width={41} height={9} aria-hidden="true" /> */}
					</button>
				</div>
			</div>

			<div className="day-products__slider swiper">
				<ul className="day-products__list swiper-wrapper">
					<li className="day-products__item">
						<div className="product-card product-card--small">
							<div className="product-card__visual">
								{/* <img className="product-card__img" src="images/item-7.png" height="344" width="290"
									alt="Изображение товара"> */}
								<div className="product-card__more">
									<a href="#" className="product-card__link btn btn--icon" data-add-to-cart data-product-id="1"
										data-product-name="Потолочная люстра Ornella A4059PL-4AB (Artelamp)" data-product-price="11540">
										<span className="btn__text">В корзину</span>
										{/* <svg width="24" height="24" aria-hidden="true">
												<use xlink:href="images/sprite.svg#icon-basket"></use>
											</svg> */}
									</a>
									<a href="#" className="product-card__link btn btn--secondary">
										<span className="btn__text">Подробнее</span>
									</a>
								</div>
							</div>
							<div className="product-card__info">
								<h2 className="product-card__title">Потолочная люстра Ornella A4059PL-4AB (Artelamp)</h2>
								<span className="product-card__old">
									<span className="product-card__old-number">15 300</span>
									<span className="product-card__old-add">₽</span>
								</span>
								<span className="product-card__price">
									<span className="product-card__price-number">11 540</span>
									<span className="product-card__price-add">₽</span>
								</span>
								<div className="product-card__tooltip tooltip">
									<button className="tooltip__btn" aria-label="Показать подсказку">
										{/* <svg className="tooltip__icon" width="5" height="10" aria-hidden="true">
											<use xlink:href="images/sprite.svg#icon-i"></use>
										</svg> */}
									</button>
									<div className="tooltip__content">
										<span className="tooltip__text">Наличие товара по городам:</span>
										<ul className="tooltip__list">
											<li className="tooltip__item">
												<span className="tooltip__text">Москва: <span className="tooltip__count">454</span></span>
											</li>
											<li className="tooltip__item">
												<span className="tooltip__text">Оренбург: <span className="tooltip__count">381</span></span>
											</li>
											<li className="tooltip__item">
												<span className="tooltip__text">Санкт-Петербург: <span className="tooltip__count">15</span></span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
