
import Header from "@/components/header/header";
import style from "./home.module.css"
import Banner from "@/components/banner/banner";
import Category from "@/components/category/category";
import NavBar from "@/components/NavBar/NabBar";



const HomePage = () => {
    return(
        <div className={style.container}>
            <Header/>
            <NavBar/>
            <Banner/>
            <Category/>
        </div>
    )
}

export default HomePage;