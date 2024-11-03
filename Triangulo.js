class Triangulo {
  #tamanho = 0;
  #caracter = "*";
  #matriz = [];

  constructor(tamanho, caracter = "*") {
    this.#tamanho = tamanho;
    this.#caracter = caracter;
    this.#gerarMatriz();
  }

  print() {
    this.#matriz.forEach((linha) => console.log(linha.join("")));
    console.log('');
    
  }

  #gerarMatriz() {
    if (this.#tamanho < 1) return;
    this.#matriz = Array(this.#tamanho);
    const totalItensDaBase = this.#getTotalCaracteresPelaAltura(this.#tamanho);
    for (let alturaAtual = 1; alturaAtual <= this.#tamanho; alturaAtual++) {
      this.#matriz[alturaAtual - 1] = this.#getCaracteresDaLinha(
        alturaAtual,
        totalItensDaBase
      );
    }
  }

  #getCaracteresDaLinha(alturaAtual, totalItensDaBase) {
    const totalCaracteres = this.#getTotalCaracteresPelaAltura(alturaAtual);
    const indiceInicioCaracteres = this.#tamanho - alturaAtual;
    const indiceFinalCaracteres = indiceInicioCaracteres + totalCaracteres;
    const caracteresDaLinha = Array(totalItensDaBase).fill(" ");
    for (
      let indiceCaractere = indiceInicioCaracteres;
      indiceCaractere < indiceFinalCaracteres;
      indiceCaractere++
    ) {
      caracteresDaLinha[indiceCaractere] = this.#caracter;
    }
    return caracteresDaLinha;
  }

  #getTotalCaracteresPelaAltura(altura) {
    return altura * 2 - 1;
  }
}

exports.Triangulo = Triangulo
