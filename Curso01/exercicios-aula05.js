//1. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo(a)!`;
}
console.log(saudacao('Maria'));

//2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
function verificaIdade(idade) {
    return idade >= 18 ? 'É maior de idade.' : 'É menor de idade.';
}
console.log(verificaIdade(20));

//3. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
function ehPalindromo(str) {
    const strReversa = str.split('').reverse().join('');
    return str === strReversa;
}
console.log(ehPalindromo('arara')); // true
console.log(ehPalindromo('javascript')); // false

//4. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
function maiorNumero(num1, num2, num3) {
    let maior = num1;
    if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }
    return maior;
}
console.log(maiorNumero(10, 20, 15)); // 20

//5. Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
const calculaPotencia = (base, expoente) => Math.pow(base, expoente);
console.log(calculaPotencia(2, 3)); // 8