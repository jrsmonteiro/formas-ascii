class Retangulo {
    #tamanhoDaBase = 0;
    #tamanhoDaAltura = 0;
    #caracter = "*";
    #matriz = [];
  
    constructor(tamanhoDaBase, tamanhoDaAltura, caracter = "*") {
      this.#tamanhoDaBase = tamanhoDaBase;
      this.#tamanhoDaAltura = tamanhoDaAltura;
      this.#caracter = caracter;
      this.#gerarMatriz();
    }
  
    print() {
      this.#matriz.forEach((linha) => console.log(linha.join(" ")));
      console.log('');      
    }
  
    #gerarMatriz() {
      if (this.#tamanhoDaBase < 1) return;
      this.#matriz = Array(this.#tamanhoDaBase);
      for (let alturaAtual = 1; alturaAtual <= this.#tamanhoDaAltura; alturaAtual++) {
        this.#matriz[alturaAtual - 1] = Array(this.#tamanhoDaBase).fill(this.#caracter)
      }
    }
  }
  
  exports.Retangulo = Retangulo
  