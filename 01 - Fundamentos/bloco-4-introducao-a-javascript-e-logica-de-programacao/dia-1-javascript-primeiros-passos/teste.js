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
/*const anguloA = 30;
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
}*/

//Exercício 6 - movimento de peças encontrado no link : https://www.chesshouse.com/pages/chess-rules 
//e toLowerCase encontrado no link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
let piece = "Queen";

switch(piece.toLowerCase()) {
  case "king" : 
    console.log("Moves from its square to a neighboring square");
    break;

  case "rook" :
    console.log("Move in its line or row");
    break;

  case "bishop" :
    console.log("Moves diagonally");
    break;
  
  case "queen" :
    console.log("Move like a Rook or a Bishop");
    break;

  case "knight" :
    console.log("Jumps in making the shortest move that is not a straight one");
    break;

  case "pawn" :
    console.log("Moves one square straight ahead");
    break;

  default:
    console.log("Error, invalid piece!");

}

