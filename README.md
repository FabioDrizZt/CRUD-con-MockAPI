# CRUD de Productos con JavaScript Vanilla y Mock API

Este proyecto es una aplicación básica para gestionar productos (crear, leer, eliminar) utilizando JavaScript Vanilla y una Mock API.

## Características

- Obtener productos desde una API simulada.
- Mostrar los productos en el DOM.
- Agregar nuevos productos mediante un formulario.
- Eliminar productos existentes.

## Requisitos

- Conexión a internet (para la Mock API).
- Navegador con soporte para ES6 (JavaScript moderno).

## Tecnologías Utilizadas

- **HTML**: Estructura de la aplicación.
- **CSS**: Estilos básicos para la interfaz.
- **JavaScript**: Lógica para interactuar con la Mock API y manipulación del DOM.
- **MockAPI**: API simulada para almacenar y gestionar los productos. La API utilizada es [MockAPI](https://mockapi.io/).

## Instrucciones de Uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/FabioDrizZt/CRUD-con-MockAPI.git
   ```

2. Abre el archivo `index.html` en tu navegador.

3. La página mostrará una lista de productos obtenidos de la Mock API.

4. Para agregar un producto:
   - Llena el formulario con el nombre, precio, imagen y descripción.
   - Haz clic en **Agregar Producto**.
   
5. Para eliminar un producto, haz clic en el botón **Eliminar** debajo del producto correspondiente.

## Estructura del Proyecto

- `index.html`: Página principal con el formulario y la lista de productos.
- `style.css`: Estilos básicos para el proyecto.
- `script.js`: Lógica de la aplicación para gestionar productos.
- `productos.json`: Datos de ejemplo para la API Mock.

## Endpoints de la MockAPI

### Obtener todos los productos (GET)
```http
GET https://66fb281c8583ac93b40b0268.mockapi.io/productos
```

### Obtener un producto específico (GET)
```http
GET https://66fb281c8583ac93b40b0268.mockapi.io/productos/{id}
```

### Crear un nuevo producto (POST)
```http
POST https://66fb281c8583ac93b40b0268.mockapi.io/productos
Content-Type: application/json

{
  "nombre": "Producto ejemplo",
  "precio": "100",
  "imagen": "https://url-a-la-imagen.com",
  "descripcion": "Descripción del producto"
}
```

### Eliminar un producto (DELETE)
```http
DELETE https://66fb281c8583ac93b40b0268.mockapi.io/productos/{id}
```

## Contribución

Si deseas contribuir a este proyecto, puedes seguir estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama con tus cambios:
   ```bash
   git checkout -b mi-rama
   ```
3. Realiza un commit con tus cambios:
   ```bash
   git commit -m "Agrega mi funcionalidad"
   ```
4. Haz push a la rama:
   ```bash
   git push origin mi-rama
   ```
5. Abre un Pull Request.
