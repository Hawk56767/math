score=0;
function ClickyUpdate(){
score=score+1;
document.getElementById("output").innerHTML=score;
}
function Save(){
 localStorage.setItem("score",score);   
}
function Next(){
 window.location="activity2.html";   
}