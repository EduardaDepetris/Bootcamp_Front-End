// TODO: Implemente um dicionário de feitiços pré-definido, simule um JSON:

let dicionario = {
  
  "Lumus": "Cria uma luz na ponta da varinha",
  "Expelliarmus": "	Desarma o oponente, fazendo com que ele solte o que estiver segurando",
  "Expecto Patronum": "Invoca um Patrono, uma manifestacao magica que afasta Dementadores",
  "Wingardium Leviosa": "Faz objetos levitarem",
  "Alohomora": "Destranca portas e objetos trancados"
  
};

// TODO: Adicione uma função buscarFeitico, para buscar a descrição de um feitiço e retornar caso não seja encontado:

function buscarFeitico(feitico) {
  let descricao = dicionario[feitico];
  
  if(descricao === undefined) {
    return "Feitico nao encontrado";
    
  } else {
    return descricao;
  }
  
}



const feitico = gets().trim(); // Removendo espaços extras

print(buscarFeitico(feitico));