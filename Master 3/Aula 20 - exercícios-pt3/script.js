function ex1(){
    nome = document.getElementById('ex1-nome').value
    document.getElementById('ex1-saida').innerHTML = 'Olá '+nome+'!'
}
function ex2(){
    ex2_n1 = parseInt(document.getElementById('ex2-n1').value)
    ex2_n2 = parseInt(document.getElementById('ex2-n2').value)
    ex2_Soma = ex2_n1+ex2_n2

    document.getElementById('ex2-saida').innerHTML = 'A soma dos números '+ex2_n1+' e '+ex2_n2+' é '+ex2_Soma+'.'
}
function ex3(){
    ex3_n1 = parseInt(document.getElementById('ex3-n1').value)
    if(ex3_n1 >= 0){
        document.getElementById('ex3-saida').innerHTML = 'O número '+ex3_n1+' é <b>POSITIVO</b>'
    }
    else{
        document.getElementById('ex3-saida').innerHTML = 'O número '+ex3_n1+' é <b>NEGAIVO</b>'
    }
}
function ex4(){
    ex4_t1 = document.getElementById('ex4-t1').value
    t1Carac = ex4_t1.length

    document.getElementById('ex4-saida').innerHTML = 'O texto escrito tem '+t1Carac+' caracteres'
}
function ex5(){
    ex5_n1 = parseInt(document.getElementById('ex5-n1').value)
    document.getElementById('ex5-saida').innerHTML = ''
    for(i=1; i<=ex5_n1; i++){
        document.getElementById('ex5-saida').innerHTML += i+' '
    }
}
function ex6(){
    cor = document.getElementById('cor').value
    document.getElementById("ex6-saida").style.backgroundColor = cor
}
function ex7(){
    ex7_n1 = Math.floor(Math.random()*20)+1
    document.getElementById('ex7-saida').innerHTML = 'Número sorteado foi '+ex7_n1+'!'
}
ex8_lista = []
function ex8(){
    ex8_n1 = parseInt(document.getElementById('ex8-n1').value.trim())
    ex8_lista.push(ex8_n1)
    document.getElementById('ex8-saida').innerHTML = ex8_lista 
}
ex9_lista = []
function ex9(){
    ex9_n1 = parseInt(document.getElementById('ex9-n1').value.trim())
    ex9_lista.push(ex9_n1)

    ex9_quant = ex9_lista.length
    ex9_maior = Math.max(...ex9_lista)
    ex9_menor = Math.min(...ex9_lista)
    ex9_soma = ex9_lista.reduce((a,b) => a+b)
    ex9_media = ex9_soma/ex9_quant

    document.getElementById('ex9-saida').innerHTML = 
    '<b>'+ex9_lista+'</b><hr>Quantidade: '+ex9_quant+'<br>Maior: '+ex9_maior+'<br>Menor: '+ex9_menor+'<br>Soma: '+ex9_soma+'<br>Média: '+ex9_media.toFixed(2) 
}
function ex10(){
    ex10_txt1 = document.getElementById('ex10-txt1').value

    ex10_quant = (ex10_txt1.length)
    ex10_frase = ex10_txt1.split(' ')
    ex10_palav = ex10_frase.length
    ex10_priCarac = ex10_txt1[0]
    ex10_ultCarac = ex10_txt1[ex10_quant-1]
    ex10_vogais = ex10_txt1.match(/[aeiouáéíóúàèìòùãõâêîôû]/gi).length

    document.getElementById('ex10-saida').innerHTML =
    ex10_txt1+
    '<hr><b>Quantidade de catacteres:</b> '+ex10_quant+
    '<br><b>Quantidade de palavras:</b> '+ex10_palav+
    '<br><b>Primeiro caractere:</b> '+ex10_priCarac+
    '<br><b>Último caractere:</b> '+ex10_ultCarac+
    '<br><b>Quantidade de Vogais:</b>: '+ex10_vogais
}