var selectAll = document.getElementsByClassName('checkt');
    var select = document.getElementsByClassName('checks');
var submit = document.getElementById('subbtn');
var dele = document.getElementsByClassName('operation');
var item = document.querySelectorAll('div.item');
var coverS = document.getElementsByClassName('covers')[0];
var coverbtn = coverS.getElementsByTagName('button');
var p;

window.onload = function(){
    var btnBox = document.getElementsByClassName('itemNumber');
    var retCar = document.getElementsByClassName('subDiv')[0].getElementsByTagName('span')[0]; 
    var button = document.getElementsByClassName('cover')[0].getElementsByTagName('button')[0];
    var addLinks = document.getElementsByClassName('linksMes')[0].getElementsByTagName('a')[0];
    for(var i = 1,l = dele.length; i<l; i++){
        dele[i].index = i-1;
        dele[i].onclick = function(){
            p=this.index;
            coverS.style.display = 'block';
        }
    }
    for( var i = 1, l = btnBox.length;i<l; i++){
       // console.log(btnBox[i].getElementsByTagName('span'));
        btnBox[i].getElementsByTagName('span')[0].onclick = reduceOne;
        btnBox[i].getElementsByTagName('span')[1].onclick = addOne;
    }
    for(var i=0;i<select.length;i++){
        select[i].onclick = sel;
        //alert();
    }
    for(var i=0;i<selectAll.length;i++){
        selectAll[i].onclick = selAll;
    }
    retCar.onclick = ret;
    submit.onclick = href;
    addLinks.onclick = addALink;
    button.onclick = hid;
    coverbtn[0].onclick = sureDelet;
    coverbtn[1].onclick = escDelet;
}
function tolNum(){
    var Einput = document.getElementsByClassName('checks');
    var totalN = document.getElementById('totalN');
    var innum = document.getElementsByClassName('innum');
    var num=0;
    for(var i = 0,l = Einput.length; i < l; i++){
        if(Einput[i].checked){
            num = num - (-(innum[i].value));
        }
    }
    totalN.innerHTML = num ;
}
function sum(p,n,par){
    var tar = par.nextElementSibling.getElementsByTagName('span')[0];
        Osum = p * n;
    
    tar.innerHTML = Osum.toFixed(2);
}
    
function addOne(){
/*    alert('add');*/
    this.previousElementSibling.value = Number(this.previousElementSibling.value) -(-1);
    var parent = this.parentElement;
    var price = parseFloat(parent.previousElementSibling.getElementsByTagName('span')[0].innerHTML).toFixed(2);
    var num = parseInt(parent.getElementsByTagName('input')[0].value);
    //alert(num);
    sum(price,num,parent);
    tolNum();
    totSum();
}    
function reduceOne(){
    var parent = this.parentElement;
    var price = parseFloat(parent.previousElementSibling.getElementsByTagName('span')[0].innerHTML).toFixed(2);
    
    var num;
    if(this.nextElementSibling.value !== "1"){
        this.nextElementSibling.value = Number(this.nextElementSibling.value) - 1;
        num = parseInt(parent.getElementsByTagName('input')[0].value);
        sum(price,num,parent);
        //alert(price,num,parent);
        tolNum();
        totSum();
    }
}
function totSum(){
    var Einput = document.getElementsByClassName('checks');
    var tar = document.getElementsByClassName('itemTotPrice');
    var Odiv = document.getElementById('totalM');
    var mum=0;
    for(var i = 1,l = tar.length; i < l; i++){
        if(Einput[i-1].checked){
          //  alert(l);
            mum = mum -(-(tar[i].getElementsByTagName('span')[0].innerHTML));
        }
    }
    Odiv.innerHTML = mum.toFixed(2);
    return mum;
}
function sel(){
    var flag = 0;
    for(var i=0;i<select.length;i++){
       if(select[i].checked) {
           flag++;
       }
    }
   // alert(flag);
    if(flag === select.length){
        for(var i=0;i<selectAll.length;i++){
            selectAll[i].checked = true;
        }
    }else{
        for(var i=0;i<selectAll.length;i++){
            selectAll[i].checked = false;
        }
    }
    tolNum();
    totSum();
}
function selAll(){
    if(this.checked){
        for(var i=0;i<selectAll.length;i++){
            selectAll[i].checked = true;
        }
        for(var i=0;i<select.length;i++){
            select[i].checked = true;
        }
    }else{
        for(var i=0;i<selectAll.length;i++){
            selectAll[i].checked = false;
        }
        for(var i=0;i<select.length;i++){
            select[i].checked = false;
        }
    }
    tolNum();
    totSum();
}

function href(){
    if(tolNum()){
        return;
    }
    else{
        document.getElementsByClassName('homeOfCar')[0].style.display = 'none';
        document.getElementsByClassName('sureOrderMes')[0].style.display = 'block';
    }
}
function ret(){
    document.getElementsByClassName('homeOfCar')[0].style.display = 'block';
        document.getElementsByClassName('sureOrderMes')[0].style.display = 'none';
}
function addALink(){
    document.getElementsByClassName('cover')[0].style.display = 'block';
}
function hid(){
    document.getElementsByClassName('cover')[0].style.display = 'none';
}
function sureDelet(){
    coverS.style.display = 'none';
    item[p].remove();
    tolNum();
    totSum();
    
}
function escDelet(){
    coverS.style.display = 'none';
}
