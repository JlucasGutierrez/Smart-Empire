import SearchBar from "../SearchBar/searchBar";
import style from "./header.module.css"
import logo from "../../img/logo1.jpg"
import Image from "next/image";

function Header() {
    return(
        <div className={style.container}>
            <div>
                <Image src={logo} width={250} height={97} alt={logo} />
            </div>
            <div><SearchBar/></div>
            <button className={style.button}>Login</button>
        
        </div>
    )
}

export default Header;