const { Quadrado } = require("./Quadrado")
const { Triangulo } = require("./Triangulo")
const { Retangulo } = require("./Retangulo")
const { TrianguloInvertido } = require("./TrianguloInvertido")
const { Losango } = require("./Losango")
const { LosangoAninhado } = require("./LosangoAninhado")
const { TrianguloAninhado } = require("./TrianguloAninhado")
const { LosangoEmEspiral } = require("./LosangoEmEspiral")
const { TrianguloEmEspiral } = require("./TrianguloEmEspiral")

function gerarTriangulos(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 2 ; tamanho--) {
        new Triangulo(tamanho, caracter).print()    
    }
}

function gerarTriangulosInvertidos(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 2 ; tamanho--) {
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
        new Retangulo(tamanho * 2, tamanho, caracter).print()    
    }
}

function gerarLosangos(tamanhoInicial, caracter = "*") {
    for (let tamanho = tamanhoInicial; tamanho >= 2 ; tamanho--) {
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

function gerarLosangosEmEspiral(quantidadeIncial) {
    for (let quantidade = quantidadeIncial; quantidade >= 1 ; quantidade--) {
        new LosangoEmEspiral(quantidade).print()    
    }
}

function gerarTriangulosEmEspiral(quantidadeIncial) {
    for (let quantidade = quantidadeIncial; quantidade >= 1 ; quantidade--) {
        new TrianguloEmEspiral(quantidade).print()    
    }
}

// gerarTriangulos(7, '*')
// gerarTriangulosInvertidos(7, '*')
// gerarQuadrados(7, '#')
// gerarRetangulos(7, '*')
// gerarLosangos(6, '*')
// gerarLosangosAninhados(4)
// gerarTriangulosAninhados(4)
// gerarLosangosEmEspiral(4)
gerarTriangulosEmEspiral(5)
