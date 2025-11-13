produtos = [
    {   //01
        nome: "Margarida com presente",
        preco: 15.00,
        tema: "Animação&Looney Tunes&Natal&Personagem",
        foto: "fotos/foto01.jpg",
    },
    {   //02
        nome: "Sherek com o globo terrestre",
        preco: 12.00,
        tema: "Animação&Personagem",
        foto: "fotos/foto02.jpg",
    },
    {   //03
        nome: "Santíssima trindade",
        preco: 20.00,
        tema: "Natal",
        foto: "fotos/foto03.jpg",
    },
    {   //04
        nome: "Minni natalina",
        preco: 16.00,
        tema: "Animação&Looney Tunes&Natal&Personagem",
        foto: "fotos/foto04.jpg",
    },
    {   //05
        nome: "A Bela e a Fera",
        preco: 20.00,
        tema: "Princesas&Personagens",
        foto: "fotos/foto05.jpg",
    },
    {   //06
        nome: "Menininha natalina",
        preco: 18.00,
        tema: "Natal",
        foto: "fotos/foto06.jpg",
    },
    {   //07
        nome: "Coelhinha",
        preco: 16.00,
        tema: "Temático",
        foto: "fotos/foto07.jpg",
    },
    {   //08
        nome: "Coelhinho pescador",
        preco: 12.00,
        tema: "Temático",
        foto: "fotos/foto08.jpg",
    },
    {   //09
        nome: "Porquinha",
        preco: 12.00,
        tema: "Animais",
        foto: "fotos/foto09.jpg",
    },
    {   //10
        nome: "Moana",
        preco: 16.00,
        tema: "Animação&Personagem&Animação",
        foto: "fotos/foto10.jpg",
    },
    {   //11
        nome: "Frajola com Piupiu",
        preco: 18.00,
        tema: "Looney Tunes&Personagens&Animação",
        foto: "fotos/foto11.jpg",
    },
    {   //12
        nome: "Mickey natalino",
        preco: 16.00,
        tema: "Personagens&Animação&Natal",
        foto: "fotos/foto12.jpg",
    },
    {   //13
        nome: "Papai Noel",
        preco: 18.00,
        tema: "Personagens&Natal",
        foto: "fotos/foto13.jpg",
    },
    {   //14
        nome: "Pato Donald natalino",
        preco: 16.00,
        tema: "Personagens&Animação&Natal",
        foto: "fotos/foto14.jpg",
    },
    {   //15
        nome: "Pluto natalino",
        preco: 18.00,
        tema: "Personagens&Animação&Natal",
        foto: "fotos/foto15.jpg",
    },
    {   //16
        nome: "Papai Noel com brinquedos",
        preco: 20.00,
        tema: "Personagens&Natal",
        foto: "fotos/foto16.jpg",
    },
    {   //17
        nome: "Pateta natalino",
        preco: 16.00,
        tema: "Personagens&Animação&Natal",
        foto: "fotos/foto17.jpg",
    },
    {   //18
        nome: "Vovó Noel",
        preco: 16.00,
        tema: "Personagens&Natal",
        foto: "fotos/foto18.jpg",
    },
];
compras = JSON.parse(localStorage.getItem('compras')) || []



function loadCards(){
    for(i = 0; i<produtos.length; i++){

        document.getElementById("cards").innerHTML +=
        `
        <a onclick="saveCards(`+i+`)" href="produto.html">
            <img src="`+produtos[i].foto+`" alt="produto `+produtos[i].nome+`">
            <label>
                <button id='adicionar' onclick='adicionar()'>+</button>
                `+produtos[i].nome+` - <label id="preco">R$`+produtos[i].preco.toFixed(2).replace('.', ',')+`</label>
            </label>
        </a>
        `
    }

}

function saveCards(x){
    localStorage.setItem('produto', x)
}

function showCards(){
    prod_salvo = localStorage.getItem('produto')
    document.getElementById('imgNum').src = produtos[prod_salvo].foto
    document.getElementById("produtoNum").innerHTML = produtos[prod_salvo].nome
    document.getElementById('descNum').innerHTML = "<b><label id='preco'>R$"+produtos[prod_salvo].preco.toFixed(2).replace('.', ',')+"</label></b>"
}

function adicionar(){
    document.getElementById('adicionar2').style.backgroundColor = '#6e95a3ad'
    document.getElementById('adicionar2').style.border = '5px solid #32627ac7'
    document.getElementById('adicionar2').innerHTML = "ITEM ADICIONADO"

    setTimeout(() => {
        document.getElementById('adicionar2').style.backgroundColor = '#9edcf3ad'
        document.getElementById('adicionar2').style.border = '5px solid #579ec2c7';
        document.getElementById('adicionar2').innerHTML = "Adicionar ao carrinho"
    }, 750);


    compras.push(produtos[localStorage.getItem('produto')])
    localStorage.setItem('compras',JSON.stringify(compras))
}

function loadCarrinho(){
    for(i=0; i<compras.length; i++){
        document.getElementById('cardss').innerHTML +=
        `
        <div>
            <img src="`+compras[i].foto+`" alt="produto `+compras[i].nome+`">
            <label>
                `+compras[i].nome+` - <label id="preco">R$`+compras[i].preco.toFixed(2).replace('.', ',')+`</label>
            </label>
        </div>
        ` 
    }
}