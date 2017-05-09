//放存進來的資料的空陣列
var things = [];

var btn  = document.querySelector('.send');
var text = document.querySelector('.write');
var list = document.querySelector('.list');


btn.addEventListener('click', AddIn, false);
list.addEventListener('click',DeleteItem,false);

function AddIn() {
    //點add的時候，把內容push到陣列裡面，再stringify，再setItem丟進localstorage
    things.push(text.value);
    var thingsString = JSON.stringify(things);
    localStorage.setItem('Todos',thingsString);

    //每add一次都重新load一次畫面，重新抓一次資料出來    
    var getThings = localStorage.getItem('Todos');
    //抓出來然後陣列化
    getThingsAry = JSON.parse(getThings);

    Reloading();
}

function Reloading(){

    console.log('Reloading Run!');
    
    //接下來用迴圈把東西show出去
    var len = getThingsAry.length;
    var str = '';
    for (var i = 0; i < len; i++) {
        str += '<li data-num="'+i+'"><a data-num="'+i+'" href="#" class="link">Delete</a><h3>' + getThingsAry[i] + '</h3></li>';
    }
    list.innerHTML = str;
    }

function DeleteItem(e){
   e.preventDefault();
   var num = e.target.dataset.num;

   if(e.target.nodeName!=='A'){return};
   console.log(num);
   getThingsAry.splice(num,1);
   things.splice(num,1);

   
   Reloading();

    }