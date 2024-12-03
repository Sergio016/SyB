// URL de la API
const API_URL = "/api/trabajadores"; 

// Función para obtener los datos de la API
async function fetchTrabajadores() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los datos");
    const trabajadores = await response.json();
    renderTrabajadores(trabajadores);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Función para renderizar los datos en la tabla
function renderTrabajadores(trabajadores) {
  const tableBody = document.querySelector("#trabajadores-table tbody");
  tableBody.innerHTML = ""; 

  trabajadores.forEach((trabajador) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${trabajador.id}</td>
      <td>${trabajador.nombre}</td>
      <td>${trabajador.puesto}</td>
      <td>${trabajador.fecha_registro}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", fetchTrabajadores);
