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
    list.shift()
    word = document.getElementById('enter').value
    list.push(word)

    exit = document.getElementById('exit').innerHTML += '<li>'+list+'</li>'
}