/*
APLICAR CÁLCULOS EM ARRAYS NUMÉRICOS
(aplicar uma operação matemática a todos os elementos de um array).

Primeiro declarei uma constatante e a nomeei de "numbers", atribuí 
para a mesma um array com os seguintes némeros: "32, 23, 10, 1".

"map" é o método de array que cria um novo array.

"number" é um parâmetro da "arrow function", ele não é criado 
explicitamente pelo código, mas sim fornecido pelo método map automaticamente. 

Dentro da função de seta, number é 1, então number * number 
é 1 * 1 que resulta em 1.
*/


const numbers = [32, 23, 10, 1];

const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers);
