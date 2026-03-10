// 1 - Você está desenvolvendo um sistema para uma loja online. Cada produto do catálogo deve ser representado por um objeto com informações de nome, preco e disponivel. Escreva um programa que:

// Crie um objeto chamado produto.
// O objeto deve conter as propriedades: nome, preco, disponivel.
// Exiba o objeto no console.

const produto = {
    nome: 'teclado',
    preco: 299.99,
    disponivel: true
}

console.log('\nSaída do exercício 1:')
console.log(produto)

// 2 - Você está criando um painel de configurações para um aplicativo. As configurações são armazenadas em um objeto e você precisa acessar informações específicas para exibição.

// Escreva um programa que:

// Crie um objeto configuracoes com as propriedades de tema, notificacoes, idioma.
// Acesse tema usando notação de ponto.
// Acesse idioma usando notação de colchetes.
// Exiba os dois valores no console.

const configuracoes = {
    tema: ['escuro', 'claro'],
    notificacoes: true,
    idioma: ['português', 'inglês', 'francês']
}

const tema = configuracoes.tema[0]
const idioma = configuracoes.idioma[2]
console.log('\nSaída do exercício 2:')
console.log(`tema - ${tema} \nidioma - ${idioma}`)

// 3 - Você está criando um aplicativo de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita é representada por um objeto que contém uma lista de ingredientes armazenada como um array. Diante disso, escreva um programa que:

// Crie um objeto receita com as propriedades: nome, ingredientes (array com pelo menos 5 itens) e tempoPreparo.
// Acesse o índice 2 da lista que está dentro do objeto.
// Exiba no console a frase: "Ingrediente complementar: [ingrediente]".

const receita = {
    nome: 'Arroz branco cozido',
    ingredientes: ['arroz branco', 'água', 'alho', 'sal', 'cebola'],
    tempoPreparo: '25 minutos'
}

const ingrediente = receita.ingredientes[2]
console.log('\nSaída do exercício 3:')
console.log('Ingrediente complementar:', ingrediente)

// 4 - Você está desenvolvendo um sistema para uma locadora de carros. Cada veículo tem informações cadastradas, mas agora a empresa decidiu remover a informação do modelo antigo dos carros. Escreva um programa que:

// Crie um objeto carro com as propriedades: marca, modelo, ano, modeloAntigo;
// Remova a propriedade modeloAntigo;
// Exiba o objeto final no console.

const carro = {
    marca: 'Honda',
    modelo: 'City',
    ano: 2025,
    modeloAntigo: 'Civic'
}

delete carro.modeloAntigo
console.log('\nSaída do exercício 4:')
console.log(carro)

// 5 - Você está desenvolvendo um painel de monitoramento que exibe informações sobre dispositivos conectados à rede. Cada dispositivo é representado por um objeto, e todos estão organizados dentro de um array.

// Escreva um programa que:

// Crie um array chamado dispositivos, contendo 3 objetos com as propriedades: nome e status.
// Use um loop para exibir no console o nome e status de cada dispositivo.

const dispositivos = [
    {
        nome: 'iPhone 16',
        status: 'Conectado'
    },
    {
        nome: 'iPhone 16e',
        status: 'Desconectado'
    },
    {
        nome: 'Notebook Acer Nitro',
        status: 'Conectado'
    }
]

console.log('\nSaída do exercício 5:')
for(let dispositivo of dispositivos) {
    console.log(`${dispositivo.nome} - ${dispositivo.status}`)
}

// 6 - Você está desenvolvendo um sistema de controle de máquinas em uma fábrica. Cada máquina é representada por um objeto que, além das informações básicas, também possui um método interno que exibe seu status. Escreva um programa que:

// Crie um objeto maquina com as propriedades: nome, funcionando.
// Adicione um método chamado exibirStatus que exibe no console: "A máquina [nome] está em funcionamento." ou "A máquina [nome] está parada.", dependendo do valor de funcionando.
// Chame o método exibirStatus.

const maquina = {
    nome: 'Seladora a Vácuo',
    funcionando: true
}

maquina.exibirStatus = function exibirStatus() {
    this.funcionando ? console.log(`A máquina ${this.nome} está em funcionamento.`) :
        console.log(`A máquina ${this.nome} está parada.`)
}

console.log('\nSaída do exercício 6:')
maquina.exibirStatus()

// 7 - Imagine que você está desenvolvendo uma funcionalidade de importação de dados para uma empresa. Os dados chegam como um array de pares, onde cada par representa uma chave e seu respectivo valor, e você precisa transformar isso em um objeto estruturado, que será usado pelo sistema para preencher os campos automaticamente.

// Sua tarefa é:

// Criar uma função chamada montarObjeto que receba como parâmetro um array de pares chave-valor, como este:

const dados = [
  ['nome', 'João'],
  ['idade', 30],
  ['cidade', 'Curitiba']
]

function montarObjeto(pares) {
    const objeto = {}

    for (const [chave, valor] of pares) {
        objeto[chave] = valor
    }

    return objeto
}

console.log('\nSaída do exercício 7:')
console.log(montarObjeto(dados))

// 8 - Você foi a pessoa encarregada de desenvolver uma funcionalidade para o sistema de inspeções técnicas de uma fábrica. Cada máquina inspecionada gera automaticamente um relatório de medições, contendo dados como temperatura, vibração, pressão e nível de ruído. Essas informações são organizadas dentro de um objeto, onde cada chave representa uma categoria avaliada e o valor representa o nível registrado na inspeção.

// Exibir todas as categorias avaliadas;
// Exibir todos os valores registrados;
// Percorra todas as medições (pares categoria/valor) e imprima um detalhamento com status, seguindo a seguinte lógica:
// Se o valor for maior que 50, mostre a mensagem (alerta)
// Caso contrário, mostre (ok)

const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
}

console.log('\nSaída do exercício 8:')
console.log('Categorias avaliadas -', Object.keys(relatorio))
console.log('Valores registrados -', Object.values(relatorio))

for (const [categoria, valor] of Object.entries(relatorio)) {
    valor > 50 ? console.log(`${categoria}: ${valor} (alerta)`) : 
        console.log(`${categoria}: ${valor} (ok)`)
}

// 9 - Você está desenvolvendo um sistema de manutenção preventiva para uma indústria. Cada máquina registra os meses em que passou por manutenção ao longo do ano, armazenando a quantidade de dias parados em um objeto, onde cada chave representa um mês e o valor representa os dias de inatividade.

// Agora, o sistema precisa gerar um relatório que exiba:

// O total de dias parados no ano.
// A quantidade de meses com manutenção (ou seja, com valor maior que zero).
// Um alerta caso o total de dias parados seja maior que 20 dias: Status: Atenção! Acima do limite anual. ou Status: Dentro do limite anual.

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

console.log('\nSaída do exercício 9:')

let diasParados = 0
let mesesManutencao = 0

for (const dias of Object.values(manutencao)) {
    diasParados += dias
    
    if (dias > 0) {
        mesesManutencao += 1
    } 
}

console.log('Total de dias parados -', diasParados)
console.log('Meses com manutenção registrada:', mesesManutencao)

diasParados > 20 ? console.log('Status: Atenção! Acima do limite anual.') :
    console.log('Status: Dentro do limite anual.')

// 10 - Você está finalizando o back-end de uma plataforma de cursos online. Cada curso possui uma lista de estudantes com seus respectivos dados de progresso. Sua tarefa é construir um relatório que mostre o desempenho geral da turma.

// Você deve escrever um programa que:

// Crie um objeto chamado curso, com as seguintes propriedades:

// titulo: string com o nome do curso;
// estudantes: um array de objetos, cada um com nome e progresso (número de 0 a 100);
// Um método interno chamado gerarRelatorio.
// O método gerarRelatorio deve:

// Percorrer o array de estudantes;
// Exibir no console o nome de cada estudante e sua situação:
// Se o progresso for igual ou maior que 70, mostrar "Aprovado";
// Senão, mostrar "Em andamento";
// Ao final, mostrar:
// A quantidade total de estudantes;
// A média geral de progresso da turma.

const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],

  gerarRelatorio() {
    let somaProgresso = 0

    for (const estudante of this.estudantes) {
      const { nome, progresso } = estudante

      if (progresso >= 70) {
        console.log(`Estudante: ${nome} | Progresso: ${progresso}% | Situação: Aprovado`)
      } else {
        console.log(`Estudante: ${nome} | Progresso: ${progresso}% | Situação: Em andamento`)
      }

      somaProgresso += progresso
    }

    const quantidade = this.estudantes.length
    const media = somaProgresso / quantidade

    console.log("\nTotal de estudantes:", quantidade)
    console.log("Média de progresso da turma:", media)
  }
}

console.log("\nSaída do exercício 10:\n")
curso.gerarRelatorio()