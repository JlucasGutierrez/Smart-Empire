import Image from "next/image";
import style from "./navbar.module.css"
import logo from "../../img/logo1.jpg"
import SearchBar from "../SearchBar/searchbar";

function Navbar(){
    return(
        <div className={style.container}>
            <div>
                <Image src={logo} width={250} height={97} alt={logo} />
            </div>
            <div>
                <SearchBar/>
            </div>
        </div>
    )
}

export default Navbar;