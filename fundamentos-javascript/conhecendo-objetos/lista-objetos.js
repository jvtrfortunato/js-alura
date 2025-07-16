const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '111.222.333-44',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999-9999', '551199999-9998'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
}

estudante.enderecos.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
});

// console.log(estudante.enderecos);
// console.log(estudante.enderecos[1]);

const listaEnderecosComComplemento = estudante.enderecos.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);