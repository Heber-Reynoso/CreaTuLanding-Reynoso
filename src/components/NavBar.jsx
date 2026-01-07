import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav>
      <h1>Mi Tienda</h1>

      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar