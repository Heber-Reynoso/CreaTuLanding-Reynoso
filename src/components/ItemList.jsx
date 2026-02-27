import Item from "./Item"
import "./ItemList.css"

function ItemList({ productos }) {
  return (
    <div className="item-list">
      {productos.map(prod => (
<Item
  key={prod.id}
  id={prod.id}
  nombre={prod.title}
  precio={prod.price}
  categoria={prod.category}
  image={prod.image}
/>
      ))}
    </div>
  )
}

export default ItemList