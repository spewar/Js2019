var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer Cafe',
    'Trabalhar',
    'Arrumar a Casa',
    'Tomar Banho'
]

function rendertodos(){
    listElement.innerHTML='';

    for(todo of todos){
        var todoElement =document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement);
    }
}

rendertodos()

function addTodo(){
    var todoText =  inputElement.value;

    todos.push(todoText);
    inputElement.value='';

    rendertodos();
}

buttonElement.onclick=addTodo;