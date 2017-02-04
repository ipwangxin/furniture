window.onload = function(){
    var add = document.getElementsByClassName('add')[0];
    var reduce = document.getElementsByClassName('reduce')[0];
    add.onclick = addOne;
    reduce.onclick = reduceOne;
}
function addOne(){
    this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.innerHTML) + 1;
}
function reduceOne(){
    var now =parseInt(this.previousElementSibling.previousElementSibling.innerHTML); 
    //alert(now);
    if(now > 1)
    this.previousElementSibling.previousElementSibling.innerHTML = now - 1;
}