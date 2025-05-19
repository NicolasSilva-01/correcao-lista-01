const temperaturasCelcius = [0, 10, 20, 30, 40];
const temperaturasfahrenheit = [];
let contadorArrayFahrenheit = 0;

//fórmula:F = C* 9/5 +32

//varredura do array com laço de repetição  
for (let i = 0; i < temperaturasCelcius.length; i++) {
    temperaturasfahrenheit[contadorArrayFahrenheit]=
    (temperaturasCelcius[i] * 9) / 5 + 32;
    contadorArrayFahrenheit++;

}
console.table(temperaturasCelcius);
console.table(temperaturasfahrenheit);