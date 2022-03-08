// Exercício 1
/*let a = 2;
let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);*/

// Exercício 2
/*let a = 5;
let b = 2;

if(a>b) {
  console.log(a);
}
else {
    console.log(b);
}*/

//Exercício 3
/*let a = 2;
let b = 4;
let c = 3;

if( (a > b) && (a > c) ) {
  console.log(a);
}

else if( (b > a) && (b > c)) {
  console.log(b);
}

else {
  console.log(c);
}*/

//Exercício 4
/*const x = -24;

if(x > 0) {
  console.log("positive");
}

else if(x < 0) {
  console.log("negative");
}

else {
  console.log("zero");
}*/

//Exercício 5
const anguloA = 30;
const anguloB = 60;
const anguloC = 90;

if(anguloA < 0 || anguloB < 0 || anguloC < 0) {
  console.log("Erro, ângulos inválidos.")
}

else if(anguloA+anguloB+anguloC == 180) {
  console.log("true");
}

else {
  console.log("false")
} 