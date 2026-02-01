import { useParams } from "react-router-dom"

function ItemDetailContainer() {
  const { itemId } = useParams()

  return (
    <div>
      <h2>Detalle del producto {itemId}</h2>
    </div>
  )
}

export default ItemDetailContainer