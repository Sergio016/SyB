document.addEventListener("DOMContentLoaded", function() {
  // Realizamos una solicitud a la API para obtener los datos
  fetch('/api/localizacion')
      .then(response => response.json())  // Convierte la respuesta a formato JSON
      .then(data => {
          const tbody = document.querySelector('tbody');  // Selecciona el cuerpo de la tabla

          // Verificamos si se recibió algún dato
          if (data.length > 0) {
              data.forEach(localizacion => {
                  // Creamos una nueva fila de tabla por cada localizacion
                  const row = document.createElement('tr');

                  // Creamos celdas para cada dato de la localizacion
                  const nombreCell = document.createElement('td');
                  nombreCell.textContent = ofertas.nombre_sucursal;
                  row.appendChild(nombreCell);

                  const puestoCell = document.createElement('td');
                  puestoCell.textContent = ofertas.direccion;
                  row.appendChild(puestoCell);

                  const puestoCell = document.createElement('td');
                  puestoCell.textContent = ofertas.ciudad;
                  row.appendChild(puestoCell);

                  const puestoCell = document.createElement('td');
                  puestoCell.textContent = ofertas.pais;
                  row.appendChild(puestoCell);

                  const puestoCell = document.createElement('td');
                  puestoCell.textContent = ofertas.fecha_apertura;
                  row.appendChild(puestoCell);

                  // Añadimos la fila al cuerpo de la tabla
                  tbody.appendChild(row);
              });
          } else {
              // Si no se encuentran productos, mostramos un mensaje
              const row = document.createElement('tr');
              const cell = document.createElement('td');
              cell.colSpan = 2;
              cell.textContent = "No hay localizaciones disponibles.";
              row.appendChild(cell);
              tbody.appendChild(row);
          }
      })
      .catch(error => {
          console.error("Error al obtener los datos de la API:", error);
      });
});
