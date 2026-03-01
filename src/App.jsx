import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Error from "./components/Error"
import { CartProvider } from "./components/context/CartContext"
import CartContainer from "./components/CartContainer"
import Checkout from "./components/Checkout" 

function App() {
  return (
    <CartProvider>

      <NavBar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<ItemListContainer mensaje="Bienvenido a mi tienda" />}
        />

        {/* Categorías */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        {/* Detalle del producto */}
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />

        {/* Carrito */}
        <Route
          path="/cart"
          element={<CartContainer />}
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* Error */}
        <Route path="*" element={<Error />} />

      </Routes>

    </CartProvider>
  )
}

export default App