var cards = ["picture1.jpeg", "picture2.jpeg", "picture3.jpeg", "picture4.jpeg", "picture5.jpeg", "picture6.jpeg", "picture6.jpeg", "picture2.jpeg", "picture5.jpeg", "picture3.jpeg", "picture4.jpeg", "picture1.jpeg",];

var card0 = document.getElementById('card0');
var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');

var card4 = document.getElementById('card4');
var card5 = document.getElementById('card5');
var card6 = document.getElementById('card6');
var card7 = document.getElementById('card7');

var card8 = document.getElementById('card8');
var card9 = document.getElementById('card9');
var card10 = document.getElementById('card10');
var card11 = document.getElementById('card11');

card0.addEventListener("click", function(){ revealCard(0); });
card1.addEventListener("click", function(){ revealCard(1); });
card2.addEventListener("click", function(){ revealCard(2); });
card3.addEventListener("click", function(){ revealCard(3); });

card4.addEventListener("click", function(){ revealCard(4); });
card5.addEventListener("click", function(){ revealCard(5); });
card6.addEventListener("click", function(){ revealCard(6); });
card7.addEventListener("click", function(){ revealCard(7); });

card8.addEventListener("click", function(){ revealCard(8); });
card9.addEventListener("click", function(){ revealCard(9); });
card10.addEventListener("click", function(){ revealCard(10); });
card11.addEventListener("click", function(){ revealCard(11); });

var oneVisible = false;
var turnCounter = 0;
var visibeNr;
var lock = false;
var pairsLeft = 6;

function revealCard(nr) {

	var opacityValue = $('#card'+nr).css('opacity');

	if (opacityValue != 0 && lock == false) {

		lock = true;
	
		var picture = "url(memory-game/../images/" + cards[nr] + ")";

		$('#card' + nr).css('background-image', picture);

		if(oneVisible == false) {
		//first card
		oneVisible = true;
		visibeNr = nr;
		lock = false;
		}
		else {
		//second card

			if (cards[visibeNr] == cards[nr]){

				setTimeout(function(){ hideCards(nr, visibeNr)}, 750);
			
			}
			else {
				setTimeout(function(){ restoreCards(nr, visibeNr)}, 1000);	
			}

			turnCounter++;
			$('.score').html('Turn counter: '+turnCounter);
			oneVisible = false;
		}

	}
}

function hideCards (nr1, nr2) {
	$('#card' +nr1).css('opacity', '0');
	$('#card' +nr2).css('opacity', '0');

	lock = false;
	pairsLeft--;

	if (pairsLeft == 0) {

		$('.board').html('<h1>You win!<br>Done in '+turnCounter+' turns</h1>');
	}
}

function restoreCards (nr1, nr2) {
	$('#card' +nr1).css('background-image', 'url(memory-game/../images/picture0.jpeg)');
	$('#card' +nr2).css('background-image', 'url(memory-game/../images/picture0.jpeg)');

	lock = false;
}
