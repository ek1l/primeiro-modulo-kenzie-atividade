const alunoCurso = {
  nome: 'João',
  idade: 31,
  curso: 'FullStack',
  instituicao: 'Kenzie Br',
  materias: ['Html', 'Css', 'JavaScript', 'Python'],
  situacaoMatricula: true,
};

function getTheCurse(aluno) {
  let { nome, curso } = aluno;
  return alert(`O aluno ${nome} está cursando ${curso}`);
}

function getTheSubjects(materiais) {
  let { nome, materias } = materiais;

  let novoArrayMateriais = materias.map((materia) => materia);
  return alert(
    `O aluno ${nome} tem as seguintes matérias: ${novoArrayMateriais.join(
      ', ',
    )}`,
  );
}

function resgistrationStatus(aluno) {
  const { nome, situacaoMatricula } = aluno;
  return alert(
    `O aluno ${nome} consta na matrícula como: ${situacaoMatricula}`,
  );
}

function generateStudentCard(aluno) {
  const { nome, idade, curso, instituicao } = aluno;
  if ((!nome, !idade, !curso, !instituicao)) {
    return 'O objeto que você passou como argumento não tem as propriedades necessárias.';
  }
  let cardInformation = `name: ${nome}, idade: ${idade}, curso: ${curso}, instituição: ${instituicao}`;
  return cardInformation;
}
