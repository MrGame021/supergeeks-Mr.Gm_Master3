function paintBox(cor){
    document.getElementById('box').style.backgroundColor = cor
}

function paintBox2(){
    cor = document.getElementById('cor').value
    document.getElementById('box').style.backgroundColor = cor
}

function tamanhoBox(){
    h = parseInt(document.getElementById('n1').value)
    w = parseInt(document.getElementById('n2').value)
    document.getElementById('box').style.height = h+'px'
    document.getElementById('box').style.width = w+'px'
}