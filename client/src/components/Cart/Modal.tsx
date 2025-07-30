import { memo } from "react"

export const Modal = memo(() => {
    return (
        <div className="modal-overlay" id="cartModal">
            <div className="modal-container cart-modal">
                <div className="cart-modal__wrapper">
                    {/* <!-- Левая часть - список товаров --> */}
                    <div className="cart-modal__products">
                        <h3 className="cart-modal__title">Ваша корзина</h3>
                        <div className="cart-items" id="cartItemsList">
                            {/* <!-- Товары будут добавляться сюда через JS --> */}
                        </div>
                        <div className="cart-total">
                            <span>Итого:</span>
                            <span id="cartTotalPrice">0 ₽</span>
                        </div>
                    </div>

                    {/* <!-- Правая часть - выбор оплаты и доставки --> */}
                    <div className="cart-modal__checkout">
                        <div className="checkout-section">
                            <h4 className="checkout-title">Способ оплаты</h4>
                            <div className="radio-group">
                                <label className="radio-option">
                                    <input type="radio" name="payment" value="card" checked></input>
                                    <span>Картой онлайн</span>
                                </label>
                                <label className="radio-option">
                                    <input type="radio" name="payment" value="transfer"></input>
                                    <span>Банковский перевод</span>
                                </label>
                                <label className="radio-option">
                                    <input type="radio" name="payment" value="sbp"></input>
                                    <span>СБП (Система быстрых платежей)</span>
                                </label>
                            </div>
                        </div>

                        <div className="checkout-section">
                            <h4 className="checkout-title">Способ получения</h4>
                            <div className="radio-group">
                                <label className="radio-option">
                                    <input type="radio" name="delivery" value="courier" checked></input>
                                    <span>Доставка курьером</span>
                                </label>
                                <label className="radio-option">
                                    <input type="radio" name="delivery" value="pickup"></input>
                                    <span>Самовывоз из магазина</span>
                                </label>
                            </div>
                        </div>

                        <button className="checkout-btn" id="checkoutButton">Оформить заказ</button>
                    </div>
                </div>
                <button className="modal-close" id="closeCartModal">&times;</button>
            </div>
        </div>
    )
})