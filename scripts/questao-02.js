 const numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];
 let numerosPares = 0;
 let numerosImpares = 0;
 let maioresQue20 = 0;

 //varredura do array
 for (let i = 0; i < numeros.length; i++) {
 //condicional para números pares
    if (numeros[i] % 2 == 0) {
        numerosPares++;
    }

 if (numeros[i] > 20) {
    maioresQue20++;
 }
}
 numerosImpares = numeros.length - numerosPares;

 console.log(`a quantidade de números pares é: ${numerosPares}`);
console.log(`a quantidade de numeros impares é: ${numerosImpares}`);
console.log(`a quantidade de numeros maiores que 20 é: ${maioresQue20}`);

 