# 🛒 CreaTuLanding - Reynoso

Este proyecto fue desarrollado como entrega final del curso de React JS.  
Se trata de un **E-commerce** que permite visualizar productos, filtrarlos por categoría, ver su detalle, agregarlos al carrito y generar una orden de compra en Firebase.

---

## 📦 Instalación ⚙️

1. Clonar el repositorio.
2. Moverse a la carpeta del proyecto:


cd CreaTuLanding-Reynoso


3. Instalar dependencias:


npm install


4. Ejecutar el servidor local:


npm run dev


> Es necesario contar con Node.js instalado.

---

## 🌐 Funcionalidades principales

- 📦 Visualización de productos desde Firebase.
- 🔎 Filtrado por categorías.
- 🛍️ Vista de detalle de cada producto.
- 🛒 Agregado de productos al carrito.
- ❌ Eliminación individual de productos.
- 🧹 Vaciado completo del carrito.
- 💰 Cálculo automático del total.
- 🧾 Formulario de checkout con validación.
- 📄 Generación de orden en Firestore con ID único.
- 🚫 Manejo de rutas inexistentes.

---

## 🗂️ Estructura del proyecto

- **React Router DOM** para la navegación por rutas.
- **Context API** para la gestión global del carrito.
- **Firebase Firestore** como base de datos.
- Componentes principales:
  - ItemListContainer
  - ItemDetailContainer
  - CartContainer
  - Checkout
  - CartWidget

---

## 📚 Librerías utilizadas

- **react** ^18.2.0  
- **react-dom** ^18.2.0  
- **react-router-dom** ^6.30.3  
- **firebase** ^12.10.0  

---

## 🔥 Base de datos

Se utiliza **Firebase Firestore** para:

- Obtener productos desde la colección `productos`.
- Filtrar productos por categoría.
- Generar órdenes en la colección `orders`.
- Guardar fecha mediante `serverTimestamp()`.

---

## 🛍️ Flujo de compra

1. El usuario navega por los productos.
2. Selecciona un producto y lo agrega al carrito.
3. Accede al carrito para revisar su compra.
4. Completa el formulario en el checkout.
5. Se genera una orden en Firestore.
6. Se muestra el ID de la orden generada.

---

## 👨‍💻 Desarrollado por

Heber Reynoso 🚀
