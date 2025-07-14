// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
function mergeArrays(...arrays) {
    return [].concat(...arrays);
}
const armas1 = ['Espada', 'Machado'];
const armas2 = ['Arco', 'Adaga'];
const armas3 = ['Lança', 'Besta'];
const todasArmas = mergeArrays(armas1, armas2, armas3);
console.log(todasArmas); // ['Espada', 'Machado', 'Arco', 'Adaga', 'Lança', 'Besta']

// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const valores = [10, 20, 30, 40, 50];
const somaValores = valores.reduce((acumulador , valor) => acumulador + valor, 0);
console.log(somaValores); // 150

// 3 - Considere duas listas de cores:
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
console.log(coresUnicas); // ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Laranja', 'Roxo']

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
function filtrarPares(numeros) {
    return numeros.filter((numero) => numero % 2 === 0);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarPares(numeros);
console.log(numerosPares); // [2, 4, 6, 8, 10]

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
function filtrarMultiplosDeTres(numeros) {
    return numeros.filter((numero) => numero % 3 === 0 && numero > 5);
}
const numerosParaFiltrar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];
const numerosFiltrados = filtrarMultiplosDeTres(numerosParaFiltrar);
console.log(numerosFiltrados); // [6, 9, 12, 15]

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
function somarNumeros(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
const numerosParaSomar = [1, 2, 3, 4, 5];
const somaTotal = somarNumeros(numerosParaSomar);
console.log(somaTotal); // 15
