const MyDecrease= document.getElementById("MyDecrease");
const MyReset= document.getElementById("MyReset");
const MyIncrease= document.getElementById("MyIncrease");
const MyH2= document.getElementById("MyH2");
let count=0;

MyIncrease.onclick=function(){
    count++;
    MyH2.textContent=count;
}

MyDecrease.onclick=function(){
    count--;
    MyH2.textContent=count;
}

MyReset.onclick=function(){
    count=0;
    MyH2.textContent=count;
}