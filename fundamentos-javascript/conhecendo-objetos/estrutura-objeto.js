const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '111.222.333-44',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`O nome do estudante é ${estudante.nome} e ele tem ${estudante.idade} anos.`);
console.log(`Os três primeiros números do CPF são ${estudante.cpf.substring(0, 3)}.`);