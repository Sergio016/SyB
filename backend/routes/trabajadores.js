// backend/routes/trabajadores.js
const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'syb',
    password: '1234',
    port: 5432,
});

// Ruta para obtener todos los trabajadores
router.get('/api/trabajadores', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM trabajadores');
        res.json(result.rows); // Devuelve los datos como JSON
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los trabajadores');
    }
});

module.exports = router;
