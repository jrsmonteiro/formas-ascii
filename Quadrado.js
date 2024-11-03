class Quadrado {
    #tamanho = 0;
    #caracter = "*";
    #matriz = [];
  
    constructor(tamanho, caracter = "*") {
      this.#tamanho = tamanho;
      this.#caracter = caracter;
      this.#gerarMatriz();
    }
  
    print() {
      this.#matriz.forEach((linha) => console.log(linha.join(" ")));
      console.log('');
      
    }
  
    #gerarMatriz() {
      if (this.#tamanho < 1) return;
      this.#matriz = Array(this.#tamanho);
      for (let alturaAtual = 1; alturaAtual <= this.#tamanho; alturaAtual++) {
        this.#matriz[alturaAtual - 1] = Array(this.#tamanho).fill(this.#caracter)
      }
    }
  }
  
  exports.Quadrado = Quadrado
  