//var valorjantar = Number(prompt("Valor do Jantar: "));

//var garcom = valorjantar *0.10;

//var total = valorjantar + garcom

//alert("A conta deu " + total.toFixed(2))

var botao = document.getElementById("calcular");

function inicio () {
    var valorJantar = Number(prompt("valor do jantar: "));
    
    var porcentagem = valorJantar *0.10;
    
    var total = valorJantar + porcentagem;

    var resultado = document.getElementById("resultado");

    resultado.innerHTML = `O valor total do jantar é de R$ ${total}`
}