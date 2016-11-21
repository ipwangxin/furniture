window.onload = function(){
    var add = document.getElementsByClassName('add')[0],
        reduce = document.getElementsByClassName('reduce')[0];
    add.onclick = addOne;
    reduce.onclick = reduceOne;
}

/*数量加一函数*/
function addOne(){
    this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.innerHTML) + 1;
}

/*数量减一函数*/
function reduceOne(){
    var now =parseInt(this.previousElementSibling.previousElementSibling.innerHTML); 
    //alert(now);
    if(now > 1)
    this.previousElementSibling.previousElementSibling.innerHTML = now - 1;
}