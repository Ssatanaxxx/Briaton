import "./MainPage.css";
import { memo, useEffect, useState } from "react";
import { Category, getCategories } from "../../api/categories";
import { MainImage } from "../../components/UI-Kit/Icons/Icons";

export const MainPage = memo(() => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Ошибка загрузки категорий:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="mainPage">
      <h3 className="main-page__title">
        Добро пожаловать в «Briaton» — мир света и уюта!
      </h3>

      <p className="main-page__intro-text">
        Мы — команда энтузиастов, которые верят, что правильное освещение может
        преобразить любое пространство. С 2015 года мы помогаем нашим клиентам
        создавать атмосферу тепла, комфорта и стиля в их домах, офисах и
        общественных помещениях.
      </p>

      <h3 className="main-page__subtitle">Что мы предлагаем?</h3>
      <h4 className="main-page__section-title">
        У нас вы найдёте всё для идеального освещения:
      </h4>

      <div className="mainPage__content">
        <div className="mainPage__content-left">
          {loading ? (
            <div>Загрузка категорий...</div>
          ) : (
            <ul className="main-page__product-list">
              {categories.map((category) => (
                <li key={category.id} className="main-page__product-item">
                  <h4 className="main-page__item-text">{category.title}</h4>
                </li>
              ))}
            </ul>
          )}
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
      <span className="main-page__mission-quote">💡 «Briaton» — освещаем вашу жизнь с 2015 года.</span>
    </div>
  );
});


export default MainPage