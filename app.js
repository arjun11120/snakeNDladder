let dice = document.getElementById('dice');
var outputDiv = document.getElementById('diceResult');
var latest1 = 0;
var latest2 = 0;
var startgame1 = 0;
var startgame2 = 0;
var prev1 = 0;
var prev2 = 0;
var click = 0;
function rollDice() {
	//var x = document.getElementById("dotg");
   	//let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
	click += 1;
  	if ( click % 2 == 0){
		player1();
		//console.log("player 1 click",click);
		$("#pl1").addClass("bgreen");
		$("#pl2").removeClass("bgreen");
	}
	else{
		player2();
		//console.log("player 2 click",click);
		$("#pl1").removeClass("bgreen");
		$("#pl2").addClass("bgreen");
	}
   		
}

function player1() {
   console.log("player 1 is working");
   let result1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
   dice.dataset.side = result1;
   if(result1 == 1){
	startgame1 = 1;
	}
   dice.classList.toggle("reRoll");
	if( startgame1 == 1){
	
	$(".colm").removeClass("bg1");
	latest1 = latest1 + result1;
		if( latest1 > 100 ){
			latest1 = prev1;
			}
		if(latest1 == 2){
			latest1 = 24 ;
			ladMes();
		}
		else if( latest1 == 11){
			latest1 = 33 ;
			ladMes();
		}
		else if( latest1 == 25){
			latest1 = 85 ;
			ladMes();
		}
		else if( latest1 == 37){
			latest1 = 61 ;
			ladMes();
		}
		else if( latest1 == 68){
			latest1 = 90 ;
			ladMes();
		}
		else if( latest1 == 79){
			latest1 = 97 ;
			ladMes();
		}
		else if( latest1 == 23){
			latest1 = 7 ;
			snaMes();
		}
		else if( latest1 == 55){
			latest1 = 13 ;
			snaMes();
		}
		else if( latest1 == 70){
			latest1 = 32 ;
			snaMes();
		}
		else if( latest1 == 82){
			latest1 = 3 ;
			snaMes();
		}
		else if( latest1 == 93){
			latest1 = 67 ;
			snaMes();
		}
    		$("#"+latest1+"").animate().addClass("bg1");
		//console.log(latest1);
		prev1 = latest1;
		if (latest1 == 100){
			$(".cnt").removeClass("cnt");
			$("#dice").css("visibility", "hidden");
			$(".messageBox").removeClass("messageBox");
			$(".cont").append('<div class="cel">RED WIN</div>');
		}
	}
		  

}
function player2() {
	//console.log("player 2 is working");
   let result2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
	
   dice.dataset.side = result2;	
   if(result2 == 1){
	startgame2 = 1;
	}
   dice.classList.toggle("reRoll");
	if( startgame2 == 1){
	
	$(".colm").removeClass("bg2");
	latest2 = latest2 + result2;
		if( latest2 > 100 ){
			latest2 = prev2;
			}
		if(latest2 == 2){
			latest2 = 24 ;
			ladMes();
		}
		else if( latest2 == 11){
			latest2 = 33 ;
			ladMes();
		}
		else if( latest2 == 25){
			latest2 = 85 ;
			ladMes();
		}
		else if( latest2 == 37){
			latest2 = 61 ;
			ladMes();
		}
		else if( latest2 == 68){
			latest2 = 90 ;
			ladMes();
		}
		else if( latest2 == 79){
			latest2 = 97 ;
			ladMes();
		}
		else if( latest2 == 23){
			latest2 = 7 ;
			snaMes();
		}
		else if( latest2 == 55){
			latest2 = 13 ;
			snaMes();
		}
		else if( latest2 == 70){
			latest2 = 32 ;
			snaMes();
		}
		else if( latest2 == 82){
			latest2 = 3 ;
			snaMes();
		}
		else if( latest2 == 93){
			latest2 = 67 ;
			snaMes();
		}
    		$("#"+latest2+"").addClass("bg2");
		//console.log("my lates" ,latest2);
		prev2 = latest2;
		if (latest2 == 100){
			$(".cnt").removeClass("cnt");
			$("#dice").css("visibility", "hidden");
			$(".messageBox").removeClass("messageBox");
			$(".cont").append('<div class="cel">VIOLET WIN</div>');
			
		}
	}
}
dice.addEventListener("click", rollDice);
function ladMes(){
	$(".messageBox").append('<div class="greenmes">Yay! You found a ladder! You can climb up now.</div>');
	setTimeout(remove,5000);
}
function snaMes(){
	$(".messageBox").append('<div class="redmes">Oh no! The snake bit you! You have to move your piece to the snakes tail.</div>');
	setTimeout(remove,5000);
}
function remove() {
	$('.redmes').remove();
	$('.greenmes').remove();
  }

  function refresh() {  
	location.reload();  
	} 

