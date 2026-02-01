import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <>
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
      </Routes>
    </>
  )
}

export default App