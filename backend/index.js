const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");

app.use(cors());
app.use(express.json());

// Endpoint para cadastrar produto
app.post("/cadprod", (req, res) => {
  const { nome, preco } = req.body;
  const sql = "INSERT INTO Produto (nome, preco) VALUES (?,?)";
  db.query(sql, [nome, preco], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao incluir produto");
    }
    res.send("Produto incluído com sucesso");
  });
});

// Endpoint para listar produtos
app.get("/listprod", (req, res) => {
  db.query("SELECT * FROM Produto", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao listar produtos");
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});
