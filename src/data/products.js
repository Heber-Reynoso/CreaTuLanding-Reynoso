import remeraImg from "/src/assets/remera.jpg"
import pantalonImg from "/src/assets/pantalon.jpg"
import zapatillasImg from "/src/assets/zapatillas.jpg"

export const products = [
  {
    id: 1,
    title: "Remera React",
    price: 10000,
    category: "remeras",
    image: remeraImg,
    stock: 10,
    description: "Remera de algodón con diseño.",
  },
  {
    id: 2,
    title: "Pantalón JS",
    price: 15000,
    category: "pantalones",
    image: pantalonImg,
    stock: 5,
    description: "Pantalón cómodo ideal para uso diario.",
  },
  {
    id: 3,
    title: "Zapatillas Node",
    price: 30000,
    category: "zapatillas",
    image: zapatillasImg,
    stock: 7,
    description: "Zapatillas deportivas con excelente agarre.",
  }
]