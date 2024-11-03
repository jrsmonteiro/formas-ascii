/*

1 *

1  *
2 ***
3  *

1   *
2  ***
3 *****
4  ***
5   *

*/




class Losango {
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
      const totalCaracteresDoCentro = this.#getTotalCaracteresPelaAlturaDoTriangulo(this.#tamanho);
      this.#preencherTrianguloSuperior(totalCaracteresDoCentro)
      this.#preencherTrianguloInferior(totalCaracteresDoCentro)
    }

    #preencherTrianguloSuperior(totalCaracteresDoCentro) {
      let indiceInicioCaracter = this.#tamanho - 1;
      let totalCaracteres = 1
      while (totalCaracteres <= totalCaracteresDoCentro) {
          const caracteresDaLinha = Array(totalCaracteresDoCentro).fill(' ')
          for (let i = indiceInicioCaracter; i < (indiceInicioCaracter + totalCaracteres) ; i++) {
            caracteresDaLinha[i] = this.#caracter;            
          }
          this.#matriz.push(caracteresDaLinha)          
          indiceInicioCaracter--
          totalCaracteres += 2
      }
    }

    #preencherTrianguloInferior(totalCaracteresDoCentro) {
      let indiceInicioCaracter = 1
      let totalCaracteres = totalCaracteresDoCentro - 2
      while (totalCaracteres >= 1) {
        const caracteresDaLinha = Array(totalCaracteresDoCentro).fill(' ')
        for (let i = indiceInicioCaracter; i < (indiceInicioCaracter + totalCaracteres) ; i++) {
          caracteresDaLinha[i] = this.#caracter;            
        }
        this.#matriz.push(caracteresDaLinha)
        indiceInicioCaracter++
        totalCaracteres -= 2
      }
    }
  
    #getTotalCaracteresPelaAlturaDoTriangulo(altura) {
      return altura * 2 - 1;
    }
  }
  
  exports.Losango = Losango
  