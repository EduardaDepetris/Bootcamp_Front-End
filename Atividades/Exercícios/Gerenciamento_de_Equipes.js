/*
Descrição
O reino de Eldoria está recrutando heróis e vilões para missões épicas. 
Seu objetivo é criar um programa que gerencie um cadastro de personagens e os organize em duas listas separadas: 
uma para heróis e outra para vilões.

O programa receberá vários cadastros de personagens e, ao final, 
deverá exibir quantos heróis e quantos vilões foram cadastrados, além dos nomes de cada grupo.

Entrada
O programa receberá múltiplas entradas, onde cada personagem será cadastrado com nome e tipo.

O tipo deve ser "Heroi" ou "Vilao". Caso seja inválido, exibir "Tipo invalido" e não adicionar à lista.
O cadastro deve continuar até que o usuário digite "FIM" como nome do personagem.
Saída
Após o cadastro, exibir:

Quantidade de heróis e seus nomes
Quantidade de vilões e seus nomes
Se nenhum personagem foi cadastrado, exibir "Nenhum personagem registrado".

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. 
Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	
Merlin
Heroi
Lorde Sombrio
Vilao
Atena
Heroi
FIM	

Saída
Herois: 2 - Merlin, Atena
Viloes: 1 - Lorde Sombrio

Entrada
Batman
Heroi
Coringa
Vilao
Thanos
Vilao
Superman
Heroi
FIM	

Saida
Herois: 2 - Batman, Superman
Viloes: 2 - Coringa, Thanos

Entrada
Zelda
Guerreiro
Ganondorf
Vilao
FIM	

Saida
Tipo invalido
Herois: 0 -
Viloes: 1 - Ganondorf

Atenção: É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.
*/

// TODO: Crie dois arrays para armazenar herois e viloes:


let herois = [];
let viloes = [];

while (true) {
    let nome = gets(); 

    if (nome === "FIM") {
        break; 
    }

    let tipo = gets();
    
    // TODO: Valide se o tipo é "Heroi" ou "Vilao", utilize condições if/else e acrescente o retorno de 'Tipo invalido':

    if (tipo == "Heroi"){
        herois.push(nome);

    } else if (tipo == "Vilao"){
        viloes.push(nome);

    } else {
        console.log("Tipo invalido");
    }
}

// Exibe os resultados finais

if (herois.length === 0 && viloes.length === 0) {
    print("Nenhum personagem registrado");
} else {
    print(`Herois: ${herois.length} - ${herois.join(", ")}`);
    print(`Viloes: ${viloes.length} - ${viloes.join(", ")}`);
}
