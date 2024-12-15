document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/ofertas')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('productos-container');

            if (data.length > 0) {
                data.forEach(ofertas => {
                    const card = document.createElement('div');
                    card.classList.add('col-md-4');

                    // Aquí construimos la ruta de la imagen usando el nombre del producto
                    const imageSrc = `/images/${ofertas.producto_nombre.toLowerCase().replace(/\s+/g, '-')}.jpg`;

                    // Formateamos las fechas
                    const formatDate = (dateString) => {
                        const date = new Date(dateString);
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
                        const year = date.getFullYear();
                        return `${day}/${month}/${year}`;
                    };

                    const fechaInicio = formatDate(ofertas.fecha_inicio);
                    const fechaFin = formatDate(ofertas.fecha_fin);

                    card.innerHTML = `
                        <div class="glasses_box">
                            <figure>
                                <img src="${imageSrc}" alt="${ofertas.producto_nombre}">
                            </figure>
                            <h3>${ofertas.producto_nombre}</h3>
                            <p>${ofertas.descripcion}</p>
                            <p>Descuento: ${ofertas.descuento}%</p>
                            <span>Fecha de inicio: ${fechaInicio}</span><br>
                            <span>Fecha de fin: ${fechaFin}</span>
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
