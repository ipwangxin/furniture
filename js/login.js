window.onload = function(){
    var box = document.getElementsByClassName('login_wrap')[0];
    var inputs = box.getElementsByTagName('input');
    for(var i=0,l=inputs.length;i<l-1;i++){
        inputs[i].index = i;
        console.log(inputs[i]);
        inputs[i].onfocus = plInput;
        inputs[i].onblur = inputEnd;
    }
    inputs[2].onclick = jump;
}
var string = '',            //定义全局变量
    p=0;


/*聚焦函数*/
function plInput(){
    this.style.borderColor = '#ccc';
    this.nextElementSibling.style.display = 'none';
    this.previousElementSibling.style.display = 'none';
    string = this.placeholder;
    this.placeholder = '';
    
   // console.log(string);
}

/*失去焦点函数*/
function inputEnd(){
    var inputs = document.getElementsByClassName('login_wrap')[0].getElementsByTagName('input'),
        i = this.index,
        regArr = [ /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,/^([A-Za-z])([A-Za-z]|[0-9]|-|_){5,15}/];
    this.placeholder = string;
    if(this.value !== '' && !(regArr[i].test(this.value))){
        this.nextElementSibling.style.display = 'block';
        this.style.borderColor = 'red';
    }
    
    if(regArr[i].test(this.value)){  //判断显示绿色钩钩
        this.previousElementSibling.style.display = 'block';
    }
    
    if(regArr[0].test(inputs[0].value) && regArr[1].test(inputs[1].value)){     //判断校验通过改变提交按钮背景颜色，并修改标志位
        inputs[2].style.background = '#82C353';
        p = 1;
    }else{
        inputs[2].style.background = '#838281';
        p = 0;
    } 
}

/*提交跳转函数*/
function jump(){
    var email = inputs = document.getElementsByClassName('login_wrap')[0].getElementsByTagName('input')[0].value;
    if(p===1){
        window.location = 'home_page.html?' + email;
    }
}