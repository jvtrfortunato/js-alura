const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '111.222.333-44',
    turma: 'JavaScript'
}

estudante.nome //josé

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(estudante.pet);
console.log(estudante['pet']);


console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));