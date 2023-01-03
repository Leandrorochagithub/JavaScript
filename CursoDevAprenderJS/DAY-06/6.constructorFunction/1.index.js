// Criar m objeto de postagem de blog com: 
// título, mensagem, autor, visualizados, comentários (autor, mensagem) e se está ao vivo ou não
function Post (title, message, author) {
    this.title= title,
    this.message= message,
    this.author= author,
    this.views= 0,
    this.comments= [
        {authorComment: `Scalone`, messageComment: `You're rigth`},
        {authorComment: `Pep`, messageComment:`;-D`},
        {authorComment: `Klop`,  messageComment:`Yes, man`}
    ],
    this.itIsLive= false
}

let post = new Post(`Hello`, `World`, `Brad`) 
console.log(post)