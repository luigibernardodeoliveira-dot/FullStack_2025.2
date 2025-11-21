const express = require('express');
const router = express.Router();
const Carro = require('../models/Carro');
const Venda = require('../models/Venda');

// Página: Carros disponíveis
router.get('/disponiveis', async (req, res) => {
  const carros = await Carro.find({ vendido: false }).sort({ criadoEm: -1 });
  res.render('carrosDisponiveis', { carros });
});

// Página: Cadastro de carro (GET + POST)
router.get('/cadastro', (req, res) => {
  res.render('cadastroCarro');
});

router.post('/cadastro', async (req, res) => {
  const { marca, modelo, ano, preco } = req.body;
  if (!marca || !modelo || !ano || !preco) {
    return res.status(400).send('Campos obrigatórios ausentes.');
  }
  await Carro.create({ marca, modelo, ano: Number(ano), preco: Number(preco) });
  res.redirect('/carros/disponiveis');
});

// Página: Venda de carro (GET + POST)
router.get('/venda/:id', async (req, res) => {
  const carro = await Carro.findById(req.params.id);
  if (!carro) return res.status(404).send('Carro não encontrado');
  res.render('vendaCarro', { carro });
});

router.post('/venda/:id', async (req, res) => {
  const { valor } = req.body;
  const carro = await Carro.findById(req.params.id);
  if (!carro) return res.status(404).send('Carro não encontrado');

  await Venda.create({ carroId: carro._id, valor: Number(valor) });
  await Carro.findByIdAndUpdate(carro._id, { vendido: true });

  res.redirect('/carros/disponiveis');
});

// Página: Remoção de carro (lista e permite remover)
router.get('/remocao', async (req, res) => {
  const carros = await Carro.find({}).sort({ criadoEm: -1 });
  res.render('remocaoCarro', { carros });
});

router.delete('/remover/:id', async (req, res) => {
  await Carro.findByIdAndDelete(req.params.id);
  res.redirect('/carros/remocao');
});

// Página: Edição de carro (GET carrega dados, POST salva)
router.get('/editar/:id', async (req, res) => {
  const carro = await Carro.findById(req.params.id);
  if (!carro) return res.status(404).send('Carro não encontrado');
  res.render('edicaoCarro', { carro });
});

router.post('/editar/:id', async (req, res) => {
  const { marca, modelo, ano, preco } = req.body;

  // Regra: Se algum campo vier igual a "zero", mantém o valor antigo
  const carroAtual = await Carro.findById(req.params.id);
  if (!carroAtual) return res.status(404).send('Carro não encontrado');

  const dadosAtualizados = {
    marca: marca === '0' ? carroAtual.marca : marca,
    modelo: modelo === '0' ? carroAtual.modelo : modelo,
    ano: ano === '0' ? carroAtual.ano : Number(ano),
    preco: preco === '0' ? carroAtual.preco : Number(preco)
  };

  await Carro.findByIdAndUpdate(req.params.id, dadosAtualizados);
  res.redirect('/carros/disponiveis');
});

// Utilitário: Mostrar dados (Carros e Vendas)
router.get('/dados', async (req, res) => {
  const carros = await Carro.find({});
  const vendas = await Venda.find({}).populate('carroId');
  res.json({ carros, vendas });
});

module.exports = router;
