/*
Descrição
Você está desenvolvendo um programa para contar quantas vezes cada carta aparece em um deck de um duelista. 
O duelista fornecerá uma lista de cartas como entrada, e o programa deverá contar quantas vezes cada uma aparece,
exibindo o resultado ordenado em ordem alfabética.

Entrada
Uma única linha contendo o nome das cartas separadas por vírgula e espaço (, ).

Saída
A lista das cartas e suas quantidades, ordenada alfabeticamente, no formato: Carta: Quantidade

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. 
Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
Kuriboh, Kuriboh, Kuriboh, Kuriboh	Kuriboh: 4
Mago Verde, Mago Verde, Dragao Branco	Dragao Branco: 1
Mago Verde: 2
Dragao Branco, Dragao Branco, Mago Verde, Kuriboh	Dragao Branco: 2
Kuriboh: 1
Mago Verde: 1
Atenção: É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.

Os desafios apresentados aqui têm como objetivo principal exercitar os conceitos aprendidos e proporcionar 
um primeiro contato com lógica de programação. Caso não tenha experiência em programação, utilize o template disponível 
e preencha com os conceitos aprendidos. Para resetar o template, basta clicar em “Restart Code”.
*/


// Lendo a entrada e transformando em um array
let cartas = gets().split(", ").map(c => c.trim());

let contagem = {};

// Contando as ocorrências das cartas
cartas.forEach(carta => {
    if (contagem[carta]) {
        contagem[carta]++;
    } else {
        contagem[carta] = 1;
    }
});

// TODO: Agora, ordene as cartas alfabeticamente e exiba a saída no formato "Carta: Quantidade"

let cartasOrdenadas = Object.keys(contagem).sort();

cartasOrdenadas.forEach(carta => {
    console.log(`${carta}: ${contagem[carta]}`);
});