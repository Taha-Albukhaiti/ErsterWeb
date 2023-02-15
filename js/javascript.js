function rekursivFakul(n) {
    if (n <= 2) {
        return n;
    }
    return n * rekursivFakul(n - 1);
}

function outrekursivFakul(n){
    window.alert(rekursivFakul(n));
}

function ueberschrifft(){

    document.getElementById("h2div").id = "h22";
    document.getElementById("h22").innerHTML = "Liste";
    document.getElementById("h22").style.color = "pink";
    document.body.style.background = "black";

    var x3 = document.getElementsByClassName("Formulare");
    window.alert(x3[0].innerHTML);

}
function  test(){
    var x = document.getElementById("h2")
    var add = 0
}

/*  function multiplikation(a, b){
return a*b;
}
var a= 3; var b= 8;
var c = "Das Ergbnis von "+ a + " mal " + b +" = " + multiplikation(a, b);
window.alert(c);

*/

/* function multiplikation(a, b){
window.alert(a*b);
}
multiplikation(3, 8);

*/
/* function meineFunction(){
window.alert("Hallo Leute");
}
meineFunction();
*/

/*   var x2 = Math.round(Math.random()*100+100+100)
var y2= Math.round(Math.random()*100+100+100)
window.alert(Math.max(x2, y2)) ;
var m = 2
var o = 8;
window.alert(Math.pow(m, o));
*/
/*  var x1 = 20, y1 = 20;
var users = ["Max Müller", "Lara Schmitt", "Ali Albukhiti"];
users.unshift("Kim");

var i = 0;
for (i in users) {
if (i == 2) {
continue;
}
window.alert(users[i]);
}*/
/*
var i =0;
do{
window.alert(users[i]);
i++;
}while(i <users.length);

*/
/* for(i in users){
window.alert(users[i]);
}*/

/*    for( i = users.length - 1; i>=0; i--){
window.alert(users[i]);
}*/

/*  users.push("Susana Müller");
users.shift();


users[10] = "Moh";
users.pop()
window.alert(users.join("; "));
// window.alert(users.length);
// window-alert( users.length);
*/

/*
switch (new Date().getDay()){
case 0:
window.alert("Heute ist Sonntag");
break;
case 1:
window.alert("Heute ist Montag");
break;
case 2:
window.alert("Heute ist Dienstag");
break;
case 3:
window.alert("Heute ist Mittwoch");
break;
case 4:
window.alert("Heute ist Donnerstag");
break;
case 5:
window.alert("Heute ist Freitag");
break;
case 6:
window.alert("Heute ist Samstag");
break;
}
*/
/* if (x > y){
window.alert("ist größer");
}else if(x >= y){
window.alert("ist gleich");
}*/
var bool = (22 === 22) ? 22 : 29;

var x = 7, y = 22;
x += 2;
x++;
document.getElementById("h2div").innerHTML = "Programmierung";

var stri = "Hallo,Welt";

