const express = require('express');
const app = express();
const port = 3000;

// Define la ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola Mundo from CodeSpaces!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
