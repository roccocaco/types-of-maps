/*
ADICIONE ÍNDICE A CADA ELEMENTO 
(incluir o índice de cada elemento como uma propriedade).

*/

const fruits = ['orange', 'cherry', 'pineapple', 'apple'];

const indexFruits = fruits.map((fruit, index) => ({
    id: index,
    name:fruit
}));

console.log(indexFruits);