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
    document.getElementById('ex9-saida').innerHTML = 
    
    '<b>'+ex9_lista+'</b><hr>Quantidade: '+ex9_lista.length+'<br>Maior: '+ex9_lista+'<br>Menor: '+ex9_lista+'<br>Soma: '+ex9_lista+'<br>Média: '+ex9_lista 
}