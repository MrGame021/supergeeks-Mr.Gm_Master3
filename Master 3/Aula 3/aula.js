function teste(){
    nome = document.getElementById('nome').value
    alert('Olá '+nome)
}
function soma(){
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)
    add = n1+n2
    //alert('a soma de '+n1+' e '+n2+' é igual a '+add)
    document.getElementById('resultado').innerHTML = 'A soma de <b>'+n1+'</b> e <b>'+n2+'</b> é igual a <b>'+add+'</b>'
}
function numb(){
    nota = parseFloat(document.getElementById('nota').value)
    if(nota < 0 || nota  > 10){
        document.getElementById('result3').innerHTML = 'Valor inválido(valor entre 0 e 10).'
    }
    else{
        if(nota >= 7){
            document.getElementById('result3').innerHTML = 'Você foi aprovado para ir para o próximo ano'
        }
        else if(nota >=5){
            document.getElementById('result3').innerHTML = 'Você não foi aprovado, mas ficou em recuperação. Estude e se esforce para conseguir passar de ano.'
        }
        else{
            document.getElementById('result3').innerHTML = 'Você não foi aprovado para ir para o proximo ano. Tente novamente no próximo ano.'
        }
    }
}
function res4(){
    word = document.getElementById('word').value
    number = parseInt(document.getElementById('number').value)

    for(i=0; i<number; i++){
        document.getElementById('result4').innerHTML += word
    }
}