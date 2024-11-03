const { Quadrado } = require("./Quadrado")
const { Triangulo } = require("./Triangulo")
const { Retangulo } = require("./Retangulo")
const { TrianguloInvertido } = require("./TrianguloInvertido")
const { Losango } = require("./Losango")
const { LosangoAninhado } = require("./LosangoAninhado")
const { TrianguloAninhado } = require("./TrianguloAninhado")

function gerarTriangulos(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 1 ; tamanho--) {
        new Triangulo(tamanho, caracter).print()    
    }
}

function gerarTriangulosInvertidos(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 1 ; tamanho--) {
        new TrianguloInvertido(tamanho, caracter).print()    
    }
}

function gerarQuadrados(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 2 ; tamanho--) {
        new Quadrado(tamanho, caracter).print()    
    }
}

function gerarRetangulos(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 1 ; tamanho--) {
        new Retangulo(tamanho, tamanho * 2, caracter).print()    
    }
}

function gerarLosangos(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 1 ; tamanho--) {
        new Losango(tamanho, caracter).print()    
    }
}

function gerarLosangosAninhados(quantidadeIncial) {
    for (let quantidade = quantidadeIncial; quantidade >= 1 ; quantidade--) {
        new LosangoAninhado(quantidade).print()    
    }
}

function gerarTriangulosAninhados(quantidadeIncial) {
    for (let quantidade = quantidadeIncial; quantidade >= 1 ; quantidade--) {
        new TrianguloAninhado(quantidade).print()    
    }
}

// gerarTriangulos(10, '*')
// gerarTriangulosInvertidos(10, '*')
// gerarQuadrados(10, '*')
// gerarRetangulos(10, '*')
// gerarLosangos(10, '*')
// gerarLosangosAninhados(10)
gerarTriangulosAninhados(2)
