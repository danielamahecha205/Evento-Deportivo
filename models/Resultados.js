const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultadoSchema = new Schema({
  encuentro_id: { type: Schema.Types.ObjectId, ref: 'Encuentro', required: true },
  goles_local: { type: Number, required: true },
  goles_visitante: { type: Number, required: true }
});

const Resultado = mongoose.model('Resultado', ResultadoSchema);
module.exports = Resultado;
