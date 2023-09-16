const contarPalavras = (texto) => {
  texto = texto.toLowerCase();
  const palavras = texto.split(/[^a-z]+/).filter(Boolean);
  return palavras.length;
};

console.log(contarPalavras('sssaasdsSs'));
