import Image from "next/image";
import style from "./card.module.css"
import kidGoku from "../../../img/kidGoku.jpg"

const Card = () =>{
    return(
    <div className={style.container}>
        <div>
            <Image className={style.img} src={kidGoku} alt="goku"/>
        <p className={style.p}>Goku Phone</p>
        <p className={style.p}>$600</p>
        <button>Buy</button>
        </div>
        
 
    </div>

    )
};

export default Card;