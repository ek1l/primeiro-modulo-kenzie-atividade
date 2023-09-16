const gerarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 20);
};

const verificarPalpite = () => {
  let tentativa = 1;
  const pegarRetorno = gerarNumeroAleatorio();
  console.log(pegarRetorno);

  while (true) {
    let palpite = parseInt(Number(prompt('Dê um palpite de um número até 20')));
    if (palpite === pegarRetorno) {
      alert('Você acertou');
      console.log(tentativa);
      break;
    } else {
      tentativa++;
      console.log(tentativa);
      alert('Você errou');
    }
  }
};

verificarPalpite();
