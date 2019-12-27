function buscar(){
    var user= document.querySelector('input');
    axios.get('https://api.github.com/users/'+user.value+'/repos')
.then(function (response) {
    var list=document.createElement('ul');

    var listElement=document.createElement('li')
    listElement.innerHTML=response.data[0].

    list.document
})
.catch(function (error) {
    alert('Usuario não localizado!');
});

} 


