// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const numeros = [10, 20, 30, 40, 50];
numeros.forEach((numero, indice) => {
    console.log(`Índice: ${indice}, Número: ${numero}`);
});

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
function executaOperacaoEmArray(array, operacao) {
    array.forEach((elemento) => {
        console.log(operacao(elemento));
    })
}
// Exemplo de uso da função executaOperacaoEmArray
const numerosParaOperacao = [1, 2, 3, 4, 5];
executaOperacaoEmArray(numerosParaOperacao, (numero) => numero * 2); // Multiplica cada número por 2

// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
const numeros2 = [5, 10, 15, 20, 25];
const numeroProcurado = 15;
const indice = numeros2.indexOf(numeroProcurado);
if (indice !== -1) {
    console.log(`O número ${numeroProcurado} está presente no índice ${indice}.`);
} else {
    console.log(indice);
}

//4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];
//Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
const alunoProcurado = 'Ana Souza';
const alunoEncontrado = todasAsTurmas.find((nome) => nome === alunoProcurado);
if (alunoEncontrado) {
    console.log(`Aluno encontrado: ${alunoEncontrado}`);
} else {
    console.log('Aluno não encontrado.');
}

// 5 - Considere um array de números inteiros.
const numeros3 = [6, 9, 12, 15, 18, 21];
// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
numeros3.forEach((numero) => console.log(numero * 3));
const numeroEncontrado = numeros3.findIndex((numero) => numero === 18);
if (numeroEncontrado !== -1) {
    console.log(`O número 18 está no índice ${numeroEncontrado}.`);
} else {
    console.log('O número 18 não foi encontrado no array.');
}