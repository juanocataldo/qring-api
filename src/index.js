const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/qring', (req, res) => {
  res.send('¡Te estan tocando el timbre!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
