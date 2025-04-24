// sorteador >> Math.floor(Math.random()*?)+?
function numberAdd(){
    document.getElementById('output').innerHTML = ''
    n = document.getElementById('n').value
    document.getElementById('output').innerHTML += '<ul>'
    for(i=0; i<11; i++){
        document.getElementById('output').innerHTML +=
        n+' x '+i+' = '+(n*i)+'<br>'
    }
    document.getElementById('output').innerHTML += '</ul><br>'
}
function makeDec(){
    document.getElementById('exit').innerHTML = '<br>'

    p1 = parseInt(document.getElementById('x').value)
    pc = Math.floor(Math.random()*3)+1

    if(p1 <= 0 || p1 >= 4){
        alert('O número não está nas opções apresentadas. Tente novamente')
    }
    else if(p1 == 1 && pc == 1){
        document.getElementById('exit').innerHTML += 
        'Player: Pedra<br>Computer: Pedra<br>Resultado: Empate'
    }
    else if(p1 == 1 && pc == 2){
        document.getElementById('exit').innerHTML += 
        'Player: Pedra<br>Computer: Papel<br>Resultado: Computer Wins'
    }
    else if(p1 == 1 && pc == 3){
        document.getElementById('exit').innerHTML += 
        'Player: Pedra<br>Computer: Tesoura<br>Resultado: Player Wins'
    }
    else if(p1 == 2 && pc == 1){
        document.getElementById('exit').innerHTML += 
        'Player: Papel<br>Computer: Pedra<br>Resultado: Player Wins'
    }
    else if(p1 == 2 && pc == 2){
        document.getElementById('exit').innerHTML += 
        'Player: Papel<br>Computer: Papel<br>Resultado: Empate'
    }
    else if(p1 == 2 && pc == 3){
        document.getElementById('exit').innerHTML += 
        'Player: Papel<br>Computer: Tesoura<br>Resultado: Computer Wins'
    }
    else if(p1 == 3 && pc == 1){
        document.getElementById('exit').innerHTML += 
        'Player: Tesoura<br>Computer: Pedra<br>Resultado: Computer Wins'
    }
    else if(p1 == 3 && pc == 2){
        document.getElementById('exit').innerHTML += 
        'Player: Tesoura<br>Computer: Papel<br>Resultado: Player Wins'
    }
    else if(p1 == 3 && pc == 3){
        document.getElementById('exit').innerHTML += 
        'Player: Tesoura<br>Computer: Tesoura<br>Resultado: Empate' 
    }
}