class TrianguloInvertido {
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
      const totalCaracteresDaBase = this.#getTotalCaracteresPelaAltura(this.#tamanho);
      let indiceInicioCaracter = 0
      let totalCaracteres = totalCaracteresDaBase
      while (totalCaracteres >= 1) {
          const caracteresDaLinha = Array(totalCaracteresDaBase).fill(' ')
          for (let i = indiceInicioCaracter; i < (indiceInicioCaracter + totalCaracteres) ; i++) {
            caracteresDaLinha[i] = this.#caracter;            
          }
          this.#matriz.push(caracteresDaLinha)
          indiceInicioCaracter++
          totalCaracteres -= 2
      }
    }
  
    #getTotalCaracteresPelaAltura(altura) {
      return altura * 2 - 1;
    }
  }
  
  exports.TrianguloInvertido = TrianguloInvertido
  