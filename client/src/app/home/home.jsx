"use client"
import Image from "next/image";
import Header from "@/components/header/header";
import style from "./home.module.css"
import Banner from "@/components/banner/banner";
import Category from "@/components/category/category";
import NavBar from "@/components/NavBar/NabBar";
import Footer from "@/components/footer/footer";
import info from "../../img/info.png"


const HomePage = () => {
    return(
        <div className={style.container}>
            <Header/>
            <NavBar/>
            <Image src={info}/>
            <Banner 
            // images={images} 
            />
            <Category/>
            {/* <Footer/> */}
        </div>
    )
}

export default HomePage;