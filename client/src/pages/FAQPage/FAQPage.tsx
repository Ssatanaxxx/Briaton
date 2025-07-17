
import "./FAQPage.css"
export const FAQPage = () => {
    return (
        <div className="container">
            <div className="faq__wrapper">
                <h2 className="faq__title">Ответы на частые вопросы от покупателей</h2>
                <div className="faq__accordion accordion">
                    {/* <!-- Первый вопрос --> */}
                    <div className="accordion__element">
                        <button className="accordion__btn" type="button">
                            <span className="accordion__btn-text">Вы работаете с НДС?</span>
                            <span className="accordion__btn-icon">+</span>
                        </button>
                        <div className="accordion__content">
                            <div className="accordion__inner">
                                <div className="accordion__content-text">
                                    <p>Вы можете отказаться от покупки. Товар должен быть надлежащего качества...</p>
                                    <p>Обращаем Ваше внимание, что расходы на доставку товара...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Второй вопрос --> */}
                    <div className="accordion__element">
                        <button className="accordion__btn" type="button">
                            <span className="accordion__btn-text">Как обменять или вернуть товар?</span>
                            <span className="accordion__btn-icon">+</span>
                        </button>
                        <div className="accordion__content">
                            <div className="accordion__inner">
                                <div className="accordion__content-text">
                                    <p>Вы можете отказаться от покупки. Товар должен быть надлежащего качества...</p>
                                    <p>Обращаем Ваше внимание, что расходы на доставку товара...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Третий вопрос --> */}
                    <div className="accordion__element">
                        <button className="accordion__btn" type="button">
                            <span className="accordion__btn-text">Как отследить заказ?</span>
                            <span className="accordion__btn-icon">+</span>
                        </button>
                        <div className="accordion__content">
                            <div className="accordion__inner">
                                <div className="accordion__content-text">
                                    <p>Вы можете отказаться от покупки. Товар должен быть надлежащего качества...</p>
                                    <p>Обращаем Ваше внимание, что расходы на доставку товара...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Четвертый вопрос --> */}
                    <div className="accordion__element">
                        <button className="accordion__btn" type="button">
                            <span className="accordion__btn-text">Доставка в регионы?</span>
                            <span className="accordion__btn-icon">+</span>
                        </button>
                        <div className="accordion__content">
                            <div className="accordion__inner">
                                <div className="accordion__content-text">
                                    <p>Вы можете отказаться от покупки. Товар должен быть надлежащего качества...</p>
                                    <p>Обращаем Ваше внимание, что расходы на доставку товара...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Пятый вопрос --> */}
                    <div className="accordion__element">
                        <button className="accordion__btn" type="button">
                            <span className="accordion__btn-text">Корпоративная скидка?</span>
                            <span className="accordion__btn-icon">+</span>
                        </button>
                        <div className="accordion__content">
                            <div className="accordion__inner">
                                <div className="accordion__content-text">
                                    <p>Вы можете отказаться от покупки. Товар должен быть надлежащего качества...</p>
                                    <p>Обращаем Ваше внимание, что расходы на доставку товара...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQPage;