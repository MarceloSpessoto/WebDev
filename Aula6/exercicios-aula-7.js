// Use `console.log(variavel)` para verificar suas respostas no Console
// do Inspetor da Web do navegador.

// 1. Gere uma lista contendo apenas os números pares (filter)
const numeros = [1, 4, 10, 23, 26, 27, 29, 30, 311, 320, 4490]
const pares = numeros.filter(numero => numero%2 == 0)
console.log(pares)

// 2. Faça uma lista que possua apenas frutas com quatro letras (filter)
// Dica: você pode usar 'string'.length para verificar a quantidade de
// caracteres de uma string.
const frutas = [
  'maçã', 'banana', 'pera', 'uva', 'coco', 'caqui', 'kiwi', 'acerola'
]
const quatroLetras = frutas.filter(fruta => fruta.length == 4)
console.log(quatroLetras)

// 3. Maiusculize os nomes dados (map)
// Dica: Maiusculizar é escrever cada palavra com a inicial em
// maiúsculo. Você pode conferir todos os métodos de String em:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
const nomes = ['cecília', 'roberto', 'bruna', 'Osvaldo', 'Carlos']
const maiusc = nomes.map(nome => nome.charAt(0).toUpperCase().concat(nome.substring(1)))
console.log(maiusc)

// 4. Concatene os nomes e sobrenomes da lista (map)
const nomesESobrenomes = [
  ['Fernanda', 'Montenegro'],
  ['Lázaro', 'Ramos'],
  ['Heloísa', 'Périssé'],
  ['Daniel', 'Furlan'],
  ['Adriana', 'Esteves'],
]

const nomecompleto = nomesESobrenomes.map(lista => lista[0].concat(" ", lista[1]))
console.log(nomecompleto)

// 5. Calcule a média das notas (reduce)
const notas = [7, 5, 4, 3, 8.5]
let valorInicial = 0;
media = notas.reduce((acu, atual) => acu+atual, valorInicial)
media /= notas.length
console.log(media)

// 6. Calcule a média ponderada das notas (reduce)
// Cada item da lista é composto por uma sublista com a nota (na
// primeira posição) e o peso (na segunda posição).

const notasComPeso = [[7, 2], [5, 1], [4, 2], [3, 1], [8.5, 2]]
valorInicial = [0,0]
mediaPond = notasComPeso.reduce(((acu, atual) => [acu[0] + atual[0]*atual[1], acu[1] + atual[1]]), valorInicial)
res = mediaPond[0]/mediaPond[1]
console.log(res)

// 7. (Extra) Refaça o exercício 6 tirando as duas menores notas. Dica:
// Lembre dos métodos sort e slice.
novaNotas = notasComPeso.sort((nota1, nota2) => nota1[0]*nota1[1] - nota2[0]*nota2[1])
novaNotas = novaNotas.slice(2)
valorInicial = [0,0]
mediaPond = novaNotas.reduce(((acu, atual) => [acu[0] + atual[0]*atual[1], acu[1] + atual[1]]), valorInicial)
console.log(mediaPond)
res = mediaPond[0]/mediaPond[1]
console.log(res)
