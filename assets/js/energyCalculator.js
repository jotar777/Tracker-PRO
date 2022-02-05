var counter = document.getElementById("energyQuantity");
counter = 3;
var round = document.getElementById("roundNumber");
round = 1;

var cards = document.getElementById("cardsQuantity");
cards = 6;

function nextRound(){
  round += 1;
  counter += 2;
  cards += 3;
  if (counter >= 10) {
    counter = 10;
    }
  if (cards >= 12) {
    cards = 12;
  }
  
  document.getElementById("roundNumber").innerHTML = round;
  document.getElementById("energyQuantity").innerHTML = "0"+counter;
  document.getElementById("cardsQuantity").innerHTML = cards;
}

function addCard(){
  cards += 1;
  if (cards >= 12) {
    cards = 12;
  }
  document.getElementById("cardsQuantity").innerHTML = cards;
}
function subCard(){
  cards -= 1;
  if (cards <= 0) {
    cards = 0;
  }
  document.getElementById("cardsQuantity").innerHTML = cards;
}

function subtract(){
  counter -= 1;
  if (counter <= 0) {
    counter = 0;
  }
  
  document.getElementById("energyQuantity").innerHTML = "0"+counter;
}

function add(){
  counter += 1;
  if (counter >= 10) {
    counter = 10;
    document.getElementById("energyQuantity").innerHTML = counter;
  }else document.getElementById("energyQuantity").innerHTML = "0"+counter;

 
}
function reset(){
  counter = 3;
  round = 1;
  cards = 6;
  document.getElementById("energyQuantity").innerHTML = "0"+counter;
  document.getElementById("roundNumber").innerHTML = round;
  document.getElementById("cardsQuantity").innerHTML = cards;
  
  // Axie1 parts clear
  document.getElementById('a1m1').style.visibility = "hidden";
  document.getElementById('a1m2').style.visibility = "hidden";
  document.getElementById('a1h1').style.visibility = "hidden";
  document.getElementById('a1h2').style.visibility = "hidden";
  document.getElementById('a1b1').style.visibility = "hidden";
  document.getElementById('a1b2').style.visibility = "hidden";
  document.getElementById('a1t1').style.visibility = "hidden";
  document.getElementById('a1t2').style.visibility = "hidden";
  
  // Axie2 parts clear
  document.getElementById('a2m1').style.visibility = "hidden";
  document.getElementById('a2m2').style.visibility = "hidden";
  document.getElementById('a2h1').style.visibility = "hidden";
  document.getElementById('a2h2').style.visibility = "hidden";
  document.getElementById('a2b1').style.visibility = "hidden";
  document.getElementById('a2b2').style.visibility = "hidden";
  document.getElementById('a2t1').style.visibility = "hidden";
  document.getElementById('a2t2').style.visibility = "hidden";
  
  // Axie3 parts clear
  document.getElementById('a3m1').style.visibility = "hidden";
  document.getElementById('a3m2').style.visibility = "hidden";
  document.getElementById('a3h1').style.visibility = "hidden";
  document.getElementById('a3h2').style.visibility = "hidden";
  document.getElementById('a3b1').style.visibility = "hidden";
  document.getElementById('a3b2').style.visibility = "hidden";
  document.getElementById('a3t1').style.visibility = "hidden";
  document.getElementById('a3t2').style.visibility = "hidden";
}

