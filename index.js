
function validarFormulario() {
  var valorA = parseFloat(document.getElementById('campoA').value);
  var valorB = parseFloat(document.getElementById('campoB').value);

  if (valorB > valorA) {
    exibirMensagem("Formulário válido", "positiva");
  } else {
    exibirMensagem("Formulário inválido. O número B deve ser maior que o número A.", "negativa");
  }
}

function exibirMensagem(mensagem, classe) {
  var mensagemResultado = document.getElementById('mensagemResultado');
  mensagemResultado.textContent = mensagem;
  mensagemResultado.className = "mensagem " + classe;
}
