produtos = [
    {   //01
        nome: "Margarida com presente",
        preco: 15.00,
        tema: "Animação&Looney Tunes&Natal&Personagem",
        foto: "foto01.jpg",
    },
    {   //02
        nome: "Sherek com o globo terrestre",
        preco: 12.00,
        tema: "Animação&Personagem",
        foto: "foto02.jpg",
    },
    {   //03
        nome: "Santíssima trindade",
        preco: 20.00,
        tema: "Natal",
        foto: "foto03.jpg",
    },
    {   //04
        nome: "Minni natalina",
        preco: 16.00,
        tema: "Animação&Looney Tunes&Natal&Personagem",
        foto: "foto04.jpg",
    },
    {   //05
        nome: "A Bela e a Fera",
        preco: 20.00,
        tema: "Princesas&Personagens",
        foto: "foto05.jpg",
    },
    {   //06
        nome: "Menininha natalina",
        preco: 18.00,
        tema: "Natal",
        foto: "foto06.jpg",
    },
    {   //07
        nome: "Coelhinha",
        preco: 16.00,
        tema: "Temático",
        foto: "foto07.jpg",
    },
    {   //08
        nome: "Coelhinho pescador",
        preco: 12.00,
        tema: "Temático",
        foto: "foto08.jpg",
    },
    {   //09
        nome: "Porquinha",
        preco: 12.00,
        tema: "Animais",
        foto: "foto09.jpg",
    },
    {   //10
        nome: "Moana",
        preco: 16.00,
        tema: "Animação&Personagem&Animação",
        foto: "foto10.jpg",
    },
    {   //11
        nome: "Frajola com Piupiu",
        preco: 18.00,
        tema: "Looney Tunes&Personagens&Animação",
        foto: "foto11.jpg",
    },
    {   //12
        nome: "Mickey natalino",
        preco: 16.00,
        tema: "Personagens&Animação&Natal",
        foto: "foto12.jpg",
    },
    {   //13
        nome: "Papai Noel",
        preco: 18.00,
        tema: "Personagens&Natal",
        foto: "foto13.jpg",
    },
    {   //14
        nome: "Pato Donald natalino",
        preco: 16.00,
        tema: "Personagens&Animação&Natal",
        foto: "foto14.jpg",
    },
    {   //15
        nome: "Pluto natalino",
        preco: 18.00,
        tema: "Personagens&Animação&Natal",
        foto: "foto15.jpg",
    },
    {   //16
        nome: "Papai Noel com brinquedos",
        preco: 20.00,
        tema: "Personagens&Natal",
        foto: "foto16.jpg",
    },
    {   //17
        nome: "Pateta natalino",
        preco: 16.00,
        tema: "Personagens&Animação&Natal",
        foto: "foto17.jpg",
    },
    {   //18
        nome: "Vovó Noel",
        preco: 16.00,
        tema: "Personagens&Natal",
        foto: "foto18.jpg",
    },
];

loadCards()

function loadCards(){

    for(i = 0; i<produtos.length; i++){
        document.getElementById("cards").innerHTML +=
        `
        <div>
            <img src="`+produtos[i].foto+`" alt="produto `+produtos[i].nome+`">
            <label>
                <button id='adicionar' onclick='adicionar()'>+</button>
                `+produtos[i].nome+` - <label id="preco">R$`+produtos[i].preco.toFixed(2).replace('.', ',')+`</label>
            </label>
        </div>
        `
    }

}
