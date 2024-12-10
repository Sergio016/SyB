document.addEventListener("DOMContentLoaded", function() {
  // Realizamos una solicitud a la API para obtener los datos
  fetch('/api/blog')
      .then(response => response.json())  // Convierte la respuesta a formato JSON
      .then(data => {
          const tbody = document.querySelector('tbody');  // Selecciona el cuerpo de la tabla

          // Verificamos si se recibió algún dato
          if (data.length > 0) {
              data.forEach(blog => {
                  // Creamos una nueva fila de tabla por cada trabajador
                  const row = document.createElement('tr');

                  // Creamos celdas para cada dato del blog
                  const nombreCell = document.createElement('td');
                  nombreCell.textContent = blog.titulo;
                  row.appendChild(nombreCell);

                  const puestoCell = document.createElement('td');
                  puestoCell.textContent = blog.contenido;
                  row.appendChild(puestoCell);

                  const puestoCell = document.createElement('td');
                  puestoCell.textContent = blog.autor_id;
                  row.appendChild(puestoCell);



                  // Añadimos la fila al cuerpo de la tabla
                  tbody.appendChild(row);
              });
          } else {
              // Si no se encuentran trabajadores, mostramos un mensaje
              const row = document.createElement('tr');
              const cell = document.createElement('td');
              cell.colSpan = 2;
              cell.textContent = "No hay blogs disponibles.";
              row.appendChild(cell);
              tbody.appendChild(row);
          }
      })
      .catch(error => {
          console.error("Error al obtener los datos de la API:", error);
      });
});
