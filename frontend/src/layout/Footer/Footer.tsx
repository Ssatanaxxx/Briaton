

import { IconFooterAffarts, IconFooterLogo, IconFooterMC, IconFooterMir, IconFooterVisa } from "../../components/UI-Kit/Icons/Icons";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer__main">
        <IconFooterLogo
          className="footer__logo-link"
          width={180}
          height={33}
          aria-hidden="true"
        />
        <div className="footer__menu">
          <div className="footer__box">
            <div className="footer__contact">
              <span className="footer__name">Адрес:</span>
              <span className="footer__contact-link">
                г. Москва, Нижний проезд, 25/3
              </span>
            </div>
            <div className="footer__contact">
              <span className="footer__name">Контакты:</span>
              <a
                className="footer__contact-link"
                href="mailto:infobriaton@group.ru"
              >
                infobriaton@group.ru
              </a>
              <a className="footer__contact-link" href="tel:+78002220037">
                +7 (800) 222-00-37
              </a>
            </div>
          </div>
          <div className="footer__social">
            <span className="footer__name">Присоединяйтесь к нам:</span>
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a className="footer__social-link" href="#">
                  Дзен
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="#">
                  Одноклассники
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="#">
                  Pinterest
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="#">
                  Вконтакте
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="call" className="footer__info">
          <button className="footer__btn btn">Свяжитесь с нами</button>
          <ul className="footer__cards">
            <li className="footer__card">
              <IconFooterVisa
                className="footer__logo"
                width={44}
                height={15}
                aria-hidden="true"
              />
            </li>
            <li className="footer__card">
              <IconFooterMC
                className="footer__logo"
                width={34}
                height={22}
                aria-hidden="true"
              />
            </li>
            <li className="footer__card">
              <IconFooterMir
                className="footer__logo"
                width={66}
                height={19}
                aria-hidden="true"
              />
            </li>
          </ul>
        </div>
      </div>
      <div id="partner" className="footer__bottom">
        <div className="footer__policy">
          <a className="footer__policy-link" href="#">
            Политика обработки персональных данных
          </a>
          <a className="footer__policy-link" href="#">
            Политика конфиденциальности
          </a>
        </div>
        <span className="footer__copyright">© ООО "Бриатон"</span>
        <a className="footer__develop" href="https://affarts.ru/">
          <span className="footer__develop-text">Дизайн сделан в</span>
          <IconFooterAffarts
            className="footer__develop-logo"
            width={62}
            height={18}
            aria-hidden="true"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
