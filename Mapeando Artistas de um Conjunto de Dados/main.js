/*
    EXTRAIR PROPRIEDADES ESPECÍFICAS DE OBJETOS
    (extrair apenas as propriedades que você precisa de um array de objetos).

    Via "import" transportei os dados de "data" para os manipular aqui.

    Declaração do array de objetos de "artists" através de "const artists".

    "artists" é uma constante que contém um array de objeto.

    "map" foi usado para criar um novo array a partir do array "artists".

    A função user => user.artist é uma função de seta (arrow function) 
    que recebe um objeto user e retorna o valor da propriedade artist desse objeto.

    O resultado da execução dessa função para cada elemento do array users
    é um novo array contendo apenas os valores de artist.

    Portanto, o array artists conterá: ["Adele", "Lady Gaga"] e etc.
*/


import { data } from "./data.js";

const artists = data.map(user => user.artist);

console.log(artists);