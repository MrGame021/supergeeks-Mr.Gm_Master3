function add(){
    item = document.getElementById('item').value

    if(item.toLowerCase() == 'super'){
        document.getElementById('items').innerHTML += '<label class="super">'+item+'</label>'
    }
    else{
        document.getElementById('items').innerHTML += '<label>'+item+'</label>'
    }

    if(item.toLowerCase() == 'apagar' || item.toLowerCase() == 'clear'){
        document.getElementById('items').innerHTML = ''
    }
    item = document.getElementById('item').value = ''
}