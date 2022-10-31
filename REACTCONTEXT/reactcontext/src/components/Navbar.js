import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        
        <NavLink to="/" className={({isActive}) => (isActive ? 'ativo' : 'não-ativo')}>Home</NavLink>
        <NavLink to="About">Sobre</NavLink>
        <NavLink to="Products">Produtos</NavLink>

    </nav>
  )
}

export default Navbar