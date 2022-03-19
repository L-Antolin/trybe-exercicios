// Atividade 1
let fatorial = 1;
for (let i = 2; i <= 10; i +=1) {
  fatorial = fatorial * i;
}
console.log(fatorial);

// Atividade 2
let word = 'banana';
let palavraIvertida = '';
for (let i = word.length -1; i >= 0; i -=1) {
  palavraIvertida += word[i];
}
console.log(palavraIvertida);