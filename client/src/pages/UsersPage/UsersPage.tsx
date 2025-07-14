import { ChangeEvent } from "react";
import { USERS } from "../../data";
import "./UsersPage.css";
import { Link, useSearchParams } from "react-router-dom";
import ResetFilter from "../../layout/ResetFilter/ResetFilter";
import IsHave from "../../layout/IsHave/IsHave";
import ProductCard from "../../layout/ProductCard/ProductCard";

export function UsersPage() {
	const [searchParam, setSearchParam] = useSearchParams();

	const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchParam({ searchName: value.toLowerCase() });
	};

	const searchName = searchParam.get("searchName") || "";

	const filteredUsers = USERS.filter(({ fullName }) =>
		fullName.toLowerCase().includes(searchName)
	);

	return (
		<div className="container">
			<h2 className="catalog__title">Светильники</h2>
			<div className="catalog__wrapper">
				<form action="#" method="get" className="catalog-form">
					<ResetFilter />
					<ProductCard />
					<IsHave />
				</form>
				<label>
					введите имя{" "}
					<input type="text" value={searchName} onChange={handleSearchName} />
				</label>

				{filteredUsers.map(({ id, fullName }) => (
					<Link to={`/users/${id}`} key={id}>
						{fullName}
					</Link>
				))}
			</div>
		</div>
	);
}
