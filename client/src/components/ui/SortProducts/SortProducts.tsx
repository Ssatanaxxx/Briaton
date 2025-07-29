
const SortProducts = () => {
    return (
        <>
            <div className="catalog__products">
                <div className="catalog__sort">
                    <p className="catalog__sort-text">Сортировать по:</p>
                    <select className="catalog__sort-select" name="sort">
                        <option value="price-min">Сначала дешёвые</option>
                        <option value="price-max">Сначала дорогие</option>
                        <option value="rating-max">Сначала популярные</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default SortProducts;