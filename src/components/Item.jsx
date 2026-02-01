function Item({ item }) {
  return (
    <li>
      {item.title} - ${item.price}
    </li>
  )
}

export default Item