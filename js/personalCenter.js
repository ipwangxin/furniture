window.onload = function(){
    for(var i=0;i<itemDel.length; i++){
        itemDel[i].index = i; //定义属性传下标
        itemDel[i].onclick = function(){
            flag = 0;   //设置标志位，控制删除对象
            num = this.index;  //获取删除下标
            cover.style.display = 'block';  //隐藏弹出框
        }
        itemDel[i].onmouseover = function(){
            this.style.color = 'red';
        }
        itemDel[i].onmouseout = function(){
            this.style.color = '#000';
        }
    }
    
    for(var i=0;i<saleDel.length; i++){
        saleDel[i].index = i;
        saleDel[i].onclick = function(){
             flag = 1;
            num = this.index;
            cover.style.display = 'block';
        }
        saleDel[i].onmouseover = function(){
            this.style.color = 'red';
        }
        saleDel[i].onmouseout = function(){
            this.style.color = '#000';
        }
    }
    
    for(var i=0,l=list.length; i<l; i++){
        list[i].index = i;     
        list[i].onclick = changeWrap;
    }    
    btns[1].onclick = function(){
        deleteItem(0);
    }
    btns[0].onclick = function(){
        deleteItem(1);
    }
}
    var itemDel = document.getElementsByClassName('del'),
        saleDel = document.getElementsByClassName('dela'),
        ul = document.getElementsByClassName('centerNav')[0],
        list = ul.getElementsByTagName('li'),
        num,
        flag,
        cover = document.getElementsByClassName('cover')[0],
        btns = cover.getElementsByTagName('button'),
        item = document.querySelectorAll('.item'),//此处为非动态获取，不能用ByClassName
        saleItem = document.querySelectorAll('.saleItem');//此处为非动态获取，不能用ByClassName

function changeWrap(){
    var l=this.index;
    var divs = document.getElementsByClassName('changeWrap');
     for(var i=0;i<divs.length;i++){
        divs[i].style.display = 'none';
         list[i].style.color = '#000';
         list[i].getElementsByTagName('span')[0].style.borderBottom = 'none';
    }
    this.style.color = 'red';
    this.getElementsByTagName('span')[0].style.borderBottom = '1px solid red';
    divs[l].style.display = 'block';
}

//删除图片函数
function deleteItem(trp){
    var el;
    cover.style.display = 'none';
    
    if(trp){
        if (flag === 0){
        el = item[num];
    }else{
        el = saleItem[num];
    }
      el.remove();
    }
    
}