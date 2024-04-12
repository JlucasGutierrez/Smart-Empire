import Image from "next/image";
import style from "./category.module.css"
import Smartphone from "../../img/Smartphone.jpg"
import samsung from "../../img/samsung.jpg"
import motorola from "../../img/motorola.png"
import iphone from "../../img/iphone.jpg"
import Link from "next/link";

const Category = () => {
    return(
        <div className={style.container}>
            <div className={style.box}>
                <h2 className={style.h2}>
                    <p className={style.p}>Titulo</p>
                </h2>
                <div className={style.img}>Imagen</div>
                <div className={style.ccuadro}>
                    <div className={style.cuadro}></div>
                    <div className={style.cuadro}></div>
                    <div className={style.cuadro}></div>
                </div>
            </div>
            <div className={style.box}>
                <h2 className={style.h2}>
                    <p className={style.p}>Titulo</p>
                </h2>
                <div className={style.img}>Imagen</div>
                <div className={style.ccuadro}>
                    <div className={style.cuadro}></div>
                    <div className={style.cuadro}></div>
                    <div className={style.cuadro}></div>
                </div>
            </div>
            <div className={style.box}>
                <h2 className={style.h2}>
                    <p className={style.p}>Titulo</p>
                </h2>
                <div className={style.img}>Imagen</div>
                <div className={style.ccuadro}>
                    <div className={style.cuadro}></div>
                    <div className={style.cuadro}></div>
                    <div className={style.cuadro}></div>
                </div>
            </div>
            <div className={style.box}>
                <h2 className={style.h2}>
                    <p className={style.p}>Titulo</p>
                </h2>
                <div className={style.img}>Imagen</div>
                <div className={style.ccuadro}>
                    <div className={style.cuadro}></div>
                    <div className={style.cuadro}></div>
                    <div className={style.cuadro}></div>
                </div>
            </div>
        
           
        </div>
    )
}

export default Category;