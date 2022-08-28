p1_n=localStorage.getItem('player1');
p2_n=localStorage.getItem('player2');

p1_s=0;
p2_s=0;

actual_ans=0;

answer_turn='player 1';
question_turn='player 2';

document.getElementById('player1_name').innerHTML=p1_n+' : ';
document.getElementById('player2_name').innerHTML=p2_n+' : ';

document.getElementById('player1_score').innerHTML=p1_s;
document.getElementById('player2_score').innerHTML=p2_s;

document.getElementById('player_q').innerHTML="Question Turn : "+p1_n;
document.getElementById('player_a').innerHTML="Answer Turn : "+p2_n;

function send(){
    first_n=parseInt(document.getElementById('first_n').value);
    second_n=parseInt(document.getElementById('second_n').value);

    question=first_n+' x '+second_n;
    display_question='<h4 id="q_dis">Question : '+question+'</h4>';
    answer_input='<br> Answer : <input type="text" id="input_check">';
    button_send='<br><br><button class="btn btn-info" onclick="check()">Check Answer</button>';

    row=display_question+answer_input+button_send;
    document.getElementById('output').innerHTML=row;

    actual_ans=first_n*second_n;
}
function check(){
    answer=parseInt(document.getElementById('input_check').value);
    if(answer==actual_ans){
        if(answer_turn=='player 1'){
            p1_s=p1_s+1;
            document.getElementById('player1_score').innerHTML=p1_s;
        }
        else{
            p2_s=p2_s+1;
            document.getElementById('player2_score').innerHTML=p2_s;
        }
    }
    if(answer_turn=='player 1'){
        answer_turn='player 2';
        document.getElementById('player_a').innerHTML='Answer Turn : '+p2_n;
    }
    else
    {
        answer_turn='player 1';
        document.getElementById('player_a').innerHTML='Answer Turn : '+p1_n;
    }
    if(question_turn=='player 1'){
        question_turn='player 2';
        document.getElementById('player_q').innerHTML='Question Turn : '+p2_n;
    }
    else
    {
        question_turn='player 1';
        document.getElementById('player_q').innerHTML='Question Turn : '+p1_n;
    }
    document.getElementById('output').innerHTML='';
}