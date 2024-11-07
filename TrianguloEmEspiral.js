class TrianguloEmEspiral {
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

    const dimensaoEixoX = this.#getDimensaoEixoX(this.#quantidade);
    const dimensaoEixoY = this.#getDimensaoEixoY(this.#quantidade);
    this.#matriz = this.#getMatrizEmBranco(dimensaoEixoX, dimensaoEixoY);

    let quantidadeAtual = this.#quantidade;
    let qtdBarras = this.#getQtdBarrasInicial(this.#quantidade);
    let x = this.#getIndiceXinicial(this.#quantidade);
    let y = 0;
    let barrasInseridas = 0;

    // Barras descendo para esquerda (somente no primeiro)
    while (barrasInseridas < qtdBarras) {
      this.#matriz[y][x] = "/";
      barrasInseridas++;
      x--;
      y++;
    }

    // Preenche as espirais para cada losango
    while (quantidadeAtual > 0) {    
      // Underlines/base
      x = x + 2;
      y--;
      let qtdUnderlines = quantidadeAtual * 6 - 2;
      for (
        let underlinesInseridos = 0;
        underlinesInseridos < qtdUnderlines;
        underlinesInseridos++
      ) {
        this.#matriz[y][x] = "_";
        x++
      }

      // Barras subindo para esquerda
      barrasInseridas = 0;
      qtdBarras = quantidadeAtual !== this.#quantidade ? qtdBarras - 1 : qtdBarras
      while (barrasInseridas < qtdBarras) {
        this.#matriz[y][x] = "\\";
        barrasInseridas++;
        x--;
        y--;
      }

      // Barras descendo para esquerda, finalizando
      y++;
      qtdBarras--;
      barrasInseridas = 0;
      while (barrasInseridas < qtdBarras) {
        this.#matriz[y][x] = "/";
        barrasInseridas++;
        x--;
        y++;
      }

      qtdBarras--;
      quantidadeAtual--;
    }
  }

  #getMatrizEmBranco(dimensaoEixoX, dimensaoEixoY) {
    const matriz = Array(dimensaoEixoY);
    for (let indice = 0; indice < dimensaoEixoY; indice++) {
      matriz[indice] = Array(dimensaoEixoX).fill(" ");
    }
    return matriz;
  }

  #getDimensaoEixoX(quantidade) {
    return quantidade * 6;
  }

  #getDimensaoEixoY(quantidade) {
    return quantidade * 3 - 1;
  }

  #getIndiceXinicial(quantidade) {
    return quantidade * 3 - 2;
  }

  #getQtdBarrasInicial(quantidade) {
    return quantidade * 3 - 1;
  }
}

exports.TrianguloEmEspiral = TrianguloEmEspiral;
