import {  NavLink } from "react-router-dom"
import styles from "./NavBar.module.scss";


const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      
      <NavLink to='/'>Home</NavLink>
      
      <NavLink to='/movies'>Movie List</NavLink>
      
    </nav>

  )
}

export default NavBar