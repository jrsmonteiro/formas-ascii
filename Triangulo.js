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
    console.log("");
  }

  #gerarMatriz() {
    if (this.#tamanho < 1) return;
    const totalItensDaBase = this.#getTotalCaracteresPelaAltura(this.#tamanho);
    for (let alturaAtual = 1; alturaAtual <= this.#tamanho; alturaAtual++) {
      const caracteresDaLinha = this.#getCaracteresDaLinha(
        alturaAtual,
        totalItensDaBase
      );
      this.#matriz.push(caracteresDaLinha)
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

exports.Triangulo = Triangulo;
