/*
FORMATAR DATAS
(formatar datas para um formato específico).

"date" é o parâmetro da arrow function, que representa cada elemento array "dates"
ou seja, cada objeto de "date".

"date.toISOString()" converte o objeto "date" em uma string no formato ISO 86601

"ISO 86601" é um padrão internacional para a representação de datas e horas
ele é mantido pela Organização Internacional de Padronização (ISO).

".split('T')" divide esta string em duas partes na letra "T", resultando em um array
com duas strings: a data e a hora. 

Exemplo:

"2030-01-24T00:00:00.000Z".split('T') resulta em ["2030-12-31", "00:00:00.000Z"].

"[0]" acessa o primeiro elemento do array resultante de split('T'), que é a parte da data sem a hora.
*/

const dates = [
    new Date('2030-01-24'),
    new Date('2030-12-31')
];

const formatteDates = dates.map(date => date.toISOString().split('T')[0]);

console.log(formatteDates);