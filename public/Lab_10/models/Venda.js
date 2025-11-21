const mongoose = require('mongoose');

const VendaSchema = new mongoose.Schema({
  carroId: { type: mongoose.Schema.Types.ObjectId, ref: 'Carro', required: true },
  dataVenda: { type: Date, default: Date.now },
  valor: { type: Number, required: true }
});

module.exports = mongoose.model('Venda', VendaSchema);
