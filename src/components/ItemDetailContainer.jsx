import { useEffect, useState, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../service/firebase"
import ItemCount from "./ItemCount"
import { CartContext } from "../components/context/CartContext"

function ItemDetailContainer() {

  const { itemId } = useParams()

  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [invalid, setInvalid] = useState(false)
  const [purchase, setPurchase] = useState(false)

  const { addToCart } = useContext(CartContext)

  useEffect(() => {

    setLoading(true)
    setInvalid(false) // 🔥 importante resetear

    const docRef = doc(db, "productos", itemId)

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProducto({
            id: res.id,
            ...res.data()
          })
        } else {
          setInvalid(true)
          setProducto(null)
        }
      })
      .catch((error) => {
        console.error(error)
        setInvalid(true)
      })
      .finally(() => setLoading(false))

  }, [itemId])

  // 🔥 Si está cargando
  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Cargando detalle...</p>
  }

  // 🔥 Si el producto NO existe
  if (invalid) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>El producto no existe ⚠️</h2>
        <Link to="/">
          <button style={{ padding: "10px 20px", marginTop: "20px" }}>
            Volver a Home
          </button>
        </Link>
      </div>
    )
  }

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad)
    setPurchase(true)
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

      {purchase ? (
        <Link to="/cart">
          <button style={{ padding: "10px 20px" }}>
            Ir al carrito
          </button>
        </Link>
      ) : (
        <ItemCount
          stock={producto.stock}
          initial={1}
          onAdd={handleAdd}
        />
      )}
    </div>
  )
}

export default ItemDetailContainer