import style from "./banner.module.css"
import Image from "next/image";
import banMoto from "../../img/banMoto.jpg"

function Banner () {
    return(
        <div className={style.container}>
            <Image className={style.imagen} src={banMoto} alt={banMoto} />
        </div>
    )
}

export default Banner;

