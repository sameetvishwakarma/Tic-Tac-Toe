// phele saare value true kiya hai
var flag = true;
let states = [1, 0, 1, 0, 1, 0, 0, 1, 0];
const winner_div = document.getElementById("winner");

var user1 = document.getElementById('user1');
var user2 = document.getElementById('user2');

var player1_score = 0;
var player2_score = 0;

const player_turn = document.getElementById("player_turn");

player_turn.innerText = "X Turn";

// let apply_pattern = document.getElementById("apply_pattern");

// then we call class name and add the event list with function event
document.getElementsByClassName('container')[0].addEventListener('click', function (event) {
    // console.log(event.target.id)
    //variable declare 
    var current_div_id = event.target.id;

    var current_div = document.getElementById(current_div_id);

    // set the value of current div
    setValue(current_div_id, current_div);
});

//create function of setValue with current div
function setValue(current_div_id, current_div) {
    //get first value is X then O
    if (current_div_id && current_div.innerText == "" && (states[current_div_id]==1 || states[current_div_id] == 0)) {
        console.log(current_div_id);
        //get first value is X then O
        if (flag) {
            document.getElementById(current_div_id).innerText = "X";
            states[current_div_id] = "X";
            player_turn.innerText ="O Turn";
        }

        else {
            document.getElementById(current_div_id).innerText = "O";
            states[current_div_id] = "O";
            player_turn.innerText = "X turn";
        }

        //here the flag value is not equal to flag value
        flag = !flag;
        checkWinner(!flag);
        console.log(states);
    }
}

function checkWinner(player) {
    if (states[0] == states[1] && states[0] == states[2]) {
        if (player) 
        {
            winner_div.innerText = "X Winner";
            // player1_score++;
            displayScore(player);
            // user1.innerText = player1_score;
        }
        else 
        {
            winner_div.innerText = "O Winner ";
            displayScore(player);
            // player2_score++;        
            // user2.innerText = player2_score;
        }
        // alert("row-1 winner");
        setDisable();
        applyPattern(0,1,2);
    }
    else if (states[3] == states[4] && states[3] == states[5]) {
        if (player) {
            winner_div.innerText = "X Winner";
            displayScore(player);
        }
        else {
            winner_div.innerText = "O Winner";
            displayScore(player);
        }
        // alert("row-2 winner");
        setDisable();
        applyPattern(3,4,5);


    }
    else if (states[6] == states[7] && states[6] == states[8]) {
        if (player) {
            winner_div.innerText = "X Winner";
            displayScore(player);
        }
        else {
            winner_div.innerText = "O Winner";
            displayScore(player);
        }
        // alert("row-3 winner");
        setDisable();
        applyPattern(6,7,8)

    }
    else if (states[0] == states[3] && states[0] == states[6]) {
        if (player) {
            winner_div.innerText = "X Winner";
            displayScore(player);
        }
        else {
            winner_div.innerText = "O Winner";
            displayScore(player);
        }

        // alert("col-1 winner");
        setDisable();
        applyPattern(0,3,6);
    }
    else if (states[1] == states[4] && states[1] == states[7]) {

        if (player) {
            winner_div.innerText = "X Winner";
            displayScore(player);
        }
        else {
            winner_div.innerText = "O Winner";
            displayScore(player);
        }

        // alert("col-2 winner");
        setDisable();
        applyPattern(1,4,7)
    }
    else if (states[2] == states[5] && states[2] == states[8]) {

        if (player) {
            winner_div.innerText = "X Winner";
            displayScore(player);
        }
        else {
            winner_div.innerText = "O Winner";
            displayScore(player);
        }

        // alert("col-3 winner");
        setDisable();
        applyPattern(2,5,8);
    }
    else if (states[0] == states[4] && states[0] == states[8]) {

        if (player) {
            winner_div.innerText = "X Winner";
            displayScore(player);
        }
        else {
            winner_div.innerText = "O Winner";
            displayScore(player);
        }

        // alert("dia-1 winner");
        setDisable();
        applyPattern(0,4,8)
    }
    else if (states[2] == states[4] && states[2] == states[6]) {

        if (player) {
            winner_div.innerText = "X Winner";
            displayScore(player);
        }
        else {
            winner_div.innerText = "O Winner";
            displayScore(player);
        }

        // alert("dia-2 winner");
        setDisable();
        applyPattern(2, 4, 6);
    }
    else {
        let i, count = 9;
        for (i = 0; i < 9; i++) {
            if (states[i] == "X" || states[i] == "O")
            {
                count--;
            }
        }

        // console.log(i);
        if (count == 0)
            // alert("Its Draw !!");
        winner_div.innerText = "Its Draw!!";
    }
}

function resetGame() {
    let i;
    for (i = 0; i < 9; i++) {
        document.getElementById(i).innerText = "";
        document.getElementById(i).style.backgroundColor = "";
    }
    player_turn.innerText = "X Turn";

    flag = true;

    states = [1, 0, 1, 0, 1, 0, 0, 1, 0];

    winner_div.innerText = "";

    // for(i=0; i<9; i++) 
        // document.getElementById(i).style.backgroundColor = "white";
}


function restartGame() {
    location.reload();
}


function displayScore(player) {
    if(player)
    {
        player1_score++;
        user1.innerText = player1_score;
        player_turn.innerText = "";
    }
    else
    {
        player2_score++;
        user2.innerText = player2_score;
    }
}


function setDisable() {
    let i;
    for (i = 0; i < 9; i++) {
        if (states[i] == 0 || states[i] == 1) {
            states[i] = null;
        }
    }
}


function applyPattern(a,b,c)
{
    document.getElementById(a).style.backgroundColor = "greenyellow";
    document.getElementById(b).style.backgroundColor = "greenyellow";
    document.getElementById(c).style.backgroundColor = "greenyellow";
}