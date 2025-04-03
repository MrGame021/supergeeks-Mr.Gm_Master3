//frutas = ['maçã', 'uva', 'banana']

//document.writeln(frutas) = maçã,uva,banana(lista td)
//document.writeln(frutas[0]) = maçã(posição em q esta na lista)
//document.writeln(frutas[0][0]) = m(posição da letra da palavra)
//document.writeln(frutas.length) = 3(qnts elementos tem a lista)
//document.writeln(frutas[2].length) = 6(qnts letras tem o elemento selecionado)
//document.writeln(frutas.indexOf('uva')) = 1(local da lista onde a palavra ta)

//frutas.push('limao') = maçã,uva,banana,limao (add o item na lista na ultima posição)
//frutas.unshift('goiaba') = goiaba,maçã,uva,banana,limao (add o item na frente da lista)

//frutas.pop() = goiaba,maçã,uva,banana (tira o ultimo item da lista)
//frutas.shift() = maçã,uva,banana,limao (tira o 1º item da lista)
//frutas.splice(n,m) = (n == nº do indice q vai começar | m == nº de itens q vai tirar a partir do n)

//frutas.sort() = (coloca em ordem alfabética)
//frutas.reverse() = (msm cois do sort, mas de tras pra frente)

list = []
function add(){
    word = document.getElementById('enter').value
    document.getElementById('enter').value = ''

    if(list.indexOf(word) != -1){
        alert('This item is already on the list')
    }
    else{
        list.push(word)
        showWords()

    }
    


}

function showWords(){
    document.getElementById('exit').innerHTML = ''
    for(i=0; i<list.length; i++){
        document.getElementById('exit').innerHTML += '<li>'+list[i]+'  <button onclick="removeWord('+i+')">X</button></li>'
    }
    numb = document.getElementById('b').innerHTML = list.length+' ITEMS'
}

function removeWord(x){
    list.splice(x, 1)
    showWords()

}