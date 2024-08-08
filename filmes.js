function Filme(titulo, genero, ano) {
    this.titulo = titulo;
    this.genero = genero;
    this.ano = ano;
}

function Serie(titulo, genero, ano, temporadas) {
    Filme.call(this, titulo, genero, ano);
    this.temporadas = temporadas;
}

function Livro(titulo, genero, ano, autor) {
    Filme.call(this, titulo, genero, ano);
    this.autor = autor;
}

const SW = new Filme("Star Wars - Uma Nova Esperança", 1977, "ficção cienífica");
const GOT = new Serie("Game Of Thrones","drama", 2011, 8);
const HP = new Livro("Harry Potter e a Pedra Filosofal", "fantasia", 1997, "J. K. Rowling");

console.log(SW);
console.log(GOT);
console.log(HP);