import { useContext } from "react"
import { CartContext } from "../components/context/CartContext"

function CartWidget() {
  const { totalItems } = useContext(CartContext)

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <span style={{ fontSize: "24px" }}>🛒</span>
      {totalItems() > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
            fontWeight: "bold"
          }}
        >
          {totalItems()}
        </span>
      )}
    </div>
  )
}

export default CartWidget