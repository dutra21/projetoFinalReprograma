// INSCRIÇÕES
var formulario = document.querySelector(".form-horizontal");
formulario.onsubmit = enviarMensagem;

// criar a função para enviar a mensagem
function enviarMensagem(){
  var inputForm = formulario.querySelectorAll(".inputForm");
  var inputCampo = formulario.querySelectorAll(".form-group");
  var inputCheck = formulario. querySelector(".inputCheck");
  var inscricoes = document.querySelector("#inscricoes");
  var inscritos = document.querySelector("#inscritos");
  var formularioValido = true;

  // validar os inputForm
  for (var i = 0; i < inputForm.length; i++) {
    var input = inputForm[i];

    if (input.value == "" || input.value == "ESTADO" || input.value == "MODALIDADE") {
      input.parentNode.parentNode.classList.add("has-error");
      formularioValido = false;
    }else{
      if(formularioValido && i == inputForm.length - 1 && inputCheck.checked) {
        input.parentNode.parentNode.classList.remove("has-error");
        inscritos.classList.remove("hidden");
        inscricoes.classList.add("hidden");
      }
    }
  }

  // validar o inputCheck
  if (inputCheck.checked == false) {
    inputCheck.parentNode.parentNode.classList.add("has-error");
    formularioValido = false;
  }else if(inputCheck.checked && formularioValido){
    inputCheck.parentNode.parentNode.classList.remove("has-error");
    inscritos.classList.remove("hidden");
    inscricoes.classList.add("hidden");
  }

  if(formularioValido) {
    criarBalao();
  }

  formularioValido = true;

  return false;
}

// criar o balão que vai a mensagem
function criarBalao(){
  var nome = document.querySelector("#inputName");
  var derbyName = document.querySelector("#inputDerby");

  // criar a div mensagem
  var mensagens = document.querySelector(".mensagens");
  var div = document.createElement("div");
  div.classList.add("mensagem");
  mensagens.appendChild(div);

  div.innerHTML = "<h4>"+nome.value+"</h4><p>"+derbyName.value+"</p>";

  nome.value = "";
  derbyName = "";
}

// JQUERY
// animação do scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});