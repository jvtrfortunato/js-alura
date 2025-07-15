// 1 - Crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:
// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.
const livro = {
    titulo: 'O Alquimista',
    autor: 'Paulo Coelho',
    anoPublicacao: 1988,
    genero: 'Ficção'
};
// No final, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.
console.log(livro);

// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
const anoAtual = new Date().getFullYear();
const livro2 = {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicacao: 1949,
    genero: 'Distopia'
};
//Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
livro2.idadePublicacao = anoAtual - livro2.anoPublicacao;
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
const mostrarDetalhes = `Título: ${livro2.titulo}, Autor: ${livro2.autor}, Ano de Publicação: ${livro2.anoPublicacao}, Gênero: ${livro2.genero}, Idade de Publicação: ${livro2.idadePublicacao} anos.`;
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
console.log(mostrarDetalhes);

// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
const livro3 = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    anoPublicacao: 1899,
    genero: 'Romance',
    idadePublicacao: anoAtual - 1899
};
console.log(livro3);

// 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
const livro4 = {
    titulo: 'A Moreninha',
    autor: 'Joaquim Manuel de Macedo',
    anoPublicacao: 1844,
    genero: 'Romance',
    idadePublicacao: anoAtual - 1844,
};
livro4.avaliacao = null;
// No final do arquivo livro.js, adicione uma avaliação ao objeto.
// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
if (livro4.avaliacao === null) {
    livro4.avaliacao = 4.5; // Atribuindo uma avaliação
} else {
    console.log('O livro já possui uma avaliação.');
}

// 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".
const livro5 = {
    titulo: 'Viagem ao Centro da Terra',
    autor: 'Júlio Verne',
    anoPublicacao: 1864,
    genero: 'Ficção Científica',
    idadePublicacao: anoAtual - 1864,
};
livro5.genero = 'Aventura';

// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
const livro6 = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoPublicacao: 1943,
    genero: 'Ficção',
    idadePublicacao: anoAtual - 1943,
    avaliacao: 5.0
};
delete livro6.avaliacao;
console.log(livro6);