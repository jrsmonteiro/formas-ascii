class LosangoEmEspiral {
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

    // Preenche as espirais para cada losango
    while (quantidadeAtual > 0) {
      // Barras descendo para esquerda
      while (barrasInseridas < qtdBarras) {
        this.#matriz[y][x] = "/";
        barrasInseridas++;
        x--;
        y++;
      }

      // Barras descendo para direita
      x++;
      qtdBarras++;
      barrasInseridas = 0;
      while (barrasInseridas < qtdBarras) {
        this.#matriz[y][x] = "\\";
        barrasInseridas++;
        x++;
        y++;
      }

      // Barras subindo para direita
      y--;
      barrasInseridas = 0;
      while (barrasInseridas < qtdBarras) {
        this.#matriz[y][x] = "/";
        barrasInseridas++;
        x++;
        y--;
      }

      // Barras subindo para esquerda
      x--;
      qtdBarras--;
      barrasInseridas = 0;
      while (barrasInseridas < qtdBarras) {
        this.#matriz[y][x] = "\\";
        barrasInseridas++;
        x--;
        y--;
      }

      // Barras descendo para esquerda novamente,
      // complentando a espiral
      y++;
      barrasInseridas = 0;
      while (barrasInseridas < qtdBarras) {
        this.#matriz[y][x] = "/";
        barrasInseridas++;
        x--;
        y++;
      }

      qtdBarras = qtdBarras - 2;
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
    return quantidade * 4;
  }

  #getDimensaoEixoY(quantidade) {
    return quantidade * 4 - 1;
  }

  #getIndiceXinicial(quantidade) {
    return (quantidade - 1) * 2;
  }

  #getQtdBarrasInicial(quantidade) {
    return quantidade * 2 - 1;
  }
}

exports.LosangoEmEspiral = LosangoEmEspiral;
