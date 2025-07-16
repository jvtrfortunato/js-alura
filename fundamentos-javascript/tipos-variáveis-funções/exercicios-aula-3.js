//1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
const frase = 'Breath of the Wild!';
console.log(frase.length); // 20
console.log(frase.toUpperCase()); // BREATH OF THE WILD!

//2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
const variavelNull = null;
let variavelUndefined;
console.log(variavelNull); // null
console.log(variavelUndefined); // undefined

//3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const numero = 42;
const texto = 'O número é';
const booleano = true;
console.log(`É ${booleano} que ${texto} ${numero}.`); // É true que O número é 42.

//4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
const numeroParaConverter = 100;
const stringParaConverter = '200';
const numeroComoString = String(numeroParaConverter);
const stringComoNumero = Number(stringParaConverter);
console.log(typeof numeroComoString); // string
console.log(typeof stringComoNumero); // number

//5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
const textoManipulado = 'Breath of the Wild!';
console.log(textoManipulado.toLowerCase()); // breath of the wild!
console.log(textoManipulado.slice(0, 6)); // Breath
console.log(textoManipulado.replace('Wild', 'World')); // Breath of the World!