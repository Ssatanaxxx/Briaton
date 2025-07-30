import { useState } from "react";
import "./FAQPage.css";

export const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState<string[]>([]);

    const toggleModal = (index: number) => {
        setActiveIndex(index);
        setCurrentAnswer(faqItems[index].answer);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setActiveIndex(null);
    };

    const faqItems = [
        {
            question: "Вы работаете с НДС?",
            answer: [
                "Да, наша компания является плательщиком НДС. Все товары в нашем магазине продаются с учетом НДС 20%, что отражено в ценах на сайте.",
                "По запросу мы предоставляем полный пакет закрывающих документов: счет-фактуру, УПД или товарную накладную."
            ]
        },
        {
            question: "Как обменять или вернуть товар?",
            answer: [
                "Согласно закону о защите прав потребителей, вы можете вернуть или обменить товар в течение 14 дней с момента покупки, если он не был в употреблении и сохранен товарный вид.",
                "Для технически сложных товаров действуют особые условия возврата - пожалуйста, уточняйте у наших менеджеров.",
                "Чтобы начать процедуру возврата, свяжитесь с нами по телефону или через форму обратной связи."
            ]
        },
        {
            question: "Как отследить заказ?",
            answer: [
                "После отправки заказа вам на email и SMS придет трек-номер для отслеживания.",
                "Вы можете проверить статус доставки в личном кабинете на нашем сайте или на сайте транспортной компании.",
                "Если возникли сложности с отслеживанием, наш менеджер с радостью поможет вам - просто позвоните нам."
            ]
        },
        {
            question: "Доставка в регионы?",
            answer: [
                "Мы доставляем товары по всей России через проверенных транспортных компаний: СДЭК, Boxberry и Почту России.",
                "Срок доставки в регионы составляет от 2 до 7 рабочих дней в зависимости от удаленности вашего города.",
                "Стоимость доставки рассчитывается индивидуально при оформлении заказа и зависит от веса посылки и тарифов перевозчика."
            ]
        },
        {
            question: "Корпоративная скидка?",
            answer: [
                "Для корпоративных клиентов у нас предусмотрена гибкая система скидок в зависимости от объема закупок.",
                "При единовременном заказе от 50 000 руб. предоставляется скидка 5%, от 100 000 руб. - 7%, от 200 000 руб. - 10%.",
                "Чтобы оформить корпоративный заказ, обратитесь к нашему менеджеру по работе с юрлицами по телефону +7 (XXX) XXX-XX-XX."
            ]
        }
    ];

    return (
        <div className="container">
            <div className="faq__wrapper">
                <h2 className="faq__title">Ответы на частые вопросы от покупателей</h2>
                <div className="faq__accordion accordion">
                    {faqItems.map((item, index) => (
                        <div
                            className={`accordion__element ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                        >
                            <button
                                className="accordion__btn"
                                type="button"
                                onClick={() => toggleModal(index)}
                            >
                                <span className="accordion__btn-text">{item.question}</span>
                                <span className="accordion__btn-icon">+</span>
                            </button>
                        </div>
                    ))}
                </div>

                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>×</button>
                            <h3 className="modal-title">{faqItems[activeIndex as number]?.question}</h3>
                            <div className="modal-body">
                                {currentAnswer.map((text, i) => (
                                    <p key={i}>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQPage;