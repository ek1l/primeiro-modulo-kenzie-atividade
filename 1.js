let nome = prompt('Digite o seu nome');
let idade = prompt('Digite a sua idade');
let estaAcompanhado = prompt(
  'Está acompanhado? Digite "S" para SIM e "n" para NÃO',
);

if (estaAcompanhado === 'n') {
  estaAcompanhado = false;
} else if (estaAcompanhado === 's') {
  estaAcompanhado = true;
}

if (idade <= 18) {
  alert(`Entrada não permitida para ${nome} : Menor de idade`);
} else if (idade >= 18 && estaAcompanhado) {
  alert(`Entrada permitida para ${nome}: Conceder desconto`);
} else {
  alert(`Entrada permitida: Valor integral`);
}
