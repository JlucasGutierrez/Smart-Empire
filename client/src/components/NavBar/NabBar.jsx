import style from "./navBar.module.css"

const NavBar = () => {
    return(
        <nav className={style.nav}>
            <button className={style.uibtn}>
                <span>Categorias</span>
            </button>
            <button className={style.uibtn}><span>Celulares</span></button>
            <button className={style.uibtn}><span>Tablet</span></button>
            <button className={style.uibtn}><span>SmartTv</span></button>
        </nav>
    )
}

export default NavBar;