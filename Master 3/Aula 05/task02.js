//txt = 'Olá! Bom dia. Como vai?'
//line = txt.length
//alert('A frase "'+txt+'" tem '+line+' caracteres')

//txt = pAbLo
//txtForm = txt[0].toUpperCase + txt.slice(1).toLowerCase
// SAIDA |-->  Pablo

//function enter(){
//    txt = document.getElementById('enter').value
//    sent = txt.length
//
//    for(i=0; i<sent; i++){
//        document.getElementById('exit').innerHTML += '<label>'+txt[i]+'</label>'
//    }
//}


function enter(){
    txt = document.getElementById('enter').value
    txtForm = txt[0].toUpperCase() + txt.slice(1).toLowerCase()

    Name = document.getElementById('exit').innerHTML += txtForm
}

