backpack = []
size = 5

function addItem(){
    item = document.getElementById('item').value.trim()
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()
    document.getElementById('item').value = ''

    if(backpack.length >= size){
        alert('Backpack is full')
    }
    else if(backpack.indexOf(item) != -1){
        alert('This item is already on the list')
    }
    else{
        backpack.push(item)
        showItem()
    }
}

function editItem(i){

    if(document.getElementById('item'+i).innerHTML == backpack[i]){
        document.getElementById('item'+i).innerHTML = '<input id="edited'+i+'" type="text" value="'+backpack[i]+'">'
    }
    else{
        item = document.getElementById('edited'+i).value
        item = item[0].toUpperCase() + item.slice(1).toLowerCase()

        if(backpack.indexOf(item) != -1){
            alert('This item is aready on the list')
        }
        else{
            backpack[i] = item
        }
        showItem()
    }
}

function showItem(){
    document.getElementById('backpack').innerHTML = ''
    for(i=0; i<backpack.length; i++){
        document.getElementById('backpack').innerHTML +=
        '<li><div id="item'+i+'">'+backpack[i]+'</div>  <div class="botoesLista"><button id="botao" onclick="editItem('+i+')">E</button><button id="botao" onclick="removeItem('+i+')">X</button><button id="botao" onclick="upItem('+i+')">ᐱ</button><button id="botao" onclick="downItem('+i+')">ᐯ</button></div></li>'
    }
    n = document.getElementById('b').innerHTML = backpack.length+'/'+size+' ITEMS <div>-</div> <button id="botao2" onclick="resetList()">CLEAR LIST</button>'
}

function removeItem(i){
    backpack.splice(i, 1)
    showItem()

}

function downItem(i){
    if(i == backpack.length-1){
        alert('This item aready stay in finishing list')
    }
    else{
        z = backpack[i]
        backpack[i] = backpack[i+1]
        backpack[i+1] = z
        showItem()
    }
}

function upItem(i){
        if(i == 0){
        alert('This item aready stay in starting list')
    }
    else{
        z = backpack[i]
        backpack[i] = backpack[i-1]
        backpack[i-1] = z
        showItem()
    }
}

function resetList(){
    backpack = []
    showItem()
}