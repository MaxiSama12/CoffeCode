const shopContent = document.getElementById("shop-content");
const verCarrito = document.getElementById("ver-carrito");
const canvasContainer = document.getElementById("canvas-container");
const productoCarrito = document.getElementById("producto-carrito");
const botonAgregar = document.querySelector(".botonAgregar");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let productos = JSON.parse(localStorage.getItem("productos")) || [];

const cartaProducto = document.getElementById("cartas");

cartaProducto.addEventListener("click", (e) => {
  if (e.target.classList.contains("botonAgregar")) {
    const id = e.target.dataset.id;

    const productoDeseado = productos.find((producto) => producto.codigo === id);

    const repeat = carrito.some((repeatProducto) => repeatProducto.codigo === id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.codigo === id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        codigo: productoDeseado.codigo,
        img: productoDeseado.url,
        nombre: productoDeseado.nombre,
        precio: productoDeseado.precio,
        cantidad: 1,
      });

      saveLocal();
    }
    pintarCarrito();
  }
});

// set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item
JSON.parse(localStorage.getItem("carrito"));

const pintarCarrito = () => {
  canvasContainer.innerHTML = "";
  carrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "productoCarrito";
    carritoContent.innerHTML = `
    <img src="${producto.img}" class="imgProducto container">
    <div class="infoCarrito">
      <h2>${producto.nombre}</h2>
      <span class="restar"> - </span>
      <span class="cantidadCarrito">${producto.cantidad}</span>
      <span class="sumar"> + </span>
      <p>$${producto.precio}</p>
    </div>
    <button class="botonEliminar" id="eliminar">Eliminar</button>
    `;

    canvasContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
      if (producto.cantidad !== 1) {
        producto.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      if (producto.cantidad < 8) {
        producto.cantidad++;
      }
      saveLocal();
      pintarCarrito();
    });

    let eliminar = carritoContent.querySelector("#eliminar");
    eliminar.addEventListener("click", () => {
      eliminarProducto(producto.codigo);
    });
  });

  const total = carrito.reduce(
    (acc, el) => acc + el.precio * el.cantidad, 0
  );

  const totalBuying = document.createElement("div");
  totalBuying.className = "totalContent";
  totalBuying.innerHTML = `<p>Precio Total: $${total}</p>`;
  canvasContainer.append(totalBuying);

  const finalizarCompra = document.createElement("button");
  finalizarCompra.className = "finalizarCompra py-3";
  finalizarCompra.innerHTML = `<a href="./error404.html">Finalizar Compra</a>`;
  totalBuying.append(finalizarCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (codigo) => {
  const foundProductIndex = carrito.findIndex(
    (element) => element.codigo === codigo
  );

  if (foundProductIndex !== -1) {
    carrito.splice(foundProductIndex, 1);
    saveLocal();
    pintarCarrito();
  }
};
