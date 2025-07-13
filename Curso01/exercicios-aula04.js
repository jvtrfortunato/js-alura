//1. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
const saldo = 1000; // saldo inicial
const deposito = 200; // valor do depósito
const saque = 150; // valor do saque
let operacao = saldo + deposito - saque; // operação de adição e subtração
console.log(`O saldo final é: R$ ${operacao.toFixed(2)}`); // exibe o saldo final com 2 casas decimais

//2. Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
const numero = 10; // valor numérico
const resultado = (numero % 2 === 0) ? 'par' : 'ímpar'; // operador ternário para verificar paridade
console.log(`O número ${numero} é ${resultado}.`); // exibe o resultado

//3. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
const usuarioLogado = true; // usuário está logado
const temPermissaoAdmin = false; // usuário não tem permissão de administrador
if (usuarioLogado && temPermissaoAdmin) {
    console.log('Acesso concedido à funcionalidade de administrador.');
} else {
    console.log('Acesso negado. Você precisa estar logado e ser administrador.');
}

//4. Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
const condicao1 = false; // primeira condição
const condicao2 = true; // segunda condição
const resultadoCondicoes = condicao1 || condicao2; // operador OR para verificar pelo menos uma verdadeira
console.log(`Pelo menos uma condição é verdadeira: ${resultadoCondicoes}.`); // exibe o resultado

//5. Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
const idadeMinima = 18; // idade mínima para comprar ingresso
const idadeUsuario = 20; // idade do usuário
if (idadeUsuario >= idadeMinima) {
    console.log('Usuário pode comprar o ingresso.');
}
else {
    console.log('Usuário não pode comprar o ingresso. É necessário ter pelo menos 18 anos.');
}