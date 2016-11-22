var selectAll = document.getElementsByClassName('checkt'),
    select = document.getElementsByClassName('checks'),
    submit = document.getElementById('subbtn'),
    dele = document.getElementsByClassName('operation'),
    item = document.querySelectorAll('div.item'),
    coverS = document.getElementsByClassName('covers')[0],
    coverbtn = coverS.getElementsByTagName('button'),
    p;

window.onload = function(){
    var btnBox = document.getElementsByClassName('itemNumber')
        retCar = document.getElementsByClassName('subDiv')[0].getElementsByTagName('span')[0],
        button = document.getElementsByClassName('cover')[0].getElementsByTagName('button')[0],
        addLinks = document.getElementsByClassName('linksMes')[0].getElementsByTagName('a')[0];
    
    
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
        select[i].onclick = eachSelector;
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

/*计算总件数函数*/
function tolNum(){
    var Einput = document.getElementsByClassName('checks'),
        totalN = document.getElementById('totalN'),
        innum = document.getElementsByClassName('innum'),
        num=0;
    
    for(var i = 0,l = Einput.length; i < l; i++){
        if(Einput[i].checked){
            num = num - (-(innum[i].value));
        }
    }
    totalN.innerHTML = num ;
}

/*********************计算金额函数************************************
*************接受参数依次为p单价，n数量，par父级元素*********************/
function sum(p,n,par){
    var tar = par.nextElementSibling.getElementsByTagName('span')[0];
        Osum = p * n;
    tar.innerHTML = Osum.toFixed(2);
}
 
/*********************************数量加一函数****************************/
function addOne(){
/*    alert('add');*/
    this.previousElementSibling.value = Number(this.previousElementSibling.value) -(-1);
    var parent = this.parentElement,
        price = parseFloat(parent.previousElementSibling.getElementsByTagName('span')[0].innerHTML).toFixed(2),
        num = parseInt(parent.getElementsByTagName('input')[0].value);
    //alert(num);
    sum(price,num,parent);
    tolNum();
    totSum();
}    

/*********************数量减一函数*********************************************/
function reduceOne(){
    var parent = this.parentElement,
        price = parseFloat(parent.previousElementSibling.getElementsByTagName('span')[0].innerHTML).toFixed(2),
        num;
    
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
    var Einput = document.getElementsByClassName('checks'),
        tar = document.getElementsByClassName('itemTotPrice'),
        Odiv = document.getElementById('totalM'),
        mum=0;
    for(var i = 1,l = tar.length; i < l; i++){
        if(Einput[i-1].checked){
          //  alert(l);
            mum = mum -(-(tar[i].getElementsByTagName('span')[0].innerHTML));
        }
    }
    Odiv.innerHTML = mum.toFixed(2);
    return mum;
}

/**********************单个选择复选框功能函数*************************************/
function eachSelector(){
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
    }
    else{
        for(var i=0;i<selectAll.length;i++){
            selectAll[i].checked = false;
        }
    }
    
    tolNum();
    totSum();
}

/*****************全选函数***********************************/
function selAll(){
    if(this.checked){
        for(var i=0;i<selectAll.length;i++){
            selectAll[i].checked = true;
        }
        for(var i=0;i<select.length;i++){
            select[i].checked = true;
        }
    }
    else{
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
/****************跳转函数**************************************/
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

/****************************确认删除函数***********************/
function sureDelet(){
    coverS.style.display = 'none';
    
    if(window.navigator.userAgent.toLocaleLowerCase().match(/(trident)\/([\d.]+)/)) {  
        item[p].removeNode(true);        //ie浏览器兼容写法
        
   }
    else{
        alert(navigator.userAgent.indexOf("MSIE"));
    item[p].remove();
        
    }
    tolNum();
    totSum();
    
}

/***********************取消删除函数***************************/
function escDelet(){
    coverS.style.display = 'none';
}
