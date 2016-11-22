window.onload = function(){
    var ret = document.getElementById('retu');
    setTimeout(function(){
        ret.style.background = '#82c353';
        ret.onclick = href;
    },
    3000);
    setTimeout(function(){
        window.history.go(-1);
    },
    10000);
}


//跳转函数
function href(){
    window.history.go(-1);
}
