import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Agrega productos al carrito, sumando cantidad si ya existe y validando stock
  const addToCart = (item, quantity) => {
    setCart(prevCart => {
      const existing = prevCart.find(prod => prod.id === item.id)
      if (existing) {
        const newQuantity = existing.quantity + quantity
        if (newQuantity > item.stock) {
          alert(`No hay suficiente stock. Solo quedan ${item.stock} unidades.`)
          return prevCart
        }
        return prevCart.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: newQuantity }
            : prod
        )
      } else {
        if (quantity > item.stock) {
          alert(`No hay suficiente stock. Solo quedan ${item.stock} unidades.`)
          return prevCart
        }
        return [...prevCart, { ...item, quantity }]
      }
    })
  }

  // Eliminar un producto
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== id))
  }

  // Vaciar carrito
  const clearCart = () => setCart([])

  // Total de items en cantidad
  const totalItems = () => cart.reduce((acc, prod) => acc + prod.quantity, 0)

  // Total de precio
  const total = () => cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)

  // Debug: ver cambios en consola
  useEffect(() => {
    console.log("Carrito actualizado:", cart)
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, total }}>
      {children}
    </CartContext.Provider>
  )
}