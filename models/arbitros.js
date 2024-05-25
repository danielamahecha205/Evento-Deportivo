const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArbitroSchema = new Schema({
  nombre: {type:String} ,
  edad: { type: Number, required: true },
  experiencia: { type: Number, required: true }  // Años de experiencia


});


module.exports = mongoose.model('Arbitro', ArbitroSchema);
