// 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.
const pessoa = {
    nome: 'João',
    notas: [9.7, 10],
    calcularMediaNotas: function() {
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        const media = soma / this.notas.length;
        return media;
    }
}
// Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:
// Desempenho excelente: média >= 9
// Bom desempenho: 7.5 <= média entre 7.6 e 8.9
// Desempenho regular: 6 <= média entre 6 e 7.5
// Desempenho insuficiente: média < 6
pessoa.classificarDesempenho = function(media) {
    if (media >= 9) {
        return 'Desempenho excelente';
    } else if (media <= 7.5) {
        return 'Bom desempenho';
    } else if (media <= 6) {
        return 'Desempenho regular';
    } else if (media < 6) {
        return 'Desempenho insuficiente';
    }
}
// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.
console.log(pessoa.calcularMediaNotas());
// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
console.log(pessoa.classificarDesempenho(pessoa.calcularMediaNotas()));
console.log('---------------------');

// 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:
// marca (string): marca do carro.
// modelo (string): modelo do carro.
// ano (number): ano de fabricação do carro.
// cor (string): cor do carro.
const carro = {
    marca: 'BMW',
    modelo: 'XR1',
    ano: 2023,
    cor: 'branco'
}
// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
console.log('Propriedades do carro:')
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
carro.cambio = 'automático';
carro.combustivel = 'gasolina';
carro.numeroPortas = 4;
carro.arCondicionado = true;
console.log('---------------------');
// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
console.log('Propriedades atualizadas:')
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
console.log('---------------------');

// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.
// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:
// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
carro.ligado = false;
carro.ligar = function() {
    if (!carro.ligado) {
        this.ligado = true;
        console.log('O carro foi ligado!');
    } else {
        console.log('O carro ja está ligado.');
    }
}
carro.desligar = function() {
    if (carro.ligado) {
        this.ligado = false;
        console.log('O carro foi desligado!');
    } else {
        console.log('O carro ja está desligado.');
    }
}
carro.obterDetalhes = function() {
        let estado;
        if (this.ligado) {
            estado = 'ligado';
        } else {
            estado = 'desligado';
        }
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
console.log('Usando método obterDetalhes():');
console.log(carro.obterDetalhes());
console.log('---------------------');
// Em seguida, faça o seguinte:
// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
// Chame o método obterDetalhes e imprima no console a string retornada.
console.log('Ligando o carro.');
carro.ligar();
console.log('---------------------');
console.log('Usando método obterDetalhes():');
console.log(carro.obterDetalhes());
console.log('---------------------');
console.log('Desligando o carro.');
carro.desligar();
console.log('---------------------');
console.log('Usando método obterDetalhes():');
console.log(carro.obterDetalhes());

// 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
Object.defineProperty(carro, 'placa', {
    value: 'ABC-1234',
    enumerable: false, // Isso impede que a propriedade apareça no for...in ou Object.keys()
    writable: true,
    configurable: true
});
// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.
console.log('---------------------');
console.log('Propriedade placa como não enumerável:');
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.
// Pegando só as chaves enumeráveis:
const chavesEnumeraveis = Object.keys(carro);
console.log('---------------------');
console.log('Chaves enumeráveis:');
console.log(chavesEnumeraveis);
// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
console.log('---------------------');
console.log('Acessando a propriedade placa diretamente usando carro.placa:');
console.log(carro.placa);

// 5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:
// marca (string): marca do novo carro.
// modelo (string): modelo do novo carro.
// ano (number): ano de fabricação do novo carro.
// cor (string): cor do novo carro.
const carroNovo = {
    marca: 'Ferrari',
    modelo: 'F40',
    ano: 2024,
    cor: 'Vermelho'
}
// Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.
const carroComNovosDetalhes = {
    ...carro,
    ...carroNovo
}
// Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.
console.log('---------------------');
console.log('Carro com novos detalhes:');
console.log(carroComNovosDetalhes);
// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.
carroComNovosDetalhes.cambio = 'manual';
console.log('---------------------');
console.log('Carro com novos detalhes:');
console.log(carroComNovosDetalhes);
