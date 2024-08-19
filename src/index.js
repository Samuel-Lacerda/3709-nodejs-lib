const fs = require('fs')

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]

fs.readFile(link, 'utf-8', (erro, texto) => {
  quebraEmParagrafos(texto)
  // verificaPalavrasDuplicadas(texto)
})

function contaPalavras(texto){
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return []
    return verificaPalavrasDuplicadas(paragrafo)
  })
  console.log(contagem)
}


function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*:{}=\-_`~()]/g, '')
}

function extraiParagrafos(texto){
  return texto.toLowerCase().split('\n')
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ')
  const resultado = {}
  // objeto[propriedade] = valor
  listaPalavras.forEach(palavra => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra)
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
    }
  })
  return resultado
}