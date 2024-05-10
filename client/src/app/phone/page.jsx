import NavBar from "@/components/NavBar/NabBar";
import Card from "@/components/card/CardPhone/cardBrand";
import Header from "@/components/header/header";
import style from "./phone.module.css"
import FilterPhone from "@/components/filter/filterphone/filter";

const Phone = () => {
    return(
    <div className={style.container}>
        <Header/>
        <NavBar/> 
        <h1 className={style.title}>SMARTPHONES</h1>
        <div>
           <FilterPhone/>
            <div><Card/></div>
            
        </div>
    </div>
    )
};

export default Phone;