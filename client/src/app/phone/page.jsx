import NavBar from "@/components/NavBar/NabBar";
import Card from "@/components/card/CardPhone/cardBrand";
import Header from "@/components/header/header";
import style from "./phone.module.css"

const Phone = () => {
    return(
    <div className={style.container}>
        <Header/>
        <NavBar/>
        <Card/>
    </div>
    )
};

export default Phone;