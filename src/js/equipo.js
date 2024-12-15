document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/trabajadores')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('productos-container');

            if (data.length > 0) {
                data.forEach(trabajadores => {
                    const card = document.createElement('div');
                    card.classList.add('col-md-4');

                    // Construimos la ruta de la imagen usando el nombre del trabajador
                    const imageSrc = `/images/${trabajadores.nombre.toLowerCase().replace(/\s+/g, '-')}.jpg`;

                    card.innerHTML = `
                        <div class="glasses_box">
                            <img src="${imageSrc}" alt="${trabajadores.nombre}" class="img-fluid">
                            <p>ID: ${trabajadores.id}</p>
                            <h3>${trabajadores.nombre}</h3>
                            <p>Puesto: ${trabajadores.puesto}</p>
                        </div>
                    `;

                    container.appendChild(card);
                });
            } else {
                container.innerHTML = `
                    <p class="no-products-message">No hay trabajadores disponibles en este momento.</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos de la API:", error);
        });
});
