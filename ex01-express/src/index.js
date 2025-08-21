import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Bem-vindo ao Express de Marcos");
});

app.listen(3000, () => {
    console.log("Escutando na porta 3000!")
})