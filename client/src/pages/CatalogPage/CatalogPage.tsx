import { ChangeEvent } from "react";
import "./CatalogPage.css";
import { useSearchParams } from "react-router-dom";
import ResetFilter from "../../layout/ResetFilter/ResetFilter";
import IsHave from "../../layout/IsHave/IsHave";
import ProductCard from "../../layout/ProductCard/ProductCard";
import CatalogCard from "../../layout/CatalogCard/CatalogCard";

export function CatalogPage() {
    const [searchParam, setSearchParam] = useSearchParams();

    const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setSearchParam({ searchName: value.toLowerCase() });
    };

    const handleSearchPrice = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setSearchParam({ searchPrice: value.toLowerCase() });
    };

    const searchName = searchParam.get("searchName") || "";
    const searchPrice = searchParam.get("s") || "searchPrice";


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
                    Сортировать по:{[]}
                    <input type="text" value={searchName} onChange={handleSearchName} />
                    <input type="text" name="price" value={searchPrice} onChange={handleSearchPrice} />
                </label>
                <CatalogCard />
            </div>
        </div>
    );
}