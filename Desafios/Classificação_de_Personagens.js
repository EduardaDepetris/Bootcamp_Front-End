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

*/

let valores = gets().split(" ");  
let forca = parseInt(valores[0]); 
let inteligencia = parseInt(valores[1]); 

let classificacao = "";

// TODO: Crie condições if/else para validação da classificação do personagem:

if (forca > 0 && forca <= 15  && inteligencia > 0 && inteligencia < 15){
    classificacao = "Aprendiz";
    
}
if (forca >= 20 && inteligencia > 0 && inteligencia < 15){
    classificacao = "Guerreiro";
    
}
if (forca > 0 && forca < 20 && inteligencia >= 15){
    classificacao = "Mago";
    
}
if (forca >= 20 && inteligencia >= 15 ){
    classificacao = "Arquimago";
    
}


// Exibe o resultado
print(classificacao.trim());