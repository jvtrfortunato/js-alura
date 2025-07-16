// 1 - Crie um array de objetos JavaScript representando informações de livros. Cada objeto deve conter pelo menos as seguintes propriedades:
// id (number): identificador do livro.
// titulo (string): título do livro.
// autor (string): nome do autor.
// anoPublicacao (number): ano de publicação do livro.
const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]
// Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.
function encontrarLivroPorId(idLivro) {
    return biblioteca.find((livro) => {
        if (livro.id === idLivro) return livro;
        return null;
    });
}
// Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.
// 📘 Buscar livro com ID existente
const resultado1 = encontrarLivroPorId(2);
if (resultado1) {
  console.log(resultado1);
} else {
  console.log("❌ Livro com ID 2 não encontrado.");
}
// 📕 Buscar livro com ID inexistente
const resultado2 = encontrarLivroPorId(10);
if (resultado2) {
  console.log(resultado2);
} else {
  console.log("❌ Livro com ID 10 não encontrado.");
}

// 2 -  Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:
// id (number): identificador do filme.
// titulo (string): título do filme.
// diretor (string): nome do diretor.
// anoLancamento (number): ano de lançamento do filme.
const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]
// Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.
function filtrarFilmesPorAno(ano) {
    return catalogoFilmes.filter((filme) => filme.anoLancamento === ano);
}
// Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano.
console.log('-------------------------');
console.log('Filtrando filme por ano:');
console.log(filtrarFilmesPorAno(1993));
console.log('Filtrando filme por ano:');
console.log(filtrarFilmesPorAno(2010));

// 3 - Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter pelo menos as seguintes propriedades:
// id (number): identificador do produto.
// nome (string): nome do produto.
// preco (number): preço do produto.
const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]
// Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço.
function filtrarOrdenarProdutosPorPreco(maxPreco) {
    return listaProdutos
    .filter((produto) => produto.preco <= maxPreco)
    .sort((a, b) => a.preco - b.preco);
}
// Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante.
console.log('-------------------------');
console.log('Filtrando produtos por preço máximo:');
console.log(filtrarOrdenarProdutosPorPreco(45));

// 4 - Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos as seguintes propriedades:
// id (number): identificador do animal.
// nome (string): nome do animal.
// especie (string): espécie do animal.
// idade (number): idade do animal.
const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]
// Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array.
function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

// 5 - Crie um array de objetos JavaScript representando informações fictícias de departamentos. Cada objeto deve conter pelo menos as seguintes propriedades:
// id (number): identificador do departamento.
// nome (string): nome do departamento.
// funcionarios (array): array de objetos representando funcionários do departamento.
const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]
// Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do funcionário correspondente em qualquer departamento.
function encontrarFuncionarioPorId(idFuncionario) {
  for (const departamento of departamentos) {
    const funcionario = departamento.funcionarios.find(f => f.id === idFuncionario);
    if (funcionario) {
      return funcionario;
    }
  }
  return 'Funcionário não encontrado.'; // Se não encontrar
}
// Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e imprima no console uma mensagem indicando que o funcionário não foi encontrado.
console.log('-------------------------');
console.log('Encontrando funcionário por id:');
console.log(encontrarFuncionarioPorId(202)); // João
console.log('-------------------------');
console.log('Encontrando funcionário por id:');
console.log(encontrarFuncionarioPorId(999)); // não existe