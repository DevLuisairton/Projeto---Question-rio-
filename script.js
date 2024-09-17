const perguntas = [
  {
    pergunta: "Qual é a função do método 'console.log()' em JavaScript?",
    respostas: [
      "A) Exibir uma mensagem de erro no console",
      "B) Exibir uma mensagem de alerta na tela",
      "C) Exibir uma mensagem no console do navegador",
    ],
    correta: 2
  },
  {
    pergunta: "Qual desses não é um tipo de dado em JavaScript?",
    respostas: [
      "A) Number",
      "B) Float",
      "C) String",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o operador lógico 'E' em JavaScript?",
    respostas: [
      "A) &&",
      "B) ||",
      "C) !",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
    respostas: [
      "A) Adicionar um elemento ao documento HTML",
      "B) Adicionar um evento a um elemento HTML",
      "C) Adicionar um atributo a um elemento HTML",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
    respostas: [
      "A) 10",
      "B) 7",
      "C) '35'",
    ],
    correta: 2
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "A) let",
      "B) const",
      "C) var",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
    respostas: [
      "A) ==",
      "B) ===",
      "C) =",
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'charAt()' faz em JavaScript?",
    respostas: [
      "A) Retorna o último caractere de uma string",
      "B) Retorna o primeiro caractere de uma string",
      "C) Retorna o caractere em uma posição específica de uma string",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o método usado para converter uma string em um número em JavaScript?",
    respostas: [
      "A) parseInt()",
      "B) toString()",
      "C) toNumber()",
    ],
    correta: 0
  },
  {
    pergunta: "O que o operador '++' faz em JavaScript?",
    respostas: [
      "A) Incrementa o valor de uma variável em 1",
      "B) Decrementa o valor de uma variável em 1",
      "C) Verifica se duas variáveis são iguais",
    ],
    correta: 0
  },
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

// loop ou laço de repetição 
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute("name", "perguntas-" + perguntas.indexOf(item))
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
     
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }

    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

