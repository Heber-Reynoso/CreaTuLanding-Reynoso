🛒 Proyecto React - Reynoso

Este proyecto fue desarrollado como práctica final del curso de React JS.
Se trata de un E-commerce donde se pueden visualizar productos, filtrarlos por categoría, ver el detalle, agregarlos al carrito y finalizar la compra generando una orden en Firebase.

🚀 Instalación

Clonar el repositorio.

Moverse a la carpeta del proyecto:

cd proyecto-react-reynoso

Instalar dependencias:

npm install

Ejecutar el servidor local:

npm run dev

Es necesario contar con Node.js instalado.

🌐 Funcionalidades principales

📦 Listado dinámico de productos desde Firebase.

🔎 Filtrado por categorías.

🛍️ Detalle de producto con selector de cantidad.

🛒 Carrito con:

Agregar productos

Eliminar productos

Vaciar carrito

Cálculo automático del total

🧾 Checkout con validación de formulario.

📄 Generación de orden en Firestore con ID único.

❌ Manejo de rutas inexistentes.

🗂️ Estructura del proyecto

React Router DOM para la navegación por rutas.

Context API para la gestión global del carrito.

Firebase Firestore como base de datos.

Componentes principales:

ItemListContainer

ItemDetailContainer

CartContainer

Checkout

CartWidget

📚 Librerías utilizadas

react ^18.2.0 → Construcción de la interfaz.

react-dom ^18.2.0 → Renderizado en navegador.

react-router-dom ^6.30.3 → Navegación por rutas.

firebase ^12.10.0 → Base de datos (Firestore) y generación de órdenes.

🔥 Base de datos

La aplicación utiliza Firebase Firestore para:

Obtener productos desde la colección productos

Filtrar por categoría

Generar órdenes en la colección orders

Guardar fecha con serverTimestamp()

🛍️ Flujo de compra

El usuario navega por los productos.

Agrega productos al carrito.

Accede al carrito y revisa el total.

Completa el formulario en el checkout.

Se genera una orden en Firestore.

Se muestra el ID de compra al usuario.

👨‍💻 Autor

Desarrollado por Heber Reynoso 🚀
