/*
Descrição
Um reino fantástico possui diversos personagens, cada um com atributos específicos que determinam seu nível. 
Sua missão é criar um programa que, com base nos atributos fornecidos, classifique o personagem em uma das seguintes categorias:

Aprendiz: Força menor que 20 e Inteligência menor que 15.
Guerreiro: Força maior ou igual a 20 e Inteligência menor que 15.
Mago: Inteligência maior ou igual a 15 e Força menor que 20.
Arquimago: Inteligência maior ou igual a 15 e Força maior ou igual a 20.
Entrada
O programa deve receber dois números inteiros:

Força (um número inteiro entre 0 e 100)
Inteligência (um número inteiro entre 0 e 100)
Saída
Uma string informando a classificação do personagem.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. 
Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
10 10	Aprendiz
25 10	Guerreiro
15 20	Mago
Atenção: É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.

Os desafios apresentados aqui têm como objetivo principal exercitar os conceitos aprendidos e proporcionar um primeiro contato com lógica de programação. 
Caso não tenha experiência em programação, utilize o template disponível e preencha com os conceitos aprendidos. 
Para resetar o template, basta clicar em “Restart Code”.
*/

let valores = gets().split(" ");  
let forca = parseInt(valores[0]); 
let inteligencia = parseInt(valores[1]); 

let classificacao = "";

// TODO: Crie condições if/else para validação da classificação do personagem:




// Exibe o resultado
print(classificacao.trim());