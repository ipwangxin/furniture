window.onload = function(){
    var wrap = document.getElementsByClassName('register_wrap')[0];
    var inputs = wrap.getElementsByTagName('input');
    for(var i=0,l=inputs.length-1; i < l; i++){  //循环绑定事件
        inputs[i].index = i;
        inputs[i].onfocus = inputFunc;
        inputs[i].onblur = regFunc;
    }
    
    inputs[3].onclick = submitFunc;
}



var str = '',   //定义全局变量
    flag = 0;

 //定义聚焦函数
function inputFunc(){              
    str = this.placeholder;            
    //保存初始值
    this.placeholder = '';
    this.style.borderColor = '#ccc';                                    
    //重置边框颜色为灰
    this.previousElementSibling.style.display = 'none';                 
    //隐藏正确提示图片
    this.nextElementSibling.style.display = 'none';                      
    //隐藏错误提示警告
}

/*正则验证函数*/
function regFunc(){
    var i = this.index,        //获取输入框下标
        wrap = document.getElementsByClassName('register_wrap')[0],
        inputs = wrap.getElementsByTagName('input'),
        imgs =wrap.getElementsByTagName('img'),
        regArr = [ /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,/^([A-Za-z])([A-Za-z]|[0-9]|-|_){5,15}/];
    flag = 0;
    //清空标志位
    this.placeholder = str;             
    //恢复当前的提示信息值
    
    if(i !== 2){                        //判断不为确认密码输入框
        if(this.value !== '' && !(regArr[i].test(this.value))){  
            //判断不为空且测试不通过时
        this.nextElementSibling.style.display = 'block';
        this.style.borderColor = 'red';
            }
        if(regArr[i].test(this.value)){                         
            //测试通过时
            this.previousElementSibling.style.display = 'block';
            }      
    }
    else{                                          
        //为确认密码输入框时
        if(inputs[1].value !== this.value && this.value !== ''){           
            //判断与初设密码不同且不为空
            this.nextElementSibling.style.display = 'block';
            this.style.borderColor = 'red';
        }
        else if(this.value !=='' && regArr[1].test(inputs[1].value)){           
            //判断与初设密码相同且不为空
            this.previousElementSibling.style.display = 'block';
        }    
    }
    for(var t=0,l=imgs.length; t < l; t++){                     
        //判断是否输入都符合要求
        if(imgs[t].style.display === 'block'){
            flag++;
        }
    }
    
    if(flag === imgs.length){                               
        //符合要求时
        inputs[3].style.background = '#82C353';                
        //提交按钮可用
    }   
    else{                                                     
        //不符合要求时          
        inputs[3].style.background = '#838281';               
        //提交按钮不可用
    } 
}

/*****************提交函数**********************************************/
function submitFunc(){
    if(flag === 3){                                 
        //提交按钮可用时跳转
        window.location = 'register_reg.html?';
    }
}