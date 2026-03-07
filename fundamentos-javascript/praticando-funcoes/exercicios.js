// 1 - Imagine que você está criando uma página de boas-vindas para um site de cursos online. Ao acessar a plataforma, o sistema precisa exibir uma mensagem de saudação para cada usuário. Às vezes, porém, o nome da pessoa pode estar ausente — e, nesse caso, uma saudação genérica deve ser exibida.

// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso.

function saudacao(nome = 'visitante') {
    console.log(`Olá, ${nome}! Seja bem-vindo(a) à nossa plataforma de cursos.`);
}

console.log('\nSaída do exercício 1:')

saudacao('João'); 
saudacao();

// 2 - Imagine que você está criando um sistema para um e-commerce que vende livros.Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.

// Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:

// o preço original do produto,
// a porcentagem de desconto (com um valor padrão de 10%).

function calcularDesconto(precoProduto, porcentagemDesconto = 10) {
    return precoProduto - (precoProduto * (porcentagemDesconto / 100))
}

console.log('\nSaída do exercício 2:')

const precoFinal = calcularDesconto(1399)
console.log(precoFinal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}))

const precoFinal2 = calcularDesconto(2799, 20)
console.log(precoFinal2.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}))

// 3 - Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.

// Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2

console.log('\nSaída do exercício 3:')
console.log('Média final:', calcularMedia(9, 10).toFixed(1))

// 4 - Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function.

// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:

// "Par" se o número for par
// "Ímpar" se for ímpar

const verificarParidade = num => num % 2 === 0 ? "Par" : "Ímpar"

console.log('\nSaída do exercício 4:')
console.log('Verificação de paridade:', verificarParidade(8))

// 5 - Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

// Até 5 km: frete fixo de R$ 5
// De 5.1 km até 20 km: R$ 0,50 por quilômetro
// Acima de 20 km: frete fixo de R$ 20
// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio?

function calcularFrete(km) {
    if (km <= 5) {
        return 5
    } else if (km > 5 && km <= 20) {
        return km / 2
    } else {
        return 20
    }
} 

console.log('\nSaída do exercício 5:')
console.log('Valor do frete:', calcularFrete(4).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}))
console.log('Valor do frete:', calcularFrete(14).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}))
console.log('Valor do frete:', calcularFrete(25).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}))

// 6 - Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

// Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:

// o nome do cliente,
// o tipo do cliente (vip, novo ou comum),
// e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.

function processarPedido(nome, tipoCliente, callback) {
    console.log('Processando pedido...')

    let mensagem

    if (tipoCliente === 'vip') {
        mensagem = `Olá ${nome}! Obrigado por ser um cliente VIP 💎`
    } else if (tipoCliente === 'novo') {
        mensagem = `Bem-vindo(a), ${nome}! Aproveite seu primeiro pedido 🎉`
    } else {
        mensagem = `Olá ${nome}! Obrigado pela sua compra 😊`
    }

    callback(mensagem)
}

function exibirMensagem(mensagem) {
    console.log(mensagem)
}

console.log('\nSaída do exercício 6:')
processarPedido('João', 'vip', exibirMensagem)
processarPedido('Maria', 'novo', exibirMensagem)
processarPedido('Carlos', 'comum', exibirMensagem)

// 7 - Imagine que você está desenvolvendo uma interface de atendimento online.Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.

// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

// o nome do usuário, e
// uma função de callback que será executada após 3 segundos.

function responderUsuario(nome, callback) {
  console.log(`Recebemos sua pergunta, ${nome}. Processando resposta... 🤔`);

  setTimeout(() => {
    callback(nome);
  }, 3000);
}

function exibirResposta(nome) {
  console.log(`Pronto, ${nome}! Aqui está a resposta para sua pergunta ✅`);
}

// console.log('\nSaída do exercício 7:')
// responderUsuario('João', exibirResposta);

// 8 - Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo.Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

// Foi aprovado, se a pontuação for igual ou maior que 70
// Precisa de reforço, se a pontuação estiver entre 50 e 69
// Foi reprovado, se a pontuação for menor que 50
// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

// a pontuação final do jogador
// uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.

function avaliarDesempenho(pontuacao, callback) {
    let resultado

    if (pontuacao >= 70) {
        resultado = 'aprovado'
    } else if (pontuacao >= 50 && pontuacao <= 69) {
        resultado = 'reforco';
    } else {
        resultado = 'reprovado';
    }

    callback(resultado, pontuacao);
}

function exibirResultado(resultado, pontuacao) {
  if (resultado === 'aprovado') {
    console.log(`🎉 Parabéns! Pontuação: ${pontuacao}. Você foi aprovado!`);
  } else if (resultado === 'reforco') {
    console.log(`📘 Pontuação: ${pontuacao}. Você precisa de reforço.`);
  } else {
    console.log(`❌ Pontuação: ${pontuacao}. Você foi reprovado.`);
  }
}

console.log('\nSaída do exercício 8:')
avaliarDesempenho(85, exibirResultado);
avaliarDesempenho(60, exibirResultado);
avaliarDesempenho(40, exibirResultado);

// 9 - Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica de seus aparelhos eletrônicos. O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.

// Sua missão é criar três funções separadas, com responsabilidades bem definidas:

// calcularConsumo(potencia, horasPorDia): Retorna o consumo mensal em kWh, com base na fórmula: consumo = (potencia × horasPorDia × 30) / 1000
// classificarConsumo(consumo): Retorna a classificação com base na tabela:

// Consumo mensal (kWh)	    Classificação
// Abaixo de 50	            "Baixo consumo"
// 50 - 199	                "Consumo moderado"
// 200 ou mais	            "Alto consumo"

// exibirResumo(nomeAparelho, consumo, classificacao): Exibe uma mensagem como:"Geladeira tem consumo de 180 kWh/mês e é classificada como Consumo moderado."

const calcularConsumo = (potencia, horasPorDia) => (potencia * horasPorDia * 30) / 1000

function classificarConsumo(consumoMensal) {
    if (consumoMensal < 50) {
        return 'Baixo consumo'
    } else if (consumoMensal >= 50 && consumoMensal < 200) {
        return 'Consumo moderado'
    } else {
        return 'Alto consumo'
    }
}

function exibirResumo (nomeAparelho, consumo, classificacao) {
    console.log(`${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao}.`)
}

console.log('\nSaída do exercício 9:')
exibirResumo('Geladeira', calcularConsumo(150, 4), classificarConsumo(calcularConsumo(150, 4)))

// 10 - Imagine que você está desenvolvendo um sistema de sorteio interativo para um evento online. Os participantes se inscrevem com um nome e uma pontuação (baseada em atividades realizadas). O sistema deve:

// Sortear aleatoriamente um nome da lista de participantes.
// Exibir esse nome com um pequeno atraso (como se fosse um suspense).
// Avaliar se o participante foi premiado ou não com base na pontuação:
// Acima de 80: "Parabéns, você foi premiado!"
// Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
// Abaixo de 50: "Infelizmente, não foi dessa vez."
// Sua missão é criar:

// Uma função para sortear um nome aleatoriamente.
// Uma função para exibir o nome sorteado com 2 segundos de atraso
// Uma função para avaliar a pontuação.
// Uma função final que organize o fluxo completo do sorteio.

const sortearParticipante = (participantes) => {
  const indiceAleatorio = Math.floor(Math.random() * participantes.length);
  return participantes[indiceAleatorio];
};

const exibirComSuspense = (nome, callback) => {
  console.log('🎲 Sorteando participante...');

  setTimeout(() => {
    console.log(`👉 Participante sorteado: ${nome}`);
    callback();
  }, 2000);
};

const avaliarPontuacao = (pontuacao) => {
  if (pontuacao > 80) {
    return '🎉 Parabéns, você foi premiado!';
  } else if (pontuacao >= 50) {
    return '😮 Você quase conseguiu! Fique de olho nos próximos sorteios.';
  } else {
    return '😕 Infelizmente, não foi dessa vez.';
  }
};

function realizarSorteio(participantes) {
  const participanteSorteado = sortearParticipante(participantes);

  exibirComSuspense(participanteSorteado.nome, () => {
    const resultado = avaliarPontuacao(participanteSorteado.pontuacao);
    console.log(resultado);
  });
}

const participantes = [
  { nome: 'João', pontuacao: 85 },
  { nome: 'Maria', pontuacao: 72 },
  { nome: 'Carlos', pontuacao: 40 },
  { nome: 'Ana', pontuacao: 90 }
];

// console.log('\nSaída do exercício 10:')
// realizarSorteio(participantes);

// 11 - Sua missão é criar uma função chamada contagemRegressiva que:

// Receba um número inteiro positivo (ex: 5)
// Imprima esse número e, a cada chamada, reduza em 1
// Quando chegar em 0, exiba a mensagem: "Lançamento!"
// A função deve ser implementada de forma recursiva, sem usar loops (for ou while).

function contagemRegressiva(numero) {
  if (numero === 0) {
    console.log('🚀 Lançamento!');
    return;
  }

  console.log(numero);
  contagemRegressiva(numero - 1);
}

console.log('\nSaída do exercício 11:')
contagemRegressiva(7);