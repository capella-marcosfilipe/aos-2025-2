import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

const frasesInspiradoras = [
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite no seu potencial. Você é mais forte do que pensa.",
  "Transforme seus sonhos em planos e seus planos em realidade.",
  "A única forma de fazer um ótimo trabalho é amar o que você faz.",
  "Não espere por oportunidades, crie-as.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
  "Seja a mudança que você deseja ver no mundo.",
  "A jornada de mil milhas começa com um único passo.",
  "A persistência é o caminho do êxito.",
  "Grandes mentes têm objetivos; outras têm desejos.",
  "Seja gentil, pois cada pessoa que você encontra está travando uma batalha difícil.",
  "Não pare quando estiver cansado. Pare quando tiver terminado.",
  "A vida é 10% do que acontece comigo e 90% de como eu reajo a isso.",
  "A verdadeira felicidade não é algo que se alcança, mas sim algo que se vive.",
  "O único limite para a sua realização é a sua própria mente."
];

app.get('/', (req, res) => {
  res.send('Teste');
});

app.get('/random', (req, res) => {
    res.send({number: Math.floor(Math.random() * 1000000)})
})

app.get('/inspiration', (req, res) => {
    const randomInt = Math.floor(Math.random() * 15)
    const randomInspiration = frasesInspiradoras[randomInt]
    res.send({quote: randomInspiration})
})

app.listen(3000, () => {
    console.log("Escutando na porta 3000!")
}) 

