/*
Descrição
No mundo de Eldoria, os dragões recebem seus nomes com base em seu poder e elemento. Crie um programa que gere um nome de dragão baseado 
em dois atributos informados pelo usuário:

Força do dragão (um número inteiro de 1 a 100)
Elemento (uma string que pode ser "Fogo", "Gelo", "Raio" ou "Terra")
O nome do dragão será formado concatenando uma parte fixa do nome com base na força e no elemento escolhido.

Entrada
O programa recebe:

Um número inteiro representando a força do dragão (de 1 a 100)
Uma string representando o elemento do dragão
Saída
O programa deve imprimir exatamente o nome do dragão, formado da seguinte maneira:

Prefixo:

Se a força for menor que 50, o prefixo será:
"Pyro" para "Fogo"
"Frost" para "Gelo"
"Volt" para "Raio"
"Geo" para "Terra"
Se a força for maior ou igual a 50, o prefixo será:
"Drak" para "Fogo"
"Glacius" para "Gelo"
"Storm" para "Raio"
"Titan" para "Terra"
Sufixo:

"thor" se a força for menor que 50.
"zar" se a força for maior ou igual a 50.
O nome final do dragão será a concatenação do prefixo e do sufixo, sem espaços extras e respeitando a formatação exata.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa 
com esses exemplos e com outros casos possíveis.

Entrada	Saída
30, Fogo	Pyrothor
70, Gelo	Glaciuszar
45, Raio	Voltthor
Atenção: É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.

Os desafios apresentados aqui têm como objetivo principal exercitar os conceitos aprendidos e proporcionar um primeiro contato com lógica 
de programação. Caso não tenha experiência em programação, utilize o template disponível e preencha com os conceitos aprendidos. 
Para resetar o template, basta clicar em “Restart Code”.
*/


// Lê a força do dragão e converte para inteiro
const forca = parseInt(gets().trim());

// Lê o elemento do dragão
const elemento = gets().trim();

// Definição dos prefixos baseados no elemento 
const prefixos = {
    "Fogo": ["Pyro", "Drak"],
    "Gelo": ["Frost", "Glacius"],
    "Raio": ["Volt", "Storm"],
    "Terra": ["Geo", "Titan"]
};

// TODO: Determine o prefixo e sufixo:
let indicePrefixo = (forca < 50) ? 0 : 1;
let sufixo = (forca < 50) ? "thor" : "zar";
let nomeDragao = prefixos[elemento][indicePrefixo] + sufixo;

// TODO: Exiba o nome do dragão
console.log(nomeDragao);