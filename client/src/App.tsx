import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./css/style.css";
import { MainPage, PlaylistInfoPage, PlaylistsPage, UserInfoPage, UsersPage } from "./pages";
import { lazy } from "react";

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
						<Link className="navMenu-link" to={"/"}>Главная</Link>
						<Link className="navMenu-link" to={"/Product"}>Товары</Link>
						<Link className="navMenu-link" to={"/GoodsOfTheDay"}>Товары дня</Link>
					</div>
					<LazyMenu />
				</nav>

				<main className="content">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/Product" element={<UsersPage />} />
						<Route path="/Product/:userId" element={<UserInfoPage />} />
						<Route path="/GoodsOfTheDay" element={<PlaylistsPage />} />
						<Route path="/GoodsOfTheDay/:playlistId" element={<PlaylistInfoPage />} />
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