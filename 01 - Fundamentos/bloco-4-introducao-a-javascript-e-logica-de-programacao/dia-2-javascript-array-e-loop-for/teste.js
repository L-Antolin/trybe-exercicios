let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Exercício 1
/* console.log(numbers); */

//Exercício 2
/* let soma = 0;
for(let i = 0; i < numbers.length; i++) {
  soma = soma + numbers[i];
}
console.log(soma); */

//Exercício 3
/* let media = 0;
for(let i = 0; i < numbers.length; i++) {
  media = media + numbers[i];
}
media = media/numbers.length;
console.log(media); */

//Exercício 4
/* let media = 0;
for(let i = 0; i < numbers.length; i++) {
  media = media + numbers[i];
}
media = media/numbers.length;
if(media > 20) {
  console.log("valor maior que 20");
}
else {
  console.log("valor menor ou igual a 20");
} */

//Exercício 5
/* let maiorNumero = numbers[0];
for(let i = 1; i < numbers.length; i++){
  if(maiorNumero < numbers[i]){
    maiorNumero = numbers[i];
  }
}
console.log(maiorNumero); */

//Exercício 6
/* let numerosImpares = 0;
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] %2 != 0) {
    numerosImpares ++;
  }
}
console.log(numerosImpares); */

//Exercício 7
/* let menorNumero = numbers[0];
for(let i = 1; i < numbers.length; i++){
  if(menorNumero > numbers[i]){
    menorNumero = numbers[i];
  }
}
console.log(menorNumero); */

//Exercício 8
/* let novo =[];
for(let i = 1; i <= 25; i++) {
  novo.push(i);
}
console.log(novo); */

//Exercício 9
let novo =[];
for(let i = 1; i <= 25; i++) {
  novo.push(i);
}
for(let x of novo) {
  console.log(x/2);
}