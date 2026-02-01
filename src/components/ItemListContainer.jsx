import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../data/getProducts"
import ItemList from "./ItemList"

function ItemListContainer({ mensaje }) {
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        const filtered = data.filter(
          (item) => item.category === categoryId
        )
        setItems(filtered)
      } else {
        setItems(data)
      }
    })
  }, [categoryId])

  return (
    <div>
      <h2>{mensaje}</h2>

      {categoryId && <h3>Categoría: {categoryId}</h3>}

      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer