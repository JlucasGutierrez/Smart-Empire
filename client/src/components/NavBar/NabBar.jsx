
import style from "./navBar.module.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

const NavBar = () => {
    return(
    <nav className={style.nav}>
      <Menu >
        <MenuButton className={style.uibtn}>
          CATEGORIAS
        </MenuButton>
        <MenuList>
          <MenuItem>Smart Phone</MenuItem>
          <MenuItem>Tablet</MenuItem>
          <MenuItem>Smart Tv</MenuItem>
          <MenuItem>Pc</MenuItem>
          <MenuItem>more</MenuItem>
        </MenuList>
      </Menu>
      <button className={style.uibtn} >
        <span>Ofertas</span>
      </button>
    </nav>
        // <nav className={style.nav}>
        //     <button className={style.uibtn}>
        //         <span>Categorias </span>
               
        //     </button>
        // </nav>
    )
}

export default NavBar;