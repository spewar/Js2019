class List{
    constructor() {
        this.data=[];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List{
    constructor(){
        super();

        this.usuario='Marcelo';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick= function(){
    MinhaLista.add('NovoTodo');
}

MinhaLista.mostraUsuario();



class Matematica{
    static soma(a, b){
        return a+b;
    }
}

console.log(Matematica.soma(1,3));

//Rest

const usuario ={
    nome   : 'Marcelo',
    idade: 33,
    empresa: 'Cigam'
};

const {nome, ...bosta}=usuario;

console.log(nome);
console.log(bosta);


let usuario2 = {
    ...usuario,
    nome: "Marcelo 2"
}

console.log(usuario2);


//Rest

// const arr =[1 , 2, 3, 4, 5];

// const [a, b, ...c]=arr;

// console.log(a);
// console.log(b);
// console.log(c);

// function soma(a,b, ...params){
//     return params.reduce((total, next) => total + next);
// }

// console.log(soma(1, 2, 3, 4, 5, 6, 7));

//Spread

const arr1=[1, 2, 3];
const arr2=[4, 5, 6];

const arr3=[...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome:'Marcelo',
    idade: 33,
    empresa: 'Cigam',
};

const usuario2 = {...usuario1, nome:'João'};

console.log(usuario2);