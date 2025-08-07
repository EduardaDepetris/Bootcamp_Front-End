// TODO: Implemente aqui uma função verificarEstoque() que recebe três parâmetros {
    
    
function verificarEstoque (nomeItem, quantidadeDisponivel, quantidadeSolicitada){

    if (quantidadeDisponivel < quantidadeSolicitada) {
        return "Estoque insuficiente";

    } else if (quantidadeDisponivel >= quantidadeDisponivel) {
        return "Pedido realizado"

    } else if (isNaN(quantidadeDisponivel) || isNaN(quantidadeSolicitada)) {
        return "Erro: Quantidades devem ser numeros inteiros";

    }

}

// TODO: Crie uma condição if/else para verificar a quantidadeSolicitada e a quantidadeDisponivel:
// TODO: Retorne conforme a descrição.

    
// Lendo as entradas do usuário
let nomeItem = gets();
let quantidadeDisponivel = parseInt(gets());
let quantidadeSolicitada = parseInt(gets());

// TODO: Chame a função e imprima o resultado:

print(verificarEstoque(nomeItem, quantidadeDisponivel, quantidadeSolicitada));