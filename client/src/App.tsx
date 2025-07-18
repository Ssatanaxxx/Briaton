import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./css/style.css";
import { MainPage, CatalogPage, PromoProductsPage } from "./pages";
import { lazy } from "react";
import { FAQPage } from "./pages/FAQPage";
import { QuestionPage } from "./pages/QuestionPage";
import { PRODUCT } from "./api/Products";

const LazyHeaders = lazy(() => import("./layout/Header/Header"))
const LazyMenu = lazy(() => import("./layout/Menu/Menu"))
const LazyFooter = lazy(() => import("./layout/Footer/Footer"))

const App = () => {
	return (
		<BrowserRouter>
			<header className="header">
				<div className="header__container">
					<LazyHeaders />
				</div>
			</header>

			<div className="section">
				<nav className="container navMenuApp" >
					<div className="navMenn">
						<Link className="breadcrumbs__link" to={"/"}>Главная</Link>
						<Link className="breadcrumbs__link" to={"/Product"}>Каталог</Link>
						<Link className="breadcrumbs__link" to={"/GoodsOfTheDay"}>Товары по акций</Link>
						<Link className="breadcrumbs__link" to={"/FAQ"}>Вопросы?</Link>
						<Link className="breadcrumbs__link" to={"/Questions"}>Сложно выбрать?</Link>
					</div>
					<LazyMenu />
				</nav>

				<main className="content">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/Product" element={<CatalogPage />} />
						<Route path="/GoodsOfTheDay" element={<PromoProductsPage />} />
						<Route path="/FAQ" element={<FAQPage />} />
						<Route path="/Questions" element={<QuestionPage />} />
					</Routes>
				</main>
			</div>
			<footer className="footer">
				<div className="container">
					<LazyFooter />
				</div>
			</footer>
		</BrowserRouter>
	);
}

export default App;