import SearchBar from "../SearchBar/searchBar";
import style from "./header.module.css"
import logo from "../../img/logo.jpeg"
import Image from "next/image";

function Header() {
    return(
        <div className={style.container}>
            <div>
                <Image src={logo} width={120} height={97} alt={logo} />
            </div>
            <div><SearchBar/></div>
            <button>Login</button>
        
        </div>
    )
}

export default Header;