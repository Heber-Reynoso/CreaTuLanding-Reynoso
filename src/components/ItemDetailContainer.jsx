import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../data/getProducts"

function ItemDetailContainer() {
  const { itemId } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    console.log("itemId:", itemId)

    getProductById(itemId).then((data) => {
      console.log("producto encontrado:", data)
      setProducto(data)
    })
  }, [itemId])

  if (producto === null) {
    return <p>Cargando producto...</p>
  }

  if (!producto) {
    return <p>Producto no encontrado</p>
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center" }}>
      <h2>{producto.title}</h2>

      <img
        src={producto.image}
        alt={producto.title}
        style={{ width: "100%", borderRadius: "12px", margin: "20px 0" }}
      />

      <p>{producto.description}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
    </div>
  )
}

export default ItemDetailContainer