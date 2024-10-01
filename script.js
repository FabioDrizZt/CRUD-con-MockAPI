const API_URL = 'https://66fb281c8583ac93b40b0268.mockapi.io/productos'

const obtenerProductos = async () => {
  const respuesta = await fetch(API_URL)
  const productos = await respuesta.json()
  mostrarProductos(productos)
}

const mostrarProductos = productos => {
  const lista = document.getElementById('productos-lista')
  lista.innerHTML = ''
  productos.forEach(producto => {
    const productoArticle = document.createElement('article')
    productoArticle.classList.add('producto')
    productoArticle.innerHTML = `
    <h3>${producto.nombre}<h3/>
    <p>Precio: $ ${producto.precio}</p>
    <img src="${producto.imagen}" alt="imagen de ${producto.nombre}"/>
    <p>${producto.descripcion}</p>
    <button onclick="eliminarProducto('${producto.id}')">Eliminar</button>
    `
    lista.appendChild(productoArticle)
  })
}

const eliminarProducto = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  obtenerProductos()
}

const agregarProducto = async (producto) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: producto ? JSON.stringify(producto) : null
  })
  obtenerProductos()
}

const form = document.getElementById('producto-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const nuevoProducto = {
    nombre: document.getElementById('nombre').value,
    precio: document.getElementById('precio').value,
    imagen: document.getElementById('imagen').value,
    descripcion: document.getElementById('descripcion').value
  }
  agregarProducto(nuevoProducto)
  form.reset()
})

obtenerProductos()
