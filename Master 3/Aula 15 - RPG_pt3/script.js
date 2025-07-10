function conFicha(){
    fichaValida = true
    nome = document.getElementById('nome').value;
    //ver como fazer modal
    forc = parseInt(document.getElementById('for').value)
    des = parseInt(document.getElementById('des').value)
    con = parseInt(document.getElementById('con').value)
    int = parseInt(document.getElementById('int').value)
    car = parseInt(document.getElementById('car').value)
    somaTodos = forc + des + con + int + car
    pv = 0
    pm = 0
    nvl = 1


    arma = document.getElementById('arma').value

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

    if(classe == 'Cacador'){
        pvPs = 16+nvl*(4+con)
        pmPs = 4*nvl
    }
    else if(classe == 'Guerreiro'){
        pvPs = 20+nvl*(5+con)
        pmPs = 3*nvl
    }
    else if(classe == 'Ladino'){
        pvPs = 12+nvl*(3+con)
        pmPs = 4*nvl
    }


    if(fichaValida == true){
        document.getElementById('ficha').style.display = 'none'
        document.getElementById('fichaP').style.display = 'block'
        document.getElementById('nomeP').innerHTML = nome[0].toUpperCase() + nome.slice(1).toLowerCase()
        document.getElementById('forP').innerHTML = forPs
        document.getElementById('desP').innerHTML = desPs
        document.getElementById('conP').innerHTML = conPs
        document.getElementById('intP').innerHTML = intPs
        document.getElementById('sabP').innerHTML = sabPs
        document.getElementById('carP').innerHTML = carPs

    }

}