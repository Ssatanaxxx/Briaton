import { useState, FormEventHandler } from "react";
import "./QuestionPage.css";

export const QuestionPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", email: "", agree: false });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container">
      <div className="questions__wrapper">
        <h2 className="questions__title">
          <span className="questions__title-text">Сложно выбрать?</span>
          <span className="questions__title-text">
            Обратитесь к нам и мы поможем
          </span>
        </h2>
        <p className="questions__text">
          Эксперты по светотехнике подберут накладные светильники специально под
          вашу задачу. Вы получите проект освещения и профессиональную
          консультацию бесплатно.
        </p>

        <form onSubmit={handleSubmit} className="questions__form">
          <div className="questions__inner">
            <div className="custom-input">
              <label htmlFor="name" className="custom-input__label">
                Ваше имя
              </label>
              <input
                type="text"
                required
                className="custom-input__field"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Введите ваше имя"
                disabled={isSubmitting}
              />
            </div>
            <div className="custom-input">
              <label htmlFor="email" className="custom-input__label">
                Ваша почта
              </label>
              <input
                type="email"
                required
                className="custom-input__field"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                disabled={isSubmitting}
              />
            </div>
            <button
              className="questions__btn btn btn--big"
              type="submit"
              disabled={isSubmitting || !formData.agree}
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </button>
          </div>
          <div className="custom-checkbox">
            <input
              className="visually-hidden custom-checkbox__field"
              required
              id="agree"
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <label className="custom-checkbox__label" htmlFor="agree">
              <span className="custom-checkbox__name">
                Я согласен с политикой конфиденциальности
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionPage