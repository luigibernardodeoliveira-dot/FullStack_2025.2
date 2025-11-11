const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 80; 


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "..", "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..")));


let usuarios = [];




app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});


app.get("/cadastra", (req, res) => {
  res.sendFile(path.join(__dirname, "Cadastro.html"));
});


app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "Login.html"));
});


app.post("/cadastrar", (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.render("Lab_8_Resposta", { mensagem: "Preencha todos os campos!" });
  }

  const usuarioExiste = usuarios.find(u => u.email === email);
  if (usuarioExiste) {
    return res.render("Lab_8_Resposta", { mensagem: "Usuário já cadastrado!" });
  }

  usuarios.push({ nome, email, senha });
  res.render("Lab_8_Resposta", { mensagem: "Usuário cadastrado com sucesso!" });
});


app.post("/logar", (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    res.render("Lab_8_Resposta", { mensagem: `Bem-vindo, ${usuario.nome}! Login realizado com sucesso.` });
  } else {
    res.render("Lab_8_Resposta", { mensagem: "Usuário ou senha incorretos!" });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
