// Parte I - Objetos e For/In
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Atividade 1
console.log('Bem vinda, ' + info.personagem);

// Atividade 2
info.recorrente = 'Sim';
console.log(info);

// Atividade 3
for (chaves in info) {
  console.log(chaves);
}

// Atividade 4
for (valores in info) {
  console.log(info[valores]);
};