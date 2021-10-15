const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())

app.use(cors());


const filmesRouter = require('./routers/filmes.routes');
app.use('/filmes',filmesRouter)
// 

app.get('/', (req, res) => {
  res.send('WELCOME');
})

app.get('/filmes', (req, res) => {
  res.send('WELCOME');
})
const port = 3001
;

app.listen(port, () => {
  console.log(`O servidor está rodando em (´http://localhost:${port}/`);
})
