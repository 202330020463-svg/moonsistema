function fazerlogin(){
    let login = document.getElementById('login').value 
    let senha = document.getElementById('senha').value 

    if(login === 'cenep' && semha === 'cenep123'){
        alert('login ou senha correto!')
        localStorage.setItem('nome', login)
        window.location.href = 'pagina2.html'
    }else{
        alert('login ou senha incorretos')
    }

}
 
document.getElementById('titulo').innerHTML +=
 localStorage.getItem('titulo')
