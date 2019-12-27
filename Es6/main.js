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