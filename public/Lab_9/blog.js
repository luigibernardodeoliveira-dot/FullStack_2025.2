// ===============================
// blog.js — versão MongoDB Driver
// ===============================
const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 80;

// 🔹 Conexão com MongoDB
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let postsCollection;

// Função para conectar ao banco
async function conectarMongo() {
  try {
    await client.connect();
    const db = client.db('blogDB');
    postsCollection = db.collection('posts');
    console.log(' Conectado ao MongoDB');
  } catch (err) {
    console.error(' Erro ao conectar ao MongoDB:', err);
  }
}
conectarMongo();

// ===============================
// Configurações do Express
// ===============================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // serve o style.css e HTML

// ===============================
// Rotas
// ===============================

// Página inicial (Projects.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Projects.html'));
});

// Página do blog (dinâmica com EJS)
app.get('/blog', async (req, res) => {
  try {
    const posts = await postsCollection.find().toArray();
    res.render('blog', { posts });
  } catch (err) {
    res.status(500).send('Erro ao carregar os posts.');
  }
});

// Página de cadastro de post
app.get('/cadastrar_post', (req, res) => {
  res.sendFile(path.join(__dirname, 'cadastrar_post.html'));
});

// Salvar novo post
app.post('/salvar_post', async (req, res) => {
  try {
    const { titulo, resumo, conteudo } = req.body;
    await postsCollection.insertOne({ titulo, resumo, conteudo });
    res.redirect('/blog');
  } catch (err) {
    res.status(500).send('Erro ao salvar o post.');
  }
});

// ===============================
// Servidor
// ===============================
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
