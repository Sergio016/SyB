// backend/app.js
const express = require('express');
const app = express();
const trabajadoresRoutes = require('./routes/trabajadores');  // Importa las rutas de trabajadores

app.use(trabajadoresRoutes);  // Usa las rutas para las solicitudes API

// Inicializar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
