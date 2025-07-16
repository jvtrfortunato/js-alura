const estudanteReprovou = (notaFinal, Faltas) => {
    if (notaFinal < 7 || Faltas > 4) {
        return true;
    } else {
        return false;
    }
}

const exibeNome = (nome) => nome;

console.log(estudanteReprovou(6, 5)); // true
console.log(estudanteReprovou(10, 2)); // false
console.log(exibeNome('Caroline')); // Caroline