var otest = document.getElementById('container');  
var node = document.getElementsByClassName('li');
var newnode = document.createElement('li');
newnode.innerHTML = '首页';
otest.appendChild(newnode);

var otest = document.getElementById('container');  
var node = document.getElementsByClassName('item');
var newnode = document.createElement('li');
newnode.innerHTML = '关于';
otest.appendChild(newnode);

var otest = document.getElementById('nav');    
var oldnode = document.getElementsByClassName('li')[2];
function replace(){
    var newnode = document.createElement('li');
    newnode.innerHTML  = '文章';
    otest.replaceChild(newnode,oldnode);
}

var otest = document.getElementById('container');  
var node = document.getElementsByClassName('li')[1];
function deleteLi(item){
otest.removeChild(item)[1];
}