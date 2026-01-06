import { useState, useEffect } from "react";
import { FAQ, getFAQ } from "../../api/faq";
import "./FAQPage.css";

export const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [faqItems, setFaqItems] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFAQ = async () => {
      try {
        const data = await getFAQ();
        setFaqItems(data);
      } catch (err) {
        setError("Ошибка загрузки FAQ");
        console.error("Ошибка загрузки FAQ:", err);
      } finally {
        setLoading(false);
      }
    };

    loadFAQ();
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) return <div className="loading">Загрузка FAQ...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <div className="faq__wrapper">
        <h2 className="faq__title">Ответы на частые вопросы от покупателей</h2>
        <div className="accordion">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`accordion__element ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="accordion__btn"
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="accordion__btn-text">{item.question}</span>
                <span className="accordion__btn-icon">+</span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="accordion__content"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? `${item.answer.length * 3.5}em`
                      : "0",
                }}
              >
                {item.answer.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
