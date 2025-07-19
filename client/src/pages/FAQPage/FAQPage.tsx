import { useState } from "react";
import "./FAQPage.css";

export const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "Вы работаете с НДС?",
            answer: [
                "Вы можете отказаться от покупки. Товар должен быть надлежащего качества...",
                "Обращаем Ваше внимание, что расходы на доставку товара..."
            ]
        },
        {
            question: "Как обменять или вернуть товар?",
            answer: [
                "Вы можете отказаться от покупки. Товар должен быть надлежащего качества...",
                "Обращаем Ваше внимание, что расходы на доставку товара..."
            ]
        },
        {
            question: "Как отследить заказ?",
            answer: [
                "Вы можете отказаться от покупки. Товар должен быть надлежащего качества...",
                "Обращаем Ваше внимание, что расходы на доставку товара..."
            ]
        },
        {
            question: "Доставка в регионы?",
            answer: [
                "Вы можете отказаться от покупки. Товар должен быть надлежащего качества...",
                "Обращаем Ваше внимание, что расходы на доставку товара..."
            ]
        },
        {
            question: "Корпоративная скидка?",
            answer: [
                "Вы можете отказаться от покупки. Товар должен быть надлежащего качества...",
                "Обращаем Ваше внимание, что расходы на доставку товара..."
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
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="accordion__btn-text">{item.question}</span>
                                <span className="accordion__btn-icon">+</span>
                            </button>
                            <div className="accordion__content">
                                <div className="accordion__inner">
                                    <div className="accordion__content-text">
                                        {item.answer.map((text, i) => (
                                            <p key={i}>{text}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;