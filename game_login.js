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
function addUser(){
    player1_name=document.getElementById("player1_name_input").value; 
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location="quiz_game_page.html";
      
   }