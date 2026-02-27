import { Link } from "react-router-dom"
import CartWidget from "../CartWidget"
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <h1>Mi Tienda</h1>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/category/remeras">Remeras</Link>
        </li>

        <li>
          <Link to="/category/pantalones">Pantalones</Link>
        </li>

        <li>
          <Link to="/category/zapatillas">Zapatillas</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar