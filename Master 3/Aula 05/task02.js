//txt = 'Olá! Bom dia. Como vai?'
//line = txt.length
//alert('A frase "'+txt+'" tem '+line+' caracteres')

//txt = pAbLo
//txtForm = txt[0].toUpperCase + txt.slice(1).toLowerCase
// SAIDA |-->  Pablo

//function enter(){
//    txt = document.getElementById('enter').value
//    sent = txt.length()
//
//    for(i=0; i<sent; i++){
//        document.getElementById('exit').innerHTML += '<label>'+txt[i]+'</label>'
//    }
//}

//txt = ' Bruno '
//txtForm = txt.trim()
// SAIDA = 'Bruno'


//txt = 'teclado cinza'
//Split = txt.split('c')
// SAIDA = (3) ['te', 'lado', 'inza']


//function enter(){
//    txt = document.getElementById('enter').value
//    txtForm = txt[0].toUpperCase() + txt.slice(1).toLowerCase()
//
//    Name = document.getElementById('exit').innerHTML += txtForm
//}


function enter(){
    txt = document.getElementById('inp').value
    txtF = txt.trim()
    txtFor = txtF[0].toUpperCase() + txt.slice(1).toLowerCase()
    charactersN = txtFor.length
    words = txtFor.split(' ')
    wordsN = words.length

    sent = document.getElementById('exit').innerHTML += '<label>O texto "'+txtFor+'" tem '+charactersN+' caracteres e '+wordsN+' palavras</label>' 
}