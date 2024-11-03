const { Quadrado } = require("./Quadrado")
const { Triangulo } = require("./Triangulo")
const { Retangulo } = require("./Retangulo")

function gerarTriangulos(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 2 ; tamanho--) {
        new Triangulo(tamanho, caracter).print()    
    }
}

function gerarQuadrados(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 2 ; tamanho--) {
        new Quadrado(tamanho, caracter).print()    
    }
}

function gerarRetangulos(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 2 ; tamanho--) {
        new Retangulo(tamanho, tamanho * 2, caracter).print()    
    }
}

gerarTriangulos(10, '*')
gerarQuadrados(10, '*')
gerarRetangulos(10, '*')