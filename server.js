const express = require('express');
const sql = require('mssql');
const config = require('./dbConfig');

const app = express();
const port = 3000;

app.get('/data', async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query('select Id,Titulo,Bio from peliculas');
    res.json(result.recordset);
    pool.close();
  } catch (err) {
    console.error('Error al realizar el SELECT:', err);
    res.status(500).send('Error al obtener los datos');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

