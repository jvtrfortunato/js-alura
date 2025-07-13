const estudanteReprovou = function (notaFinal, Faltas) {
    if (notaFinal < 7 || Faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 5)); // true
console.log(estudanteReprovou(10, 2)); // false