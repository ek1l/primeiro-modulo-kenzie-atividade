let nome = prompt('Digite o seu nome.');
if (nome.length < 5) {
  alert('nome inválido');
}
let presenca = Number(prompt('Digite a presença do aluno'));
if (presenca > 10 || presenca < 0) {
  alert('Valor inválido de presença.');
}
console.log(typeof presenca);

const matematica = 'Matemática';
const notamatematica = 10;
const portugues = 'Português';
const notaPortugues = 8;
const informatica = 'Informática';
const notaInformatica = 10;
const ingles = 'Inglês';
const notaIngles = 9;
const historia = 'História';
const notaHistoria = 9;
const filosofia = 'Filosofia';
const notaFilosofia = 10;
const sociologia = 'Sociologia';
const notaSociologia = 8;
const literatura = 'literatura';
const notaLiteratura = 10;
const edFisica = 'Educação Física';
const notaEdFisica = 7;
const geografia = 'Geografia';
const notaGeografia = 10;

let somaNota =
  (notaGeografia +
    notaEdFisica +
    notaLiteratura +
    notaSociologia +
    notaFilosofia +
    notaHistoria +
    notaIngles +
    notaInformatica +
    notaPortugues +
    notamatematica) /
  10;

console.log(somaNota);

if (somaNota > 10 || somaNota < 0) {
  alert('Nota inválida');
}

let mediaNota = parseInt(somaNota);

console.log(mediaNota);
if (mediaNota >= 8 && presenca >= 6) {
  alert(
    `A nota do aluno ${nome} é de ${mediaNota} e sua preseça de ${presenca}: Aluno aprovado!`,
  );
} else {
  alert(
    `A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${presenca}: Aluno reprovado!`,
  );
}
