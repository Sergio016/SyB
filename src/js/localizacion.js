document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/localizacion')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('productos-container');

            if (data.length > 0) {
                data.forEach(blog => {
                    const card = document.createElement('div');
                    card.classList.add('col-md-4');

                    // Aquí construimos la ruta de la imagen usando el nombre del producto
                    const imageSrc = `/images/${localizacion.nombre.toLowerCase().replace(/\s+/g, '-')}.png`;

                    card.innerHTML = `
                        <div class="glasses_box">
                            <figure>
                                <img src="${imageSrc}" alt="${localizacion.id}">
                            </figure>
                            <h3>$${localizacion.nombre_sucursal}</h3>
                            <p>${localizacion.direccion}</p>
                            <p>${localizacion.ciudad}</p>
                            <p>${localizacion.pais}</p>
                            <p>${localizacion.fecha_apertura}</p>
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
