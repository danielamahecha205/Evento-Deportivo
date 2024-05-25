const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeportistaSchema = new Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  posicion: { type: String, required: true },
  equipo_id: { type: Schema.Types.ObjectId, ref: 'Equipo', required: true }
});

const Deportista = mongoose.model('Deportista', DeportistaSchema);
module.exports = Deportista;
