document.addEventListener("DOMContentLoaded", function () {
    const btnsFiltro = document.querySelectorAll(".botonFiltro");
    const productos = document.querySelectorAll(".product-item");

    btnsFiltro.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const id = this.id;

            btnsFiltro.forEach(function (btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");

            productos.forEach(function (producto) {
                const productoId = producto.id;

                if (id === "todos" || productoId === id) {
                    producto.style.display = "block";
                } else {
                    producto.style.display = "none";
                }
            });
        });
    });
});
