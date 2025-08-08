/*************************************************
 * Objetivo: Primeira atividade da disciplina de Programação Back-End, voltada para cálculo de juros compostos
 * Autor: Milla Regina Lopes Vieira
 * Data: 08/08/2025
 * Versão: 1.0
 *************************************************/

// Importe feito para a biblioeca do Node
var readline = require('readline');

// Tratativa de erro
const MESSAGE_ERRO_EMPTY = "ERRO: Não podem existir campos sem preenchimento";
const MESSAGE_ERRO_INVALID = "VALOR INVÁLIDO: Insira apenas números positivos";

// Tratamento dos dados inseridos pelo cliente
var entradaDeDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// Perguntas feitas para o cliente
console.log('**********Seja Bem-vinda à empresa Viva Moda!**********')

// Entrada de dado: nome do cliente
entradaDeDados.question('Insira o seu nome: ', function(nome) {
    let nomeCliente = String(nome)

    if (nomeCliente == '') { //Validando o nome
        console.log(MESSAGE_ERRO_EMPTY);
        entradaDeDados.close();
    } else {

         // Entrada de dado: nome do produto
         entradaDeDados.question('Insira o nome do produto: ', function(produto) {
            let nomeProduto = produto;

            if (nomeProduto == '') { //Validando o produto
                console.log(MESSAGE_ERRO_EMPTY);
                entradaDeDados.close();
            } else {

                // Entrada de dados: capital inicial
                entradaDeDados.question('Insira o valor do capital inicial: ', function(capital) {
                    let capitalInicial = Number(capital);

                    if (capital == '' || capitalInicial < 0 || isNaN(capitalInicial)) { //Validando o valor do capital
                        console.log(MESSAGE_ERRO_INVALID);
                        entradaDeDados.close;
                    }
                });
            }
        });
    }
});

