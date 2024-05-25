const mongoose = require('mongoose');
const Deportista = require('../Models/deportistas');
const Equipo = require('../models/equipos');
const Entrenador = require('../models/entrenadores');
const Arbitro = require('../models/arbitros');
const Encuentro = require('../models/encuentros');
const Resultado = require('../models/resultados');
const TablaPosiciones = require('../models/tabla_posiciones');

mongoose.connect('mongodb://localhost:27017/torneo_futbol', { useNewUrlParser: true, useUnifiedTopology: true });

const initData = async () => {
  // Aquí puedes agregar la lógica para inicializar tus datos
};

initData().then(() => {
  console.log('Datos inicializados');
  mongoose.connection.close();
});
