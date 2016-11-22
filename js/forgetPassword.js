window.onload = function(){
    myInput[0].onfocus = inputFunc;
    myInput[0].onblur = regFun;
    myInput[1].onclick = submitFun;
}


var str = '';
var flag = 0;
var oDiv = document.getElementsByClassName('for_wrap')[0];
    var myInput = oDiv.getElementsByTagName('input');//获取输入框
function inputFunc(){
    str = this.placeholder;//取出placeholder的原始值并保存
    this.placeholder = '';  //去掉placeholder的值
    this.style.borderColor = '#ccc';//改变边框颜色
    this.previousElementSibling.style.display = 'none';
    this.nextElementSibling.style.display = 'none';//改变提示信息的显示方式
    //console.log(str);
    
}
function regFun(){
    
    var reg =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;//定义正则表达式
    this.placeholder = str;//placeholder的值复原
    if(this.value !== '' && !(reg.test(this.value))){//判断不为空时并且验证不通过时显示提示信息并且边框变红
        this.style.borderColor = 'red';
        this.nextElementSibling.style.display = 'block'; 
    }
    if(reg.test(this.value)){//验证通过时修改标志位并且修改提交按钮背景颜色为可用
        myInput[1].style.background = '#82C353';
        this.previousElementSibling.style.display = 'block';
        flag = 1;
    }else{//否则改回标志位和背景颜色
        myInput[1].style.background = '#838281';
        flag = 0;
    }
}
function submitFun(){
    if(flag === 1){//当判断合格时跳转
        window.location = 'modify_reg.html?'+myInput[0].value;
    }
}