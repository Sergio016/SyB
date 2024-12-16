document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/productos')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('productos-container');

            if (data.length > 0) {
                data.forEach(producto => {
                    const card = document.createElement('div');
                    card.classList.add('col-md-4');

                    // Aquí construimos la ruta de la imagen usando el nombre del producto
                    const imageSrc = `/images/${producto.nombre.toLowerCase().replace(/\s+/g, '-')}.jpg`;

                    card.innerHTML = `
                        <div class="glasses_box">
                            <figure>
                                <img src="${imageSrc}" alt="${producto.nombre}">
                            </figure>
                            <h3>$${producto.precio}</h3>
                            <p>${producto.descripcion}</p>
                            <span>Stock: ${producto.stock} unidades</span>
                        </div>
                    `;

                    container.appendChild(card);
                });
            } else {
                container.innerHTML = `
                    <p class="no-products-message">No hay productos disponibles en este momento.</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos de la API:", error);
        });
});
