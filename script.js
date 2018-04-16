var current1 = document.getElementById("currentScore1");
var current2 = document.getElementById("currentScore2");
var current = current1;
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var score = score1;
var total = 0;

function rolldice () {
	var dice1 = ~~(Math.random() * 6) + 1;
	document.getElementById("dice1").src = ("./images/dice-" + dice1 + ".png");
	var dice2 = ~~(Math.random() * 6) + 1;
	document.getElementById("dice2").src = ("./images/dice-" + dice2 + ".png");
	total += dice1 + dice2;
	dice1===1 || dice2===1 ? (total=0, hold()) : current.innerHTML=total;
}

function hold () {
	total = parseInt(score.textContent) + total;
	score.innerHTML = total;
	total >= 100 ? winner() : changePl();
}

function changePl () {
	total = 0;
	current.innerHTML = "0";
	if(current === current1) {
		current = current2;
		score = score2;
		document.getElementById("hand1").style.visibility = "hidden";
		document.getElementById("hand2").style.visibility = "visible";
		document.getElementById("backColor").style.left = "50%";
	} else {
		current = current1;
		score = score1;
		document.getElementById("hand2").style.visibility = "hidden";
		document.getElementById("hand1").style.visibility = "visible";
		document.getElementById("backColor").style.left = "0%";
	}
}

function winner () {
	document.getElementById("winn").style.display = "block";
	document.getElementById("game").style.display = "none";
}

function newGame () {
	document.getElementById("winn").style.display = "none";
	document.getElementById("game").style.display = "block";
	current1.innerHTML = "0";
	current2.innerHTML = "0";
	score1.innerHTML = "0";
	score2.innerHTML = "0";
	total = 0;
	document.getElementById("dice1").src = ("./images/dice-1.png");
	document.getElementById("dice2").src = ("./images/dice-1.png");
}
