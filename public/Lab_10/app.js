const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const carrosRoutes = require('./routes/carros');

const app = express();

// Conexão ao MongoDB local (conforme seu endereço)
mongoose.connect('mongodb://localhost:27017/carrosdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB conectado em mongodb://localhost:27017/carrosdb');
});
mongoose.connection.on('error', (err) => {
  console.error('Erro MongoDB:', err);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/carros', carrosRoutes);

// Projects.html (link para Carros)
app.get('/projects.html', (req, res) => {
  res.render('projects');
});

// Redireciona para carros disponíveis
app.get('/', (req, res) => {
  res.redirect('/carros/disponiveis');
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
