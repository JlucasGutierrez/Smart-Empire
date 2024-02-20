import Image from "next/image";
import style from "./category.module.css"
import Smartphone from "../../img/Smartphone.jpg"
import samsung from "../../img/samsung.jpg"
import motorola from "../../img/motorola.png"
import iphone from "../../img/iphone.jpg"

const Category = () => {
    return(
        <div className={style.container}>
            <div className={style.m1}>
                 <Image className={style.m1Image} src={Smartphone}/>
            </div>
            <div className={style.m2}>
                <div className={style.a1}>
                    <Image className={style.a1Image} src={samsung}/>
                </div>
                <div className={style.a2}>
                    <div className={style.b2}>
                        <Image className={style.b2Image} src={motorola}/>
                    </div>
                    <div className={style.b3}>
                     <Image className={style.b3Image} src={iphone}/>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Category;