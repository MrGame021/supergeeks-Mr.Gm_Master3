function conFicha(){
    variaveis()
    validarFicha()
    defRaca()
    defClasse()
    mostrarFicha()
}
function variaveis(){
    fichaValida = true

    nome = document.getElementById('nome').value

    forc = parseInt(document.getElementById('for').value)
    des = parseInt(document.getElementById('des').value)
    con = parseInt(document.getElementById('con').value)
    int = parseInt(document.getElementById('int').value)
    sab = parseInt(document.getElementById('sab').value)
    car = parseInt(document.getElementById('car').value)
    somaTodos = forc + des + con + int + car

    nvlPs = parseInt(document.getElementById('nvl').value)

    raca = document.getElementById('raca').value
    classe = document.getElementById('classe').value
    arma = document.getElementById('arma').value
}
function validarFicha(){

    if(nome == ''){
        alert('Você é obrigado a colocar um nome no seu personagem')
        fichaValida = false
    }
    else if(forc<10||des<10||con<10||int<10||car<10){
        alert('Você não pode burlar as regras.\nEssa ficha não permite atributos negativos!')
        fichaValida = false
    }
    else if(forc>80||des>80||con>80||int>80||car>80){
        alert('Você não pode burlar as regras.\nEssa ficha não permite atributos mais altos do que 80 pontos!')
        fichaValida = false
    }
    else if(somaTodos > 80){
        alert('Você ultrapassou o limite de pontos fornecidos.\nVocê gastou '+somaTodos+' pontos, ao invéz de 8 pontos.\n\nReplaneje seus atributos')
        fichaValida = false
    }
    else if(arma == 'Desarmado'){
        a = confirm('Você concorda em ir a um mundo fantasia com vários inimigos fortes desarmado?\nSe sua resposta for sim, clique na opção "Ok".\nSe quiser escolher melhor, clique em "Cancelar"')
        if(a == false){
            fichaValida = false
        }
    }
    
}
function defRaca(){

    if(raca == 'Anao'){
        forPs = (forc-10)/2
        desPs = (des-10)/2-1
        conPs = (con-10)/2+2
        intPs = (int-10)/2
        sabPs = (sab-10)/2+1
        carPs = (car-10)/2
    }
    else if(raca == 'Elfo'){
        forPs = (forc-10)/2
        desPs = (des-10)/2+1
        conPs = (con-10)/2-1
        intPs = (int-10)/2+2
        sabPs = (sab-10)/2
        carPs = (car-10)/2
    }
    else if(raca == 'Medusa'){
        forPs = (forc-10)/2
        desPs = (des-10)/2+2
        conPs = (con-10)/2
        intPs = (int-10)/2
        sabPs = (sab-10)/2
        carPs = (car-10)/2+1
    }

}
function defClasse(){
    if(classe == 'Cacador'){
        pvPs = 16+nvlPs*(4+conPs)
        pmPs = 4*nvlPs
    }
    else if(classe == 'Guerreiro'){
        pvPs = 20+nvlPs*(5+conPs)
        pmPs = 3*nvlPs
    }
    else if(classe == 'Ladino'){
        pvPs = 12+nvlPs*(3+conPs)
        pmPs = 4*nvlPs
    }

}
function mostrarFicha(){
    if(fichaValida == true){
        document.getElementById('ficha').style.display = 'none'
        document.getElementById('fichaP').style.display = 'block'
        document.getElementById('nomeP').innerHTML = nome[0].toUpperCase() + nome.slice(1).toLowerCase()
        document.getElementById('forP').innerHTML = forPs+"["+forc+"]"
        document.getElementById('desP').innerHTML = desPs+"["+des+"]"
        document.getElementById('conP').innerHTML = conPs+"["+con+"]"
        document.getElementById('intP').innerHTML = intPs+"["+int+"]"
        document.getElementById('sabP').innerHTML = sabPs+"["+sab+"]"
        document.getElementById('carP').innerHTML = carPs+"["+car+"]"

        document.getElementById('nvlP').innerHTML = nvlPs
        document.getElementById('pvP').innerHTML = pvPs
        document.getElementById('pmP').innerHTML = pmPs
    }
}