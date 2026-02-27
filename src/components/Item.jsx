import { Link } from "react-router-dom"
import "./Item.css"

function Item({ id, nombre, precio, categoria, image }) {
  return (
    <div className="item-card">
      <img src={image} alt={nombre} className="item-image" />

      <h3>{nombre}</h3>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${precio}</p>

      <Link to={`/item/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  )
}

export default Item