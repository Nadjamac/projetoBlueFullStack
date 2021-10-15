const urlApi = 'http://localhost:3001/filmes';
const lista = document.getElementById('lista');
let edicao = false;
let idEdicao = 0;

const getFilmes = async () => {
  const response = await fetch(urlApi); 
  const data = await response.json();
  console.log(data);

  data.map((filme )=> {
    lista.insertAdjacentHTML('beforeend', `
    <div class="col-6">
      <div class="card">
        <div class="card-header">
          ${filme.nome}
        </div> 
        <div class="card-body">
          <p class="card-text">Descricao: ${filme.descricao}</p>
          <p class="card-text">Ator: R$${filme.ator}</p>
          <p class="card-text">Imagem: ${filme.imagem}</p>
          <button type="button" class="btn btn-primary" onclick="putVaga(${filme.id})">Editar</button>
          <button type="button" class="btn btn-danger" onclick="deleteVaga(${filme.id})">Excluir</button>
        </div>
      </div>
    </div>
    `)
  })
}
getFilmes();

const submitForm   = async (evento) =>{
evento.preventDefault();

  let Nome = document.getElementById('nome').value;
  let Descricao = document.getElementById('descricao').value;
  let Ator=document.getElementById('ator').value;
  let Imagem = document.getElementById('imagem').value;
  
  
// 
const filme ={
  Nome:nome.value,
  descricao:descricao.value,
  ator:ator.value,
  imagem:imagem.value
  }
console.log(filme)

  if(!edicao) { 
    const request = new Request(`${urlApi}/:add`, {
      method: 'POST',
      body: JSON.stringify(filme),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    // 
    const response = await fetch(request);
    const result = await response.json();


    nome = '';
    descricao = '';
    ator = '';
    imagem = '';

  lista.innerHTML = '';
// 
    if(result) {
      getFilmes();
    }
// 
  } else {    
    
    const request = new Request(`${urlApi}/${idEdicao}`, {
      method: 'PUT',
      body: JSON.stringify(filme),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    const response = await fetch(request);
    const result = await response.json();

    if(resut){
    let edicao = false;
      getFilmes();
    }
  {
    nome.value = '';
    descricao.value='';
    ator.value='';
    imagem.value='';
    

    lista.innerHTML = '';
  }
    if(result) {
      getFilmes();
    }
  }
}
  
const getFilmesById =  async (id) => {
  const response =  await fetch(`${urlApi}/${id}`);
  return filme = response.json();
}
// 
const putFilme = async (id) => {
  edicao = true;
  idEdicao = id;
// 
  // 
  const filme = await getFilmesById(id);
    
    let tituloEl = document.getElementById('titulo');
    let descricaoEl = document.getElementById('descricao');
    let atorEL = document.getElementById('ator').value;
    let imagemEl = document.getElementById('imagem');
    
    tituloEl.value = filme.titulo;
    descricaoEl.value = filme.descricao;
    atorEL.value=filme.descricao;
    imagemEl.value = filme.imagem;
    
  }

const deleteFilme = async (id) => {
  
  const request = new Request(`${urlApi}/${id}`, {
    method: 'DELETE',
  })
  const response = await fetch(request);
  const data = await response.json();
  console.log(data.message);

  lista.innerHTML = '';
  getFilmes();

}
