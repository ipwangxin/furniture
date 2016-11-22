window.onload = function(){
    
    /*alert(inputs.length);*/
    for(var i=0,l=inputs.length-1; i < l; i++){
        inputs[i].index = i;
        inputs[i].onfocus = inputFunc;
        inputs[i].onblur = inputEnd;
        btn[i].onclick = hidden_fa;
    }
    inputs[2].onclick = submitFun ;
}

var str = '',
    flag = 0,
    wrap = document.getElementsByClassName('login_wrap')[0],
    inputs = wrap.getElementsByTagName('input'),
    btn = document.getElementsByTagName('button');


function inputFunc(){       //定义聚焦函数
    this.previousElementSibling.style.display = 'none';
    this.nextElementSibling.style.display = 'none';
    this.style.borderColor = '#ccc';
    str = this.placeholder;
    this.placeholder = '';
}
function inputEnd(){        //定义失焦函数  
    var i = this.index;
    var imgs =wrap.getElementsByTagName('img');
    this.placeholder = str;
    var reg = /^([A-Za-z])([A-Za-z]|[0-9]|-|_){5,15}/;
    flag = 0;
    if(i === 0){
        if(!(reg.test(this.value)) && this.value !== ''){       //判断不为空且正则测试不通过时显示提示信息。
        this.nextElementSibling.style.display = 'block';
        this.style.borderColor = 'red';
        }
        if(reg.test(this.value)){           //判断测试通过时显示输入正确
            this.previousElementSibling.style.display = 'block';
        }
    }else{
        if(this.value !==''){
            if(inputs[0].value === this.value && reg.test(inputs[0].value)){
                this.previousElementSibling.style.display = 'block';
            }
            else{
                this.nextElementSibling.style.display = 'block';
        this.style.borderColor = 'red';
            }
            
        }
    }
    
    for(var t=0,l=imgs.length; t < l; t++){
        if(imgs[t].style.display === 'block'){
            flag++;
        }
    }
    if(flag === imgs.length){
        inputs[2].style.background = '#82C353';
    }
    else{
        inputs[2].style.background = '#838281';
    }
}

function submitFun(){           //定义提交点击函数
    var cover = document.getElementsByClassName('cover');
    
    if(flag === 2){
        if(Math.random() > 0.5)
        {cover[0].style.display = 'block';}
        else{
            cover[1].style.display = 'block';
        }
    }
}

function hidden_fa(){
    this.parentElement.parentElement.style.display = 'none';
}