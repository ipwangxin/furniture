window.onload = function(){
    var renew = document.getElementById('renew');
    var string = window.location.href;
    var p=string.split('?')[1];
    document.getElementById('email').innerHTML= p;
    setTimeout(function(){
       renew.style.background =  '#82c353';
        renew.onclick = href;
    },5000)
}
function href(){
    window.location = 'modifyPassword.html';
}