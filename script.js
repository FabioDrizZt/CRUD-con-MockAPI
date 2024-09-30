const API_URL = 'https://66fb281c8583ac93b40b0268.mockapi.io/productos'

const obtenerProductos = async () => {
  const respuesta = await fetch(API_URL)
  const productos = await respuesta.json()
  mostrarProductos(productos)
}

const mostrarProductos = productos => {
  const lista = document.getElementById('productos-lista')

  productos.forEach(producto => {
    const productoArticle = document.createElement('article')
    productoArticle.classList.add('producto')
    productoArticle.innerHTML = `
    <h3>${producto.nombre}<h3/>
    <p>Precio: $ ${producto.precio}</p>
    <img src="${producto.imagen}" alt="imagen de ${producto.nombre}"/>
    <p>${producto.descripcion}</p>
    `
    lista.appendChild(productoArticle)
  })
}

obtenerProductos()
