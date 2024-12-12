document.addEventListener("DOMContentLoaded", function() {
  // Realizamos una solicitud a la API para obtener los datos
  fetch('/api/productos')
      .then(response => response.json())  // Convierte la respuesta a formato JSON
      .then(data => {
          const tbody = document.querySelector('tbody');  // Selecciona el cuerpo de la tabla

          // Verificamos si se recibió algún dato
          if (data.length > 0) {
              data.forEach(producto => {
                  // Creamos una nueva fila de tabla por cada producto
                  const row = document.createElement('tr');

                  // Creamos celdas para cada dato del productos
                  const nombreCell = document.createElement('td');
                  nombreCell.textContent = producto.nombre;
                  row.appendChild(nombreCell);

                  const descripcionCell = document.createElement('td');
                  descripcionCell.textContent = producto.descripcion;
                  row.appendChild(descripcionCell);

                  const precioCell = document.createElement('td');
                  precioCell.textContent = producto.precio;
                  row.appendChild(precioCell);

                  const stockCell = document.createElement('td');
                  stockCell.textContent = producto.stock;
                  row.appendChild(stockCell);

                  // Añadimos la fila al cuerpo de la tabla
                  tbody.appendChild(row);
              });
          } else {
              // Si no se encuentran productos, mostramos un mensaje
              const row = document.createElement('tr');
              const cell = document.createElement('td');
              cell.colSpan = 4;
              cell.textContent = "No hay productos disponibles.";
              row.appendChild(cell);
              tbody.appendChild(row);
          }
      })
      .catch(error => {
          console.error("Error al obtener los datos de la API:", error);
      });ºº
});
