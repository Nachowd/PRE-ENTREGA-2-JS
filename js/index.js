const PRODUCTOS = [
    { id: 0, nombre: "Placa Madre", descripcion: "terrible placa madre, lo mejor del mercado", precio: 250000},
    { id: 1, nombre: "Disco Duro", descripcion: "el mejor disco que existe", precio: 200000},
    { id: 2, nombre: "Memoria RAM", descripcion: "esta ram tiene mas memoria que un elefante", precio: 100000},
    { id: 3, nombre: "Tarjeta de Video", descripcion: "captura mas resolucion que la vida real", precio: 500000},
];

// Saludo al cliente
function capturarNombre() {
    let nombreUsuario = prompt("como te llamas?");
    if (nombreUsuario) {
        document.getElementById("saludo").textContent = `Aloja, ${nombreUsuario}! Bienvenido a WD COMPUTEICHONS.`;
    } 
}

// Mostrar los productos
function mostrarProductos() {
    let productosContainer = document.getElementById("lista");
    PRODUCTOS.forEach(producto => {
        let productoDiv = document.createElement('div');
        productoDiv.className = 'producto';

        let nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;

        let descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;

        let precio = document.createElement('p');
        precio.textContent = `Precio: $${producto.precio.toFixed(2)}`;

        productoDiv.appendChild(nombre);
        productoDiv.appendChild(descripcion);
        productoDiv.appendChild(precio);

        productosContainer.appendChild(productoDiv);
    });
}

function iniciar() {
    capturarNombre();
    mostrarProductos();
}

iniciar();
