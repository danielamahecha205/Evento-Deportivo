const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipoSchema = new Schema({
  nombre: { type: String, required: true },
  entrenador_id: { type: Schema.Types.ObjectId, ref: 'Entrenador', required: true }
});

const Equipo = mongoose.model('Equipo', EquipoSchema);
module.exports = Equipo;
