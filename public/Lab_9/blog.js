require("colors");
const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const path = require("path");

const app = express();
const MongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost:27017";

app.use(express.static(__dirname)); // permite acessar o HTML e CSS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../views"));


let db, posts;

// conecta ao banco
MongoClient.connect(uri)
  .then(client => {
    db = client.db("lab9_blog");
    posts = db.collection("posts");
    console.log("✅ Conectado ao MongoDB".green);
  })
  .catch(err => console.log("❌ Erro ao conectar MongoDB:".red, err));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "cadastrar_post.html"));
});

app.post("/cadastrar_post", async (req, res) => {
  try {
    const { titulo, conteudo } = req.body;
    await posts.insertOne({ titulo, conteudo, data: new Date() });
    res.redirect("/blog");
  } catch (error) {
    console.log("Erro ao cadastrar post:", error);
    res.status(500).send("Erro ao cadastrar post");
  }
});

app.get("/blog", async (req, res) => {
  try {
    const listaPosts = await posts.find().toArray();
    res.render("blog", { posts: listaPosts });
  } catch (error) {
    res.status(500).send("Erro ao carregar posts");
  }
});

app.listen(80, () => {
  console.log("🚀 Servidor rodando em http://localhost".blue);
});
