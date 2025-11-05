const express = require("express");
const http = require("http");
const path = require("path");
const colors = require("colors");

const app = express();

// Servir todas as páginas estáticas (HTML, CSS, JS, imagens, etc)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "portifolio"))); // se tiver páginas nessa pasta também

// Rotas específicas (opcional)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/contato", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contato.html"));
});

app.get("/project", (req, res) => {
  res.sendFile(path.join(__dirname, "portifolio", "progetc.html"));
});

// Criar servidor HTTP
const server = http.createServer(app);

// Porta 80 (HTTP padrão)
const PORT = 80;

// Iniciar servidor
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`.rainbow);
});
