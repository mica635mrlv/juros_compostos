/*************************************************
 * Objetivo: Primeira atividade da disciplina de Programação Back-End, voltada para cálculo de juros compostos
 * Autor: Milla Regina Lopes Vieira
 * Data: 08/08/2025
 * Versão: 1.0
 *************************************************/

// Importe feito para a biblioeca do Node
var readline = require('readline');

// Tratamento dos dados inseridos pelo cliente
var entradaDeDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// Perguntas feitas para o cliente
console.log('**********Seja Bem-vinda à empresa Viva Moda**********')
entradaDeDados.question('Insira o seu nome: ', function(nome) {
    let nomeCliente = String(nome)
});

