/*
FILTRAR E MAPEAR AO MESMO TEMPO
(aplicar um filtro antes de mapear os dados).

Filtragem("filter"):
"filter" itera sobre cada objeto no array "data".

A função de callback verifica se a "age" da "person" é
maior ou igual (>=) a 30.

O resultado é um novo array contendo apenas os objetos que atendem 
à condição (idade >= 30).

Mapeamento("map"):
"map" é então chamado no array de filtragem.
A função de callback exrai a propriedade "name" de cada "person".
O resultado é um novo array contendo apenas os nomes das pessoas 
que passaram pelo filtro.

"console.log(adults)" imprime o array "adults", mostrandi os nomes 
das pessoas que têm 30 anos ou mais.

ncadeamento de métodos: Primeiro, o array é filtrado para incluir apenas 
os adultos (idade >= 21), e em seguida, o map extrai os nomes desses adultos.
*/


import { data } from "./data.js";

const adults = data
.filter(person => person.age >= 30)
.map(person => person.name);

console.log(adults);