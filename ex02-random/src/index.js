import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

const frasesDeTaylorSwift = [
  "E você tem um sorriso que poderia iluminar a cidade inteira. (You Belong With Me, Fearless)",
  "Este é um estado de graça, esta é a luta que vale a pena. (State of Grace, Red)",
  "Para os bravos e os audaciosos, os belos e os feridos. (The Lucky One, Red)",
  "Eu tenho passado por um momento difícil, mas ainda estou aqui. (It's Nice to Have a Friend, Lover)",
  "É melhor acreditar que ainda estou 'bejeweled' quando entro na sala, ainda consigo fazer o lugar inteiro brilhar. (Bejeweled, Midnights)",
  "A água encheu meus pulmões, eu gritei tão alto mas ninguém ouviu nada... Mas eu fiquei mais limpa. (Clean, 1989)",
  "Eu uma vez acreditei que o amor seria vermelho vivo... mas é dourado como o amanhecer. (Daylight, Lover)",
  "A velha Taylor não pode vir ao telefone agora. Por quê? Oh, porque ela está morta. (Look What You Made Me Do, Reputation)",
  "Os que te odeiam vão te odiar, odiar, odiar... mas eu vou simplesmente ignorar. (Shake It Off, 1989)",
  "Você é a melhor coisa que já foi minha. (Mine, Speak Now)",
  "Nós seremos heróis de nossa própria história. (Long Live, Speak Now)",
  "Você tem a sua vida inteira pela frente, então não a desperdice. (Never Grow Up, Speak Now)",
  "Eu seria um líder destemido... eu seria um rei. (I Did Something Bad, Reputation)",
  "E quando eu me sentia como um casaco velho debaixo da cama de alguém, você me vestiu e disse que eu era o seu favorito. (champagne problems, evermore)",
  "A vida é uma jornada. Você só precisa encontrar a pessoa que te faz feliz. (The Lucky One, Red)"
];

app.get('/', (req, res) => {
  res.send('Teste');
});

app.get('/random', (req, res) => {
    res.send({number: Math.floor(Math.random() * 1000000)})
})

app.get('/inspiration', (req, res) => {
    const randomInt = Math.floor(Math.random() * 15)
    const randomInspiration = frasesDeTaylorSwift[randomInt]
    res.send({quote: randomInspiration})
})

app.listen(3000, () => {
    console.log("Escutando na porta 3000!")
}) 

