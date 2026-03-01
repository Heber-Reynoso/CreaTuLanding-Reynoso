import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ItemList from "./ItemList"
import Loader from "./Loader"

import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"   

function ItemListContainer({ mensaje }) {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { categoryId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {

    setLoading(true)

    // Referencia a la colección "productos"
    const productosRef = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId))
      : collection(db, "productos")

    // Pedimos los documentos
    getDocs(productosRef)
      .then((res) => {

        const lista = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setProductos(lista)
      })
      .catch((err) => {
        console.error("Error trayendo productos:", err)
        setError(err)
        navigate("/error")
      })
      .finally(() => setLoading(false))

  }, [categoryId])

  if (error) {
    return <p>Hubo un error, intentá más tarde</p>
  }

  return (
    <>
      {
        loading
          ? <Loader text={categoryId ? "Cargando categoría..." : "Cargando productos..."} />
          : <>
              {mensaje && <h2>{mensaje}</h2>}
              <ItemList productos={productos} />
            </>
      }
    </>
  )
}

export default ItemListContainer