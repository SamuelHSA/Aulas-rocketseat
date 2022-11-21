const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const todasCategorias = booksByCategory.length

console.log(todasCategorias);
for(let categoria of booksByCategory) {
    console.log('Total de livros', categoria.category)
    console.log(categoria.books.length)
}

function contarAutores() {
    let autores = [];

    for(let categoria of booksByCategory) {
        for(let book of categoria.books) {
            if(autores.indexOf(book.author) == -1) {
                autores.push(book.author)
            }
        }
    }

    console.log('Total de Autores:', autores.length)
}

contarAutores ();

function livrosDoAutor(author) {
    let livros = [];

    for(let categoria of booksByCategory) {
        for(let book of categoria.books) {
            if(book.author === author) {
                livros.push (book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${livros.join(", ")}`)
}
livrosDoAutor('Augusto Cury')