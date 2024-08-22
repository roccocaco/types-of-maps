/*
MANIPULAR DADOS EM FORMATO JSON
(Suponha que você tenha um JSON de um banco de dados e deseja formatá-lo).

"item" representa cada objeto do array "data".

"{ product: item.product, discountedPrice: item.price * 0.9 }" cria um novo
objeto para cada item, mantendo o nome do produto e claculando o preço com desconto.

Para cada item no array data, a função retorna um novo objeto com duas propriedades: 
product (igual ao nome do produto original) e discountedPrice (que é o preço original multiplicado por 0.9).
*/

import { data } from "./data.js";

const discountedPrices = data.map(item => ({
    product: item.product,
    discountedPrice: item.price * 0.9
}));

console.log(discountedPrices);