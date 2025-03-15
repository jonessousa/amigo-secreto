const amigos = []

// Função para adicionar um nome à lista
function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo")
  const nome = inputAmigo.value.trim()
  
  if (nome === "") {
    alert("Por favor, adicione um nome válido.")
    return
  }
  
  // Adiciona o nome ao array
  amigos.push(nome)
  
  // Cria um elemento da lista
  const listaAmigos = document.getElementById("listaAmigos")
  const li = document.createElement("li")
  li.textContent = nome
  listaAmigos.appendChild(li)
  
  // Limpa o input após adicionar
  inputAmigo.value = ""
  inputAmigo.focus()
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione ao menos um amigo para sortear.")
    return
  }
  
  // Seleciona um nome aleatório do array
  const indiceAleatorio = Math.floor(Math.random() * amigos.length)
  const amigoSorteado = amigos[indiceAleatorio]
  
  // Exibe o nome sorteado na área de resultado
  const resultadoEl = document.getElementById("resultado")
  resultadoEl.textContent = amigoSorteado
}
