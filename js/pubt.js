var header = document.getElementById('header'),
    footer = document.getElementById('footer'),
    count = 0;


function getDate(url,func){
    var httpRequest;
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
        tes();
        });
})();

(function p() {
    var url = "footer.html?rand=" + Math.random();
    getDate(url, function (a) {
        console.log("footer" + a);
        footer.innerHTML = a;
        count++;
    });
})();
