
// import "QuestionPage.css"
export const QuestionPage = () => {
    return (
        <div className="container">
            <div className="questions__wrapper">
                <h2 className="questions__title">
                    <span className="questions__title-text">Сложно выбрать?</span>
                    <span className="questions__title-text">Обратитесь к нам и мы поможем</span>
                </h2>
                {/* <img className="questions__img" src="images/lamp.png" width="253" height="319" alt="Фотография лампы"> */}
                <p className="questions__text">Эксперты по светотехнике подберут накладные светильники специально под вашу задачу.
                    Вы получите проект освещения и профессиональную консультацию бесплатно.</p>
                <form action="#" method="POST" className="questions__form">
                    <div className="questions__inner">
                        <div className="custom-input">
                            <label htmlFor="name" className="custon-input__label">Ваше имя</label>
                            <input type="text" required className="custom-input__field" id="name" placeholder="Светлана"></input>
                        </div>
                        <div className="custom-input">
                            <label htmlFor="email" className="custon-input__label">Ваша почта</label>
                            <input type="email" required className="custom-input__field" id="email" placeholder="example@example.com"></input>
                        </div>
                        <button className="questions__btn btn btn--big" type="submit">Отправить заявку</button>
                    </div>
                    <div className="custom-checkbox">
                        <input className="visually-hidden custom-checkbox__field" required id="agree" type="checkbox" name="pendant"></input>
                        <label className="custom-checkbox__label" htmlFor="agree">
                            <span className="custom-checkbox__name">Я согласен с политикой конфиденциальности</span>
                            {/* <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                  <use xlink:href="images/sprite.svg#icon-check"></use>
                </svg> */}
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}