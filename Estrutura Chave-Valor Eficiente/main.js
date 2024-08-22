/*
   TRANSFORMAR EM DADOS DE API
   (quando você obtém dados de uma API, muitas vezes precisa transformá-los antes de usá-los).

   "data" é o array original que contém objetos com as propriedades "artist, song".

   "map" é chamado no "data" passa cada objeto user na função de callback.

   "callback" tranforma o objeto "user" em um novo objeto com duas propriedade "artist, song".

   "winner" é uma string formada pela concatenação (junta as duas) dos valores "user.artist e user.song".

   "const winner" acessa atraves da "const transformedData" os dados na posicao no index [0] para mostrar somente o vencedor.

   */

import { data } from "./data.js";

const transformedData = data.map(user => ({
   winner: `${user.artist}, ${user.song}`
}));

const winner = transformedData[0];

console.log(winner);

