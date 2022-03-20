// Parte I - Objetos e For/In
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Atividade 1
//console.log('Bem vinda, ' + info.personagem);

// Atividade 2
info.recorrente = 'Sim';
//console.log(info);

// Atividade 3
for (chaves in info) {
 // console.log(chaves);
}

// Atividade 4
for (valores in info) {
  //console.log(info[valores]);
};

// Atividade 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for (concat in info, info2) {
  if (info[concat] !== info2[concat]) {
    console.log(info[concat] + ' e ' + info2[concat]);
  } else {
    console.log('Ambos são recorrentes');
  }
};

// Atividade 6

// Atividade 7

// Atividade 8