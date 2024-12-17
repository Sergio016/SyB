const express = require('express');
const client = require('prom-client');
const app = express();

// Inicia la recolección de métricas predeterminadas
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();  // Esto obtiene métricas predeterminadas como uso de memoria, CPU, etc.

// Define una ruta para exponer las métricas
app.get('/metrics', (req, res) => {
  console.log('Métricas solicitadas');
  res.set('Content-Type', client.register.contentType);
  res.end(client.register.metrics());
});

// Define tus rutas de la API
const trabajadoresRoutes = require('./routes/trabajadores');
const blogRoutes = require('./routes/blog');
const localizacionRoutes = require('./routes/localizacion');
const ofertasRoutes = require('./routes/ofertas');
const productosRoutes = require('./routes/productos');

app.use(trabajadoresRoutes);
app.use(blogRoutes);
app.use(localizacionRoutes);
app.use(ofertasRoutes);
app.use(productosRoutes);

// Inicializa el servidor en el puerto 3000
app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
