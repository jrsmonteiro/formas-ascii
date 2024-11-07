class TrianguloAninhado {
  #quantidade = 0;
  #matriz = [];

  constructor(quantidade) {
    this.#quantidade = quantidade;
    this.#gerarMatriz();
  }

  print() {
    this.#matriz.forEach((linha) => console.log(linha.join("")));
    console.log("");
  }

  #gerarMatriz() {
    if (this.#quantidade < 1) return;
    const dimensaoEixoX = this.#getDimensaoEixoX(this.#quantidade)
    const dimensaoEixoY = this.#getDimensaoEixoY(this.#quantidade)
    this.#matriz = this.#getMatrizVazia(dimensaoEixoX, dimensaoEixoY);
    const indiceCentral = this.#getIndiceCentral(this.#quantidade);
    let indiceLinhaDaMatriz = 0;
    let numTriangulo = this.#quantidade;
    while (numTriangulo > 0) {
      const totalDeBarras = this.#getDimensaoEixoY(numTriangulo);

      // Barras (laterais)
      let numBarra = 1;
      let indiceLinhaDaBarra = indiceLinhaDaMatriz;
      let indiceBarraDaEsquerda = indiceCentral;
      let indiceBarraDaDireita = indiceBarraDaEsquerda + 1;
      while (numBarra <= totalDeBarras) {
        this.#matriz[indiceLinhaDaBarra][indiceBarraDaEsquerda] = "/";
        this.#matriz[indiceLinhaDaBarra][indiceBarraDaDireita] = "\\";
        indiceLinhaDaBarra++;
        indiceBarraDaEsquerda--;
        indiceBarraDaDireita++;
        numBarra++;
      }

      // Underlines (base)
      let xUnderline = indiceBarraDaEsquerda + 2
      let yUnderline = indiceLinhaDaBarra - 1
      let xLimiteUnderline = indiceBarraDaDireita - 1
      while (xUnderline < xLimiteUnderline) {
        this.#matriz[yUnderline][xUnderline] = '_'
        xUnderline++
      }

      numTriangulo--;
      indiceLinhaDaMatriz += 2;
    }
  }

  #getMatrizVazia(dimensaoEixoX, dimensaoEixoY) {
    const matriz = Array(dimensaoEixoY);
    for (let indice = 0; indice < dimensaoEixoY; indice++) {
      matriz[indice] = Array(dimensaoEixoX).fill(" ");
    }
    return matriz;
  }

  #getDimensaoEixoX(quantidade) {
    return this.#getDimensaoEixoY(quantidade) * 2;
  }

  #getDimensaoEixoY(quantidade) {
    return quantidade * 3 - 1;    
  }

  #getIndiceCentral(quantidade) {
    return this.#getDimensaoEixoY(quantidade) - 1;
  }

  #getQtdBarras(numLosangulo) {
    return numLosangulo * 2 - 1;
  }
}

exports.TrianguloAninhado = TrianguloAninhado;
