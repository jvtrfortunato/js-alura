const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//primeira expressão: executa apenas uma vez e antes do loop, serve para criar uma variável
//segunda expressão: executa antes de cada iteração do loop, serve para verificar uma condição
//terceira expressão: executa após cada iteração do loop, serve para atualizar a variável
for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}