const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EncuentroSchema = new Schema({
  equipo_local: { type: Schema.Types.ObjectId, ref: 'Equipo' },
  equipo_visitante: { type: Schema.Types.ObjectId, ref: 'Equipo' },
  fecha: Date,
  arbitro_id: { type: Schema.Types.ObjectId, ref: 'Arbitro' }
});

module.exports = mongoose.model('Encuentro', EncuentroSchema);
