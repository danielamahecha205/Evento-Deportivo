const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrenadorSchema = new Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true }
});

const Entrenador = mongoose.model('Entrenador', EntrenadorSchema);
module.exports = Entrenador;
