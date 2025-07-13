const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
    media += media * 0.1; // bônus de 10%
}

console.log(`a média é ${media.toFixed(2)}`); // toFixed(2) para limitar a 2 casas decimais