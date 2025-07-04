import './Search.css';
// import SearchIcon from './assets/search.svg?react';

export const Search = () => {
    return (
        <div className="search-container">
            {/* <SearchIcon className="search-icon" /> */} {/* Я не понимаю, где лежит это svg элемент :/ */}
            <input
                className="search-input"
                placeholder="Search for restaurants"
            />
        </div>
    )
}
