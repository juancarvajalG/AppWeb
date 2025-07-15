const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes');

const app = express();

app.use(cors()); // Permite conexión con el frontend
app.use(bodyParser.json()); //Leer datos JSON en las peticiones

app.use('/api/notas', notesRoutes); // Todas las rutas empiezan con /api/notas

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});