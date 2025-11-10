import { useState, useEffect } from "react";
import { FAQ, getFAQ } from "../../api/faq";
import "./FAQPage.css";

export const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<string[]>([]);
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

  const toggleModal = (index: number) => {
    setActiveIndex(index);
    setCurrentAnswer(faqItems[index].answer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveIndex(null);
  };

  if (loading) return <div className="loading">Загрузка FAQ...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <div className="faq__wrapper">
        <h2 className="faq__title">Ответы на частые вопросы от покупателей</h2>
        <div className="faq__accordion accordion">
          {faqItems.map((item, index) => (
            <div
              className={`accordion__element ${
                activeIndex === index ? "active" : ""
              }`}
              key={item.id}
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

        {isModalOpen && activeIndex !== null && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <h3 className="modal-title">{faqItems[activeIndex].question}</h3>
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
