const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/torneo_futbol', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());

// Definir rutas aquí

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
