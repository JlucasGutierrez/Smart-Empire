import style from "./searchBar.module.css"


const SearchBar = () => {
    return(
        <div className={style.search}>
            <input placeholder="Search..." type="text"/>
        <button type="submit">Go</button>
        </div>
    )
}

export default SearchBar;