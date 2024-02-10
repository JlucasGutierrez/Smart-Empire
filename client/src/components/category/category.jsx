import style from "./category.module.css"

const Category = () => {
    return(
        <div className={style.container}>
            <div className={style.m1}></div>
            <div className={style.m2}>
                <div className={style.a1}></div>
                <div className={style.a2}>
                    <div className={style.b2}></div>
                    <div className={style.b3}></div>
                </div>   
            </div>
        </div>
    )
}

export default Category;