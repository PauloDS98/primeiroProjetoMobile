// This is a JavaScript file
$(document).on('change',"#valor1", function(){
  primeiroValor = $("#valor1").val();
})

$(document).on('change',"#valor2", function(){
  segundoValor = $("#valor2").val();
})

//função somar
$(document).on("click","#somar", function(){
  var resultadoSoma = parseInt(primeiroValor) + parseInt(segundoValor);
  $("#resultado").val(resultadoSoma);
})

//função diminuir
$(document).on("click","#diminuir", function(){
  var resultadoDiminuir = primeiroValor - segundoValor;
  $("#resultado").val(resultadoDiminuir);
})

//função multiplicar
$(document).on("click","#multiplicar", function(){
  var resultadoMultiplicar = primeiroValor * segundoValor;
  $("#resultado").val(resultadoMultiplicar);
})