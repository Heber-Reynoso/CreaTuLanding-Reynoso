import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getProducts } from "../data/getProducts.js"

function ItemListContainer({ mensaje }) {
  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        const filtrados = data.filter(
          (prod) => prod.category === categoryId
        )
        setProductos(filtrados)
      } else {
        setProductos(data)
      }
    })
  }, [categoryId])

  return (
    <>
      {mensaje && <h2>{mensaje}</h2>}
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer