class LosangoAninhado {
    #quantidade = 0
    #matriz = [];
  
    constructor(quantidade) {
      this.#quantidade = quantidade
      this.#gerarMatriz();
    }
  
    print() {
      this.#matriz.forEach((linha) => console.log(linha.join("")));
      console.log('');      
    }
  
    #gerarMatriz() {
      if (this.#quantidade < 1) return;
      const dimensao = this.#getDimensaoDaMatriz(this.#quantidade)
      this.#matriz = this.#getMatrizVazia(dimensao)
      const indiceCentral = this.#getIndiceCentral(this.#quantidade)    
      let indiceLinhaDaMatriz = 0
      let numLosangulo = this.#quantidade;
      while(numLosangulo >= 1) {
        const totalDeBarras = this.#getQtdBarras(numLosangulo)

        // Parte superior
        let numBarra = 1
        let indiceLinhaDaBarra = indiceLinhaDaMatriz
        let indiceBarraDaEsquerda = indiceCentral
        let indiceBarraDaDireita = indiceBarraDaEsquerda + 1
        while (numBarra <= totalDeBarras) {
          this.#matriz[indiceLinhaDaBarra][indiceBarraDaEsquerda] = '/'
          this.#matriz[indiceLinhaDaBarra][indiceBarraDaDireita] = '\\'
          indiceLinhaDaBarra++
          indiceBarraDaEsquerda--
          indiceBarraDaDireita++
          numBarra++
        }

        // Parte inferior
        numBarra = 1
        indiceBarraDaEsquerda++
        indiceBarraDaDireita--
        while (numBarra <= totalDeBarras) {
          this.#matriz[indiceLinhaDaBarra][indiceBarraDaEsquerda] = '\\'
          this.#matriz[indiceLinhaDaBarra][indiceBarraDaDireita] = '/'
          indiceLinhaDaBarra++
          indiceBarraDaEsquerda++
          indiceBarraDaDireita--
          numBarra++   
        }

        numLosangulo--
        indiceLinhaDaMatriz += 2
      }
    }

    #getMatrizVazia(dimensao) {
      const matriz = Array(dimensao)
      for (let indice = 0; indice < dimensao; indice++) {
        matriz[indice] = Array(dimensao).fill(' ');        
      }
      return matriz;
    }

    #getDimensaoDaMatriz(quantidade) {
      return (quantidade * 4) - 2
    }

    #getIndiceCentral(quantidade) {
      return (quantidade - 1) * 2
    }

    #getQtdBarras(numLosangulo) {
      return (numLosangulo * 2) - 1
    }

  }
  
  exports.LosangoAninhado = LosangoAninhado
  