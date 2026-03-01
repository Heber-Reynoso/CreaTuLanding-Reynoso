import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../components/context/CartContext"

function CartView() {

  const { cart, removeFromCart, clearCart } = useContext(CartContext)

  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>El carrito está vacío 🛒</h2>
        <Link to="/">
          <button style={{ padding: "10px 20px", marginTop: "20px" }}>
            Volver a la tienda
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto" }}>
      <h2>Tu carrito 🛒</h2>

      {cart.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px"
          }}
        >
          <img
            src={prod.image}
            alt={prod.title}
            style={{ width: "100px", marginRight: "20px" }}
          />

          <div style={{ flex: 1 }}>
            <h3>{prod.title}</h3>
            <p>Precio: ${prod.price}</p>
            <p>Cantidad: {prod.quantity}</p>
            <p>Subtotal: ${prod.price * prod.quantity}</p>
          </div>

          <button
            onClick={() => removeFromCart(prod.id)}
            style={{ padding: "5px 10px" }}
          >
            🗑️
          </button>
        </div>
      ))}

      <h3>Total a pagar: ${total}</h3>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <button onClick={clearCart} style={{ padding: "10px 20px" }}>
          Vaciar carrito
        </button>

        {/* NAVEGA AL CHECKOUT */}
        <Link to="/checkout">
          <button style={{ padding: "10px 20px" }}>
            Terminar compra
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CartView