// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const trabajadoresRoutes = require('./routes/trabajadores');  // Importa las rutas de trabajadores
const blogRoutes = require('./routes/blog');
const localizacionRoutes = require('./routes/localizacion');
const ofertasRoutes = require('./routes/ofertas');
const productosRoutes = require('./routes/productos');


app.use(bodyParser.json());



app.use(trabajadoresRoutes);  // Usa las rutas para las solicitudes API
app.use(blogRoutes);
app.use(localizacionRoutes);
app.use(blogRoutes);
app.use(ofertasRoutes);
app.use(productosRoutes);


// Inicializar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
