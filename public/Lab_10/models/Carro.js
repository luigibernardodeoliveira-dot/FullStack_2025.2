const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
  modelo: { type: String, required: true },
  marca: { type: String, required: true },
  ano: { type: Number, required: true },
  preco: { type: Number, required: true },
  vendido: { type: Boolean, default: false },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Carro', CarroSchema);
