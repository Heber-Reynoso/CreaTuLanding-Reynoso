import { useContext } from "react"
import { CartContext } from "../components/context/CartContext"
import CartView from "./CartView"
import EmptyCart from "./EmptyCart"

function CartContainer() {
  const { cart } = useContext(CartContext)

  return cart.length === 0 ? <EmptyCart /> : <CartView />
}

export default CartContainer