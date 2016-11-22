var str  = '',
    arr;

window.onload = function(){
    var newE;
    str = window.location.href;
    arr = str.split('?');
    if(arr[1]){
        newE = document.createElement('a');
        var newA = document.createElement('a');
        newA.innerHTML = '<span>3</span><div class="hiddenCar"><p><span>商品名称</span><span>668x2</span></p><p><span>商品名称</span><span>668x2</span></p><div><a class="button" href = "shoppingCar.html">查看购物车</a></div></div>';
        newA.setAttribute('class','shopping_bat');
        newA.setAttribute('href','shoppingCar.html');
        newE.innerHTML = arr[1];
        newE.setAttribute('class','loginRe');
        newE.setAttribute('href','persenal.html');
       // console.log(newE);
        document.getElementsByClassName('right_band')[0].replaceChild(newE,document.getElementsByClassName('login_btn')[0]);
        document.getElementsByClassName('right_band')[0].replaceChild(newA,document.getElementsByClassName('shopping_bag')[0]);
        
    }
}