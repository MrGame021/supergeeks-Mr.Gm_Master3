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
    
}

function showItem(){
    document.getElementById('backpack').innerHTML = ''
    for(i=0; i<backpack.length; i++){
        document.getElementById('backpack').innerHTML +=
        '<li><div id="item'+i+'">'+backpack[i]+'</div>  <button onclick="editItem('+i+')">E</button>  <button onclick="removeItem('+i+')">X</button></li>'
    }
    n = document.getElementById('b').innerHTML = backpack.length+'/'+size+' ITEMS'
}

function removeItem(x){
    backpack.splice(x, 1)
    showItem()

}