document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/blog')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('productos-container');

            if (data.length > 0) {
                data.forEach(blog => {
                    const card = document.createElement('div');
                    card.classList.add('col-md-4');

                    // Aquí construimos la ruta de la imagen usando el título del blog
                    const imageSrc = `/images/${blog.titulo.toLowerCase().replace(/\s+/g, '-')}.jpg`;

                    // Formatear la fecha en un formato legible
                    const date = new Date(blog.fecha_publicacion);
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    const formattedDate = date.toLocaleDateString('es-ES', options);

                    card.innerHTML = `
                        <div class="glasses_box">
                            <figure>
                                <img src="${imageSrc}" alt="${blog.titulo}">
                            </figure>
                            <h3>${blog.titulo}</h3>
                            <p>${blog.contenido}</p>
                            <p><strong>Autor:</strong> ${blog.autor_nombre}</p>
                            <p><strong>Fecha de publicación:</strong> ${formattedDate}</p> <!-- Fecha formateada -->
                        </div>
                    `;

                    container.appendChild(card);
                });
            } else {
                container.innerHTML = `
                    <p class="no-products-message">No hay blogs disponibles en este momento.</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos de la API:", error);
        });
});
