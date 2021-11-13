// buscar os itens da tela
const itensPerguntasERespostas = document.querySelectorAll(".item")

// adicionar evento de clique no elemento
itensPerguntasERespostas.forEach(function (item) {
  item.addEventListener("click", function () {
    // verificar se a pergunta clicada está ativa
    const perguntaAtiva = item.classList.contains("ativo")
    // fechar todas
    itensPerguntasERespostas.forEach(function (item) {
      item.classList.remove("ativo")
    })
    // se a pergunta não está ativa
    if (!perguntaAtiva) {
      //abrir a resposta atual
      item.classList.add("ativo")
    } else {
      // se a pergunta está ativa
      // desativar (remover a classe ativo)
      item.classList.remove("ativo")
    }
  })
})
