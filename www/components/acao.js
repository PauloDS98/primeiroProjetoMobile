// This is a JavaScript file


$(document).on("click","#somar", function(){
  primeiroValor = $("#valor1").val();
  segundoValor = $("#valor2").val();
  var resultadoSoma = parseInt(primeiroValor) + parseInt(segundoValor);
  $("#resultado").val(resultadoSoma);
})

$(document).on("click","#diminuir", function(){
  primeiroValor = $("#valor1").val();
  segundoValor = $("#valor2").val();
  var resultadoDiminuir = primeiroValor - segundoValor;
  $("#resultado").val(resultadoDiminuir);
})
