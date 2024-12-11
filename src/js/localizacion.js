document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM cargado");

    fetch('/api/productos')
        .then(response => response.json())
        .then(data => {
            console.log("Datos recibidos de la API:", data); // Depuración: verifica los datos en la consola

            const tbody = document.querySelector('tbody'); // Selecciona el <tbody> de la tabla
            if (!tbody) {
                console.error("No se encontró el elemento <tbody> en el DOM.");
                return;
            }

            if (data.length > 0) {
                data.forEach(producto => {
                    const row = document.createElement('tr'); // Crea una nueva fila

                    // Crea celdas y añade los datos
                    const nombreCell = document.createElement('td');
                    nombreCell.textContent = producto.nombre;
                    row.appendChild(nombreCell);

                    const descripcionCell = document.createElement('td');
                    descripcionCell.textContent = producto.descripcion;
                    row.appendChild(descripcionCell);

                    const precioCell = document.createElement('td');
                    precioCell.textContent = `$${parseFloat(producto.precio).toFixed(2)}`;
                    row.appendChild(precioCell);

                    const stockCell = document.createElement('td');
                    stockCell.textContent = producto.stock;
                    row.appendChild(stockCell);

                    tbody.appendChild(row); // Añade la fila al <tbody>
                });
            } else {
                // Muestra un mensaje si no hay productos
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.colSpan = 4; // Cubre todas las columnas
                cell.textContent = "No hay productos disponibles.";
                row.appendChild(cell);
                tbody.appendChild(row);
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos de la API:", error);
        });
});
