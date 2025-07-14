//1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
const arrayEsparso = [];
arrayEsparso[1] = 'Valor no índice 1';
arrayEsparso[3] = 'Valor no índice 3';
arrayEsparso[7] = 'Valor no índice 7';
console.log(arrayEsparso);
console.log(`Comprimento do array esparso: ${arrayEsparso.length}`);

//2. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
const meuArray = [1, 2, 3, 4, 5];
console.log('Array antes da alteração:', meuArray);
meuArray[0] = 10;
console.log('Array depois da alteração:', meuArray);

//3. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
const meuArrayVazio = [];
meuArrayVazio.push(5, 10, 15);
console.log('Array antes da substituição:', meuArrayVazio);
meuArrayVazio[0] = meuArrayVazio[0] * 2
console.log('Array depois da substituição:', meuArrayVazio);

//4. Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
const meuArrayNovo = [];
meuArrayNovo.push(20, 30, 40);
console.log('Array com valores adicionados:', meuArrayNovo);

//5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
const clinica = [];
clinica.push('Cachorro', 'Gato', 'Coelho');
console.log('Animais na clínica:', clinica);
while (clinica.length > 0) {
    console.log(`Atendendo: ${clinica[0]}`);
    clinica.shift();
}
