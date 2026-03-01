import { Link } from "react-router-dom"

function EmptyCart() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Tu carrito está vacío</h2>
      <p>Te invitamos a ver nuestros productos</p>
      <Link to="/">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Ir a comprar</button>
      </Link>
    </div>
  )
}

export default EmptyCart