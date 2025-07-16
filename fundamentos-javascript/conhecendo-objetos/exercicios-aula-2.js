// 1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:
// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.
const pessoa = {
    nome: 'João',
    idade: 20,
    solteiro: false,
    hobbies: ['jogar', 'ler', 'assistir']
}
// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
//No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.
// function mostrarInfoPessoa(objPessoa) {
//     for(let chave in objPessoa) {
//         console.log(`Propriedade: ${chave}`);
//         console.log(`Valor: ${objPessoa[chave]}`);
//         console.log(`Tipo: ${typeof objPessoa[chave]}`);
//         console.log('--------------------------');
//     }
// }
// mostrarInfoPessoa(pessoa);

// 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:
// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.
pessoa.endereco = {
    rua: 'Rua das Flores',
    cidade: 'Londrina',
    estado: 'Paraná'
}
// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
function mostrarInfoPessoa(objPessoa) {
    for (let chave in objPessoa) {
        const valor = objPessoa[chave];
        
        if (typeof valor === 'object' && !Array.isArray(valor)) {
            console.log(`Propriedade: ${chave} (objeto)`);
            for (let subChave in valor) {
                console.log(`  Subpropriedade: ${subChave}`);
                console.log(`  Valor: ${valor[subChave]}`);
                console.log(`  Tipo: ${typeof valor[subChave]}`);
            }
        } else {
            console.log(`Propriedade: ${chave}`);
            console.log(`Valor: ${valor}`);
            console.log(`Tipo: ${typeof valor}`);
        }
        
        console.log('--------------------------');
    }
}
mostrarInfoPessoa(pessoa);

// 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:
// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.
// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.
const pessoas = [
    {
    nome: 'João',
    idade: 26,
    cidade: 'Londrina'
    },
    {
    nome: 'Mari',
    idade: 25,
    cidade: 'Londrina'
    },
    {
    nome: 'Zoe',
    idade: 3,
    cidade: 'Pirapozinho'
    }
]
// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.
function mostrarListaPessoas(lista) {
    for (let i = 0; i < lista.length; i++) {
        const pessoa = lista[i];
        console.log(`Pessoa ${i + 1}:`);
        console.log(`Nome: ${pessoa.nome}`);
        console.log(`Idade: ${pessoa.idade}`);
        console.log(`Cidade: ${pessoa.cidade}`);
        console.log('----------------------');
    }
}
// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.
pessoas.push({
    nome: 'Chico',
    idade: 15,
    cidade: 'Presidente Prudente'
});
// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.
mostrarListaPessoas(pessoas);
// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.
function filtrarPorCidade(lista, cidade) {
    return lista.filter(pessoa => pessoa.cidade === cidade);
}
// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.
const pessoasDePirapozinho = filtrarPorCidade(pessoas, 'Pirapozinho');
console.log(pessoasDePirapozinho);

// 4 - Crie um objeto chamado calculadora que terá os seguintes métodos:
// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
const calculadora = {
    soma: function(x, y) {
        return x + y;
    },
    subtracao: function(x, y) {
        return x - y;
    },
    multiplicacao: function(x, y) {
        return x * y;
    },
    divisao: function(x, y) {
        return x / y;
    }
}
// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(1, 2));
console.log(calculadora.multiplicacao(1, 2));
console.log(calculadora.divisao(1, 2));
// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.
calculadora.calcularMedia = function(numeros) {
    if (numeros.length === 0) return 0;
    const soma = numeros.reduce((total, num) => total + num, 0);
    return soma / numeros.length;
}
// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
const media = calculadora.calcularMedia([10, 20, 30, 40]);
console.log(`Média: ${media}`);

// 5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:
// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
const contaBancaria = {
    titular: 'João Fortunato',
    saldo: 500000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        this.saldo -= valor;
    }
}
// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:
// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
const cliente = {
    nome: 'João',
    conta: contaBancaria
}
// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.
cliente.mostrarSaldo = function() {
    console.log(`Cliente: ${this.nome}`);
    console.log(`Saldo: R$ ${this.conta.saldo}`);
}
cliente.conta.depositar(25000);
cliente.conta.sacar(10000);
cliente.mostrarSaldo();