import "./HeaderContacts.css"

const HeaderContacts: React.FC = () => {
  return (
    <>
      <div className="callCenter">
        <a
          href="tel:+78002220037"
          aria-label="Позвонить по телефону"
          className="header__phone"
        >
          +7 (800) 222-00-37
        </a>
        <a
          href="#call"
          className="header__btn btn"
          aria-label="Заказать обратный звонок"
          type="button"
        >
          Обратный звонок
        </a>
      </div>
    </>
  );
};

export default HeaderContacts;
