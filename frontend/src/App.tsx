import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FAQPage from "./pages/FAQPage/FAQPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import PromoProductsPage from "./pages/PromoProductsPage/PromoProductsPage";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import HeaderContacts from "./layout/HeaderContacts/HeaderContacts";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="header__container">
          <Header />
        </div>
      </header>

      <div className="section">
        <nav className="container navMenuApp">
          <div className="navMenn">
            <Link className="breadcrumbs__link" to="/">
              Главная
            </Link>
            <Link className="breadcrumbs__link" to="/Product">
              Каталог
            </Link>
            <Link className="breadcrumbs__link" to="/promo">
              Товары по акции
            </Link>
            <Link className="breadcrumbs__link" to="/FAQ">
              Вопросы
            </Link>
            <Link className="breadcrumbs__link" to="/Questions">
              Сложно выбрать
            </Link>
          </div>
          <HeaderContacts />
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Product" element={<CatalogPage />} />
            <Route path="/promo" element={<PromoProductsPage />} />
            <Route path="/FAQ" element={<FAQPage />} />
            <Route path="/Questions" element={<QuestionPage />} />
          </Routes>
        </main>
      </div>

      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
