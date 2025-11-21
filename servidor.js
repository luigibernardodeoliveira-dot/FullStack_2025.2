const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const Usuario = require("./models/Usuario");
const Carro = require("./models/Carro");

const app = express();
const PORT = 80;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public", "Lab_10")));
app.use(bodyParser.urlencoded({ extended: true }));

// ====================== ROTAS =====================

// página inicial
app.get("/", (req, res) => {
    res.render("index");
});

// cadastro usuario
app.get("/cadastro_usuario", (req, res) => {
    res.render("cadastro_usuario");
});

app.post("/cadastro_usuario", async (req, res) => {
    await Usuario.create(req.body);
    res.redirect("/");
});

// login
app.get("/login", (req, res) => {
    res.render("login");
});

// listar carros
app.get("/carros", async (req, res) => {
    const carros = await Carro.find();
    res.render("listar_carros", { carros });
});

// gerenciar carros
app.get("/gerenciar", async (req, res) => {
    const carros = await Carro.find();
    res.render("gerenciar_carros", { carros });
});

// cadastrar carro
app.get("/carros/cadastrar", (req, res) => {
    res.render("cadastrar_carro");
});

app.post("/carros/cadastrar", async (req, res) => {
    await Carro.create(req.body);
    res.redirect("/gerenciar");
});

// atualizar carro
app.get("/carros/atualizar/:id", async (req, res) => {
    const carro = await Carro.findById(req.params.id);
    res.render("atualizar_carro", { carro });
});

app.post("/carros/atualizar/:id", async (req, res) => {
    await Carro.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/gerenciar");
});

// remover carro
app.get("/carros/remover/:id", async (req, res) => {
    const carro = await Carro.findById(req.params.id);
    res.render("remover_carro", { carro });
});

app.post("/carros/remover/:id", async (req, res) => {
    await Carro.findByIdAndDelete(req.params.id);
    res.redirect("/gerenciar");
});

// vender carro
app.get("/carros/vender/:id", async (req, res) => {
    const carro = await Carro.findById(req.params.id);

    if (carro.qtde_disponivel > 0) {
        carro.qtde_disponivel--;
        await carro.save();
    }

    res.redirect("/carros");
});

// iniciar servidor
app.listen(PORT, () => console.log("Servidor rodando na porta 80"));
