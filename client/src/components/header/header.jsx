import SearchBar from "../SearchBar/searchBar";
import style from "./header.module.css"

function Header() {
    return(
        <div className={style.container}>Header
        <SearchBar/>
        </div>
    )
}

export default Header;