// Accessible from anywhere
var i ="I am global vasriable";
function show(){
    document.write(i + "<br>");// inside function
}
show();
document.write(i + "<br>");// outside functoin

var i ="I am global vasriable";
function disp(){
    document.write(i + "<br>");// inside function
}
disp();

 if(true){
     document.write(i +"<br>"); // inside block
 }