import { products } from "./products"

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(
        (prod) => prod.id === Number(id)
      )
      resolve(product)
    }, 500)
  })
}