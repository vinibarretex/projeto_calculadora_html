function insert(num){ //essa function faz com que o clique em um botão seja inserido no campo do resultado
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){ //limpa a caixa inteira
    document.getElementById('resultado').innerHTML = ""
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){ //verifica se tem algum valor na caixa
        document.getElementById('resultado').innerHTML = eval(resultado) //faz o cálculo
    } else {
        document.getElementById('resultado').innerHTML = "Não há nada para calcular"
    }
}