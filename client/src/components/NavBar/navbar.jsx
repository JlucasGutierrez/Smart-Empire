import Image from "next/image";
import logo from "../../img/logo1.jpg"
import SearchBar from "../SearchBar/searchbar";

function Navbar(){
    return(
        <div className="bg-black h-auto flex items-center justify-between">
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

