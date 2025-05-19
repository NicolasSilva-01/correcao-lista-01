const notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0];
let totalSomaNotas = 0;
let mediaTurma = 0;
let acimaDaMedia = 0;
let maiorNota = notas[0];
let menorNota = notas[0];


//varredura do array de notas com o laço de repetição
for (let i = 0;i < notas.length; i++) {
    totalSomaNotas += notas[i];
    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    }
    if (notas[i] < menorNota) {
        menorNota = notas[i];
    }
}
mediaTurma = totalSomaNotas / notas.length;

for(let i = 0; i < notas.length; i++) {
    if (notas[i] > mediaTurma){
        acimaDaMedia++;

}
}

console.log(`a média da turma é: ${mediaTurma}`);
console.log(`a quantidade de alunos acima da média é: ${acimaDaMedia}`);
console.log(`a maior nota é: ${maiorNota}`);
console.log(`a menor nota é : ${menorNota}`);



