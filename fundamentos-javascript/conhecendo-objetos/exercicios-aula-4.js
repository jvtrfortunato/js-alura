// 1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.
// Crie um arquivo chamado utilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.
const dados = require('./dados.json');
// Imprima no console o conteúdo importado utilizando a função console.log().
console.log(dados);
// Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.
console.log(dados.produtos[1].nome);
console.log(dados.usuarios[1].nome);

// 2 - Crie um arquivo chamado dados.json contendo informações em formato JSON. O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.
// Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele, utilize o método require para importar o conteúdo do arquivo dados.json.
const dados2 = require('./dados.json');
// Imprima no console o objeto JavaScript resultante da leitura do arquivo.
console.log(dados2);

// 3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:
// id (number): identificador do produto.
// nome (string): nome do produto.
// preco (number): preço do produto.
const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}
// Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.
produtoEmString = JSON.stringify(produto);
console.log(produtoEmString);

//4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.
// Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:
// a) Leia o conteúdo do arquivo animais.json.
const dados3 = require('./animais.json');
console.log(dados3);
// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat. 
const animais = dados3.animais
const novoAnimal = {
  id: 4,
  nome: 'Cachorro',
  tipo: 'Mamífero',
  habitat: 'Urbano'
};
const novaListaDeAnimais = [...animais, novoAnimal];
// d) Modifique o habitat de um animal existente no array de animais.
novaListaDeAnimais[1].habitat = 'Pólo Norte';
// e) Remova um animal do array de animais.
novaListaDeAnimais.splice(3, 1);
// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
const listaAnimaisString = JSON.stringify(novaListaDeAnimais);
// g) Imprima no console o objeto JavaScript resultante das operações.
console.log(novaListaDeAnimais);
// 5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:
// id (number): identificador da pessoa.
// nome (string): nome da pessoa.
// idade (number): idade da pessoa
const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}
// Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.
function copiarObjeto(objeto) {
    return { ...objeto };
}
const pessoaCopia = copiarObjeto(pessoaOriginal);
// Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.
pessoaCopia.nome = 'João';
// Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.
console.log("Original:", pessoaOriginal);
console.log("Cópia:", pessoaCopia);