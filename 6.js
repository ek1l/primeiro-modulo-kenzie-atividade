const user = {
  name: 'Jhon Doyle Fox',
  savingsBalance: Number(100),
  cardsInformation: [
    {
      number: '5160 4196 4843 3388',
      creditBalance: Number(1000),
      ensign: 'American Express',
    },
  ],
};

function sacarCredito(user, sacarValor) {
  let [{ creditBalance }] = user.cardsInformation;
  if (sacarValor > creditBalance) {
    return alert('Você não tem crédito disponível.');
  }
  if (sacarValor < 5) return alert('Você não pode sacar abaixo de R$ 5');
  if (typeof sacarValor === 'number') {
    user.cardsInformation[0].creditBalance = creditBalance - sacarValor;
    return alert(
      `Dinheiro sacado com sucesso:  R$ ${sacarValor} \n Agora você tem R$ ${user.cardsInformation[0].creditBalance} na conta de crédito.`,
    );
  } else {
    return alert('O valor inserido para sacar não é um número');
  }
}

function sacarPoupanca(user, sacarValor) {
  let { savingsBalance } = user;
  if (sacarValor > savingsBalance) {
    return alert('Você não tem limite disponível');
  }
  if (sacarValor < 5) return alert('Você não pode sacar abaixo de R$ 5');
  if (typeof sacarValor === 'number') {
    user.savingsBalance = savingsBalance - sacarValor;
    alert(
      `Dinheiro sacado com sucesso:  R$ ${sacarValor} \n Agora você tem R$ ${user.savingsBalance} na conta da poupança.`,
    );
  } else {
    return alert('O valor inserido não é um número');
  }
}

function makeWithDrawal() {
  const sacar = parseInt(Number(prompt('Quanto deseja sacar?')));
  const poupancaOuCredito = prompt(
    'Deseja sacar da Poupança ou Crédito? \n Digite 1 para crédito \n Digite 2 para poupança',
  );
  switch (poupancaOuCredito) {
    case '1':
      return sacarCredito(user, sacar);
      break;
    case '2':
      return sacarPoupanca(user, sacar);
      break;
    default:
      return 'Nenhuma opção selecionada';
  }
}

function getBalance(user) {
  const { savingsBalance } = user;
  let valueForDeposit = parseInt(
    Number(prompt('Digite o valor para deposito')),
  );
  if (valueForDeposit > 5 && valueForDeposit < 500) {
    user.savingsBalance = savingsBalance + valueForDeposit;
    alert(
      `Valor de R$ ${valueForDeposit} depositado com sucesso. O seu saldo atualmente é: ${user.savingsBalance} `,
    );
  } else {
    return alert('This value is not allowed');
  }
}

const chamarFunc = () => {
  let escolha = prompt('Digite 1 para Sacar \n Digite 2 para depositar!');
  switch (escolha) {
    case '1':
      return makeWithDrawal();
      break;
    case '2':
      return getBalance(user);
      break;
    default:
      alert('Digite um valor existente');
  }
};

chamarFunc();
