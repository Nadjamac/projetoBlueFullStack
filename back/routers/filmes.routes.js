const express=require('express');
const router= express.Router()

 filmes :[
    {
      id:Date.now,
      "Nome":"Pantera Negra ",
      "Descricao":"AÇÃO",
      "Ator":"Chadwick Boseman",
      "Imagem" :"https://exame.com/wp-content/uploads/2018/02/panteranegra.jpg",

    },
    {
        id:Date.now,
        "Nome":" Dia de Treinamento",
        "Descricao": "Ação",
       " Ator":"Deise washington",
        "Imagem" :"https://m.media-amazon.com/images/I/51UneNZqczL._AC_.jpg"
    },

      {
        id:Date.now,
        "Nome":"RAGNAROK",
        "Descricao":"Anime",
        "Ator":"Angrobda",
        "Imagem" :"https://cdn.ome.lt/YQCG0_TC-genZ6iQ3lANTLLoNrg=/770x0/smart/uploads/conteudo/fotos/angrboda_god_of_war.jpg",
      },

      {
        id:Date.now,
        "Nome":"Avatar ",
        "Descricao":"drama",
        "Ator":"Zoe Saldana.",
        "Imagem" :"https://1.bp.blogspot.com/_q4619jlzwZY/TPRyvTnpmOI/AAAAAAAAAAU/gWXY1t7Uoqw/s1600/baixarfilmesdownload.jpg",
      }
]

router.get('/',(req,res)=>{
    res.send (filmes)
})

router.get('/filmes',(req,res)=>{
    res.send (filmes)
 })

router.get('/:id',(req,res)=>{
  const idParam = req.params.id;
  const index = filmes.findIndex(filmes => filmes.id == idParam);
  const filme = filmes[index];
  res.send(filme)
})


router.put('/:id', (req, res) => {
  const filmeEdit = req.body;
  const id = req.params.id;
  let filmeCadastrado = filmes.find((filme) => filme.id == id);


  filmecadastrado.nome = filmeEdit.nome;
  filmecadastrado.descricao = fimeEdit.descricao;
  filmecadastrado.ator = fimeEdit.ator;
  filmecadastrado.imagem = filmeEdit.imagem;
  

  res.send({
    message: `filme ${filmeCadastrado.id} atualizada com sucesso`,
    filmes: filmeCadastrado
  })
})

 router.post('/add', (req, res) => {
  const filme = req.body;
  filme.id = Date.now();
  filmes.push(filme);
  res.status(201).send({
    message: 'cadastrado com sucesso',
    data: filme
  });
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = filme.findIndex((filme) => filme.id == id);
  filmes.splice(index, 1);

  res.send({
    message: `filme excluido com sucesso`,
  })
})

 module.exports=router;
