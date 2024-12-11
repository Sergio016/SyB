document.addEventListener("DOMContentLoaded", function() {
  // Realizamos una solicitud a la API para obtener los datos
  fetch('/api/ofertas')
      .then(response => response.json())  // Convierte la respuesta a formato JSON
      .then(data => {
          const tbody = document.querySelector('tbody');  // Selecciona el cuerpo de la tabla

          // Verificamos si se recibió algún dato
          if (data.length > 0) {
              data.forEach(ofertas => {
                  // Creamos una nueva fila de tabla por cada oferta
                  const row = document.createElement('tr');

                  // Creamos celdas para cada dato de la oferta
                  const idCell = document.createElement('td');
                  idCell.textContent = ofertas.producto_id;
                  row.appendChild(idCell);

                  const descripcionCell = document.createElement('td');
                  descripcionCell.textContent = ofertas.descripcion;
                  row.appendChild(descripcionCell);

                  const fecha_inicioCell = document.createElement('td');
                  fecha_inicioCell.textContent = ofertas.fecha_inicio;
                  row.appendChild(fecha_inicioCell);

                  const fecha_finCell = document.createElement('td');
                  fecha_finCell.textContent = ofertas.fecha_fin;
                  row.appendChild(fecha_finCell);

                  // Añadimos la fila al cuerpo de la tabla
                  tbody.appendChild(row);
              });
          } else {
              // Si no se encuentran ofertas, mostramos un mensaje
              const row = document.createElement('tr');
              const cell = document.createElement('td');
              cell.colSpan = 2;
              cell.textContent = "No hay ofertas disponibles.";
              row.appendChild(cell);
              tbody.appendChild(row);
          }
      })
      .catch(error => {
          console.error("Error al obtener los datos de la API:", error);
      });
});
