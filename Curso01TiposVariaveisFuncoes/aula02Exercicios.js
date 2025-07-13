//1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
const arma = 'Espada';
const dano = 50;
const personagemVivo = true;

console.log(typeof arma); // string
console.log(typeof dano); // number
console.log(typeof personagemVivo); // boolean

//2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
const primeiroNome = 'João';
const ultimoNome = 'Ribeiro';

const nomeCompletoComConcat = primeiroNome + ' ' + ultimoNome;
const nomeCompletoComTemplate = `${primeiroNome} ${ultimoNome}`;

console.log(nomeCompletoComConcat); // João Ribeiro
console.log(nomeCompletoComTemplate); // João Ribeiro

//3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
const quantidade = 10;
const armaUsada = 'Espadas';
const frase = `Eu tenho ${quantidade} ${armaUsada}.`;

console.log(frase); // Eu tenho 10 Espadas. 

//4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
let variavel = 'Valor Inicial';
console.log(variavel); // Valor Inicial

variavel = 42;
console.log(variavel); // 42

//5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
// Declaração com var
var variavelVar = 'Valor com var'; 
if (true) {
    var variavelVarDentro = 'Valor dentro do bloco com var';
    console.log(variavelVar); // Valor com var
    console.log(variavelVarDentro); // Valor dentro do bloco com var
}
console.log(variavelVar); // Valor com var
console.log(variavelVarDentro); // Valor dentro do bloco com var (acessível fora do bloco)

// Declaração com let
let variavelLet = 'Valor com let';
if (true) {
    let variavelLetDentro = 'Valor dentro do bloco com let';
    console.log(variavelLet); // Valor com let
    console.log(variavelLetDentro); // Valor dentro do bloco com let
}
// console.log(variavelLetDentro); // Erro: variavelLetDentro is not defined (não acessível fora do bloco)
console.log(variavelLet); // Valor com let (acessível fora do bloco)

//6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

const estaChovendo = true;
if (estaChovendo) {
    console.log('É preciso levar um guarda-chuva.');
} else {
    console.log('Não é preciso levar um guarda-chuva.');
}