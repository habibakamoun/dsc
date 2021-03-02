window.onload=function(){


var t=setInterval(move,10);
var pos=0;
var sandou9=document.getElementById("box")
function move(){
	if (pos<150){
	pos+=1
	sandou9.style.left=pos+"px";
}
else {clearinterval(t)}

}
}