// Criar m objeto de postagem de blog com: 
// título, mensagem, autor, visualizados, comentários (autor, mensagem) e se está ao vivo ou não

let post = {
    title: `Thecnology`,
    message: `TI is the future`,
    author: `Lionel`,
    views:550,
    comments: [
        {authorComment: `Scalone`, messageComment: `You're rigth`},
        {authorComment: `Pep`, messageComment:`;-D`},
        {authorComment: `Klop`,  messageComment:`Yes, man`}
],
    itIsLive: true
}

function show(post){
    for(property in post){
    console.log(property, post[property])}
} console.log(show(post))

  