let slenzie = {
  nameEvent: 'Evento',
  questions: [],
};

let question = {
  user: 'nameUser',
  userQuestion: 'Pergunta do usuário',
  vote: Number(0),
};

function createEvent(slenzie, name) {
  if (typeof name === 'string' && name.length >= 5) {
    return (slenzie.nameEvent = name);
  }
  return 'The input value is invalid';
}
createEvent(slenzie, 'Leonardo');

function addQuestion(slenzie, question) {
  const { user, userQuestion } = question;
  if (user === '') return "The user can't be empty";
  if (userQuestion === '') return "The question can't be null";
  const { questions } = slenzie;
  questions.push(question);
}
addQuestion(slenzie, question);

function addVoteToQuestion(value, slenzie) {
  if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {
    return 'The value is not allowed';
  }
  if (value < 1) {
    return 'Question not found.';
  }
  slenzie.questions[0].vote += value;
  return 'Vote registered successfully';
}
addVoteToQuestion(2, slenzie);

function questionAnswered(value, slenzie) {
  const { questions } = slenzie;
  if (questions.length < value) return 'Question not found.';
  if (!Number.isInteger(value)) return 'The value is not allowed';
  return (questions[value].answered = false);
}
questionAnswered(0, slenzie);

function unansweredQuestions(slenzie) {
  let output = [];
  const { questions } = slenzie;
  const filtrodeQuestoes = questions.filter((item) => {
    if (item.answered === false) {
      output.push(item);
    }
  });
  console.log(output);
  return output.push(filtrodeQuestoes);
}

unansweredQuestions(slenzie);

console.log(slenzie);
