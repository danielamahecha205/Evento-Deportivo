const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TablaPosicionesSchema = new Schema({
  equipo_id: { type: Schema.Types.ObjectId, ref: 'Equipo', required: true },
  puntos: { type: Number, required: true },
  partidos_jugados: { type: Number, required: true },
  partidos_ganados: { type: Number, required: true },
  partidos_empatados: { type: Number, required: true },
  partidos_perdidos: { type: Number, required: true },
  goles_a_favor: { type: Number, required: true },
  goles_en_contra: { type: Number, required: true },
  diferencia_goles: { type: Number, required: true }
});

const TablaPosiciones = mongoose.model('TablaPosiciones', TablaPosicionesSchema);
module.exports = TablaPosiciones;
