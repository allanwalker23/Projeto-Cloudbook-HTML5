

    var form = document.getElementById('form');

    form.addEventListener('submit',function(e){
        e.preventDefault();

        var nome = document.getElementById('nome').value;
        var senha = document.getElementById('senha').value;
        var email = document.getElementById('email').value;
        var colegio = document.getElementById('colegio').value;
        var genero = document.getElementById('genero').value;
        var telefone = document.getElementById('telefone').value;
      
       
var http = new XMLHttpRequest();
var url = 'https://cloudbookapp.herokuapp.com/alunos';
var params = JSON.stringify({
               nome:nome,
            senha:senha,
            email:email,
            colegio:colegio,
            genero:genero,
            telefone:telefone});

http.open('POST', url, true);
http.onload = function () {
    // do something to response
    if(http.status==400){
        alert('Email já existente, por favor tente novamente')
        
    }else{
        console.log(http.status)
        alert('Cadastrado com sucesso! Entre no app e faça o seu login')
        window.location.href = "file:///C:/Users/Allan%20Oliveira/Desktop/projeto-spotify/index.html";
    }
    
    
};
//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/json');
http.send(params);
    })
    
