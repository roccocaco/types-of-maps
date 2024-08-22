/*
TRANSFORMAR UMA LISTA DE OBJETOS EM UMA TABELA HTML
(gerar um array de linhas de tabela a partir de uma lista de objetos).

Template literals:
São strings delimitadas por acentos graves ` (backticks) ao invés de aspas simples ' ou duplas ".
Elas permitem a inclusão de expressões dentro de uma string utilizando a sintaxe ${}.
"${product.name}" serve para incluir dinamicamente o valor da propriedade "name" 
do objeto "product" dentro de uma string.

Interpolação de Variáveis:
Dentro de uma template literal, você pode incluir expressões JavaScript usando ${}.
A expressão dentro das chaves é avaliada e o resultado é inserido na string.
*/


import { data } from "./data.js";

const tableRows = data.map(product =>
    `<tr><td>${product.name}</td><td>${product.price}</td></tr>`
);

console.log(tableRows);