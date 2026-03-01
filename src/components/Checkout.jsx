import { useContext, useState } from "react"
import { CartContext } from "../components/context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../service/firebase"
import { Link } from "react-router-dom"

function Checkout() {

  const { cart, clearCart } = useContext(CartContext)

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    repetirEmail: ""
  })

  const [orderId, setOrderId] = useState(null)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState(false)

  //  FUNCIÓN TOTAL AGREGADA 
  const total = () => {
    return cart.reduce((acc, prod) => {
      return acc + prod.price * prod.quantity
    }, 0)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !formData.nombre ||
      !formData.apellido ||
      !formData.email ||
      !formData.repetirEmail
    ) {
      setError("Por favor complete todos los campos")
      return
    }

    if (formData.email !== formData.repetirEmail) {
      setError("Los correos no coinciden")
      return
    }

    setError(null)
    setProcessing(true)

    const orden = {
      comprador: {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email
      },
      compras: cart,
      total: total(), // 👈 ahora sí existe
      date: serverTimestamp()
    }

    const ventas = collection(db, "orders")

    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id)
        clearCart()
      })
      .catch((err) => {
        console.log(err)
        setError("Ocurrió un error al generar la orden")
      })
      .finally(() => {
        setProcessing(false)
      })
  }

  if (!cart.length && !orderId) {
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
    <>
      {orderId ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h2>Muchas gracias por su compra 🎉</h2>
          <h4>Su orden es: {orderId}</h4>

          <Link to="/">
            <button style={{ padding: "10px 20px", marginTop: "20px" }}>
              Volver a Home
            </button>
          </Link>
        </div>
      ) : (
        <div style={{ maxWidth: "500px", margin: "40px auto", textAlign: "center" }}>
          <h2>Complete por favor los datos</h2>

          {error && (
            <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
          )}

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "20px"
            }}
          >
            <input
              type="text"
              name="nombre"
              placeholder="Ingrese su nombre"
              value={formData.nombre}
              onChange={handleChange}
            />

            <input
              type="text"
              name="apellido"
              placeholder="Ingrese su apellido"
              value={formData.apellido}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Ingrese su correo"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="email"
              name="repetirEmail"
              placeholder="Repita su correo"
              value={formData.repetirEmail}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={processing}
              style={{ padding: "10px", fontSize: "16px" }}
            >
              {processing ? "Procesando Orden..." : "Generar Orden"}
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Checkout