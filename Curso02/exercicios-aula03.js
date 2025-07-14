// 1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
for (let fruta of frutas) {
    console.log(fruta);
}

// 2. Crie uma função que receba um array e imprima no console o número do índice e o elemento.
function imprimirElementosComIndice(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Índice: ${i}, Elemento: ${array[i]}`);
    }
}

// 3. Crie uma função que receba um array de números inteiros e retorne a soma dos elementos.
function somarElementos(array) {
    let soma = 0;
    for (let numero of array) {
        soma += numero;
    }
    return soma;
}

// 4. Crie uma função que receba um array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
function encontrarMinMax(array) {
    let menor = array[0];
    let maior = array[0];
    for (let numero of array) {
        if (numero < menor) {
            menor = numero;
        }
        if (numero > maior) {
            maior = numero;
        }
    }
    return `o menor número é ${menor} e o maior número é ${maior}`;
}

// 5. Crie um programa que utilize um laço for para percorrer um array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
for (let numero of numeros) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

// 6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const numerosParaMedia = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
for (let nota of numerosParaMedia) {
    somaDasNotas += nota;
}
const media = somaDasNotas / numerosParaMedia.length;
console.log(`A média das notas é ${media}`);