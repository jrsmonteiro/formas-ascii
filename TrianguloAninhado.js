class TrianguloAninhado {
    #quantidade = 0
    #tamanho = 0;
    #caracter = "*";
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
      if (this.#tamanho < 1) return;
    }
  
    #getTotalCaracteresPelaAlturaDoTriangulo(altura) {
      return altura * 2 - 1;
    }
  }
  
  exports.TrianguloAninhado = TrianguloAninhado
  