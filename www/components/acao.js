// This is a JavaScript file

$(document).on("click","#somar", function(){
  var primeiroValor = $("#valor1").val();
  var segundoValor = $("#valor2").val();
  var resultadoSoma = parseInt(primeiroValor) + parseInt(segundoValor);

  $("#resultado").val(resultadoSoma);
})
