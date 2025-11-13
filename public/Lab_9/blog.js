require("colors");
const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const path = require("path");

const app = express();
const MongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost:27017";

// Servir CSS e HTML
app.use("/Lab_9", express.static(path.join(__dirname)));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../views"));

let db, posts;

// Conectar ao banco
MongoClient.connect(uri)
  .then(client => {
    db = client.db("lab9_blog");
    posts = db.collection("posts");
  })
  .catch(err => console.log("Erro ao conectar MongoDB:".red, err));

// Página inicial (formulário)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "cadastrar_post.html"));
});

// Cadastrar post
app.post("/cadastrar_post", async (req, res) => {
  try {
    const { titulo, resumo, conteudo } = req.body;
    await posts.insertOne({ titulo, resumo, conteudo });
    res.redirect("/blog");
  } catch (error) {
    console.error("Erro ao cadastrar post:", error);
    res.status(500).send("Erro ao cadastrar post");
  }
});

// Página do blog
app.get("/blog", async (req, res) => {
  try {
    const listaPosts = await posts.find().toArray();
    res.render("blog", { posts: listaPosts });
  } catch (error) {
    console.error("Erro ao carregar posts:", error);
    res.status(500).send("Erro ao carregar posts");
  }
});

app.listen(80, () => {
  console.log("Servidor rodando em http://localhost".blue);
});
