var p1_n='';
var p2_n='';

function save(){
 p1_n = document.getElementById("player1_name_input").value;
 p2_n = document.getElementById("player2_name_input").value;

 if ((p1_n && p2_n)== false){
    alert('Please enter your username');
 }
 else{
    localStorage.setItem("player1", p1_n);
    localStorage.setItem("player2", p2_n);
    console.log(p1_n +","+ p2_n);
    window.location='game.html';
 }
}