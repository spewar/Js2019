//Exericio 1

class Usuario{
    constructor(email, senha) {
        this.email=email;
        this.senha=senha;
    }
    isAdmin(){
        return this.admin===true;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email,senha);
        this.admin=true;
    }
    
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email2@teste.com', 'senha123');
console.log(User1); // false
console.log(Adm1); // true

console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

//Exercicio 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(item=> item.idade);

console.log(idades);

const TrabRocketseat= usuarios.filter(function(item){
    return item.empresa === 'Rocketseat' && item.idade>18
});

console.log(TrabRocketseat);

const TrabGoogle = usuarios.find(function(item){
    return item.empresa==='Google'
});

console.log(TrabGoogle);

const arrMult=usuarios.map(function(item){
    return {...item, idade: item.idade*2}
}).filter(function(item){
    return item.idade<50
});

console.log(arrMult);


//Exercicio 3
const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
 return item + 10;
});

arr.map(item => item + 10);

const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}

const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}

mostraIdade(usuario);