document.addEventListener("DOMContentLoaded", function() {
  // Realizamos una solicitud a la API para obtener los datos
  fetch('/api/trabajadores')
      .then(response => response.json())  // Convierte la respuesta a formato JSON
      .then(data => {
          const tbody = document.querySelector('tbody');  // Selecciona el cuerpo de la tabla

          // Verificamos si se recibió algún dato
          if (data.length > 0) {
              data.forEach(trabajador => {
                  // Creamos una nueva fila de tabla por cada trabajador
                  const row = document.createElement('tr');

                  // Creamos celdas para cada dato del trabajador
                  const nombreCell = document.createElement('td');
                  nombreCell.textContent = trabajador.nombre;
                  row.appendChild(nombreCell);

                  const puestoCell = document.createElement('td');
                  puestoCell.textContent = trabajador.puesto;
                  row.appendChild(puestoCell);

                  // Añadimos la fila al cuerpo de la tabla
                  tbody.appendChild(row);
              });
          } else {
              // Si no se encuentran trabajadores, mostramos un mensaje
              const row = document.createElement('tr');
              const cell = document.createElement('td');
              cell.colSpan = 2;
              cell.textContent = "No hay trabajadores disponibles.";
              row.appendChild(cell);
              tbody.appendChild(row);
          }
      })
      .catch(error => {
          console.error("Error al obtener los datos de la API:", error);
      });
});
