var header = document.getElementById('header'),
    footer = document.getElementById('footer'),
    httpRequest;

function getDate(url,func){

    if(window.XMLHttpRequest){
        httpRequest = new XMLHttpRequest();
    }
    else{
        httpRequest = new ActiveXObject("Microsoft.XMLHttp");
    }
    httpRequest.open("GET",url,true);
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                /*console.log(httpRequest.responseText);*/
                func(httpRequest.responseText);
            }
        }
    }
}


(function name() {
    var url = "header.html?rand=" + Math.random();
    getDate(url, function (date) {
        console.log("header" + date);
            header.innerHTML = date;
        });
})();

(function p() {
    var url = "footer.html?rand=" + Math.random();
    getDate(url, function (a) {
        console.log("footer" + a);
        footer.innerHTML = a;
    });
})();
