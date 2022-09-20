let dice = document.getElementById('dice');
var outputDiv = document.getElementById('diceResult');
var latest1 = 0;
var latest2 = 0;
var startgame = 0;
var prev1 = 0;
var prev2 = 0;
var click = 0;
function rollDice() {
	//var x = document.getElementById("dotg");
   	//let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
	click += 1;
  	if ( click % 2 == 0){
		player1();
		console.log("player 1 click",click);
	}
	else{
		player2();
		console.log("player 2 click",click);
	}
   		
}

function player1() {
   console.log("player 1 is working");
   let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
   dice.dataset.side = result;
   if(result == 1){
	startgame = 1;
	}
   dice.classList.toggle("reRoll");
	if( startgame == 1){
	
	$(".colm").removeClass("bg1");
	latest1 = latest1 + result;
		if( latest1 > 100 ){
			latest1 = prev;
			}
		if(latest1 == 2){
			latest1 = 24 ;
		}
		else if( latest1 == 11){
			latest1 = 33 ;
		}
		else if( latest1 == 25){
			latest1 = 85 ;
		}
		else if( latest1 == 37){
			latest1 = 61 ;
		}
		else if( latest1 == 68){
			latest1 = 90 ;
		}
		else if( latest1 == 79){
			latest1 = 97 ;
		}
		else if( latest1 == 23){
			latest1 = 7 ;
		}
		else if( latest1 == 55){
			latest1 = 13 ;
		}
		else if( latest1 == 70){
			latest1 = 32 ;
		}
		else if( latest1 == 82){
			latest1 = 3 ;
		}
		else if( latest1 == 93){
			latest1 = 67 ;
		}
    		$("#"+latest1+"").animate().addClass("bg1");
		console.log(latest1);
		prev1 = latest1;
		if (latest1 == 100){
			$(".cnt").removeClass("cnt");
			$("#dice").css("visibility", "hidden");
		}
	}
		  

}
function player2() {
	console.log("player 2 is working");
   let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
	
   dice.dataset.side = result;	
   if(result == 1){
	startgame = 1;
	}
   dice.classList.toggle("reRoll");
	if( startgame == 1){
	
	$(".colm").removeClass("bg2");
	latest2 = latest2 + result;
		if( latest2 > 100 ){
			latest2 = prev2;
			}
		if(latest2 == 2){
			latest2 = 24 ;
		}
		else if( latest2 == 11){
			latest2 = 33 ;
		}
		else if( latest2 == 25){
			latest2 = 85 ;
		}
		else if( latest2 == 37){
			latest2 = 61 ;
		}
		else if( latest2 == 68){
			latest2 = 90 ;
		}
		else if( latest2 == 79){
			latest2 = 97 ;
		}
		else if( latest2 == 23){
			latest2 = 7 ;
		}
		else if( latest2 == 55){
			latest2 = 13 ;
		}
		else if( latest2 == 70){
			latest2 = 32 ;
		}
		else if( latest2 == 82){
			latest2 = 3 ;
		}
		else if( latest2 == 93){
			latest2 = 67 ;
		}
    		$("#"+latest2+"").animate().addClass("bg2");
		console.log(latest2);
		prev2 = latest2;
		if (latest2 == 100){
			$(".cnt").removeClass("cnt");
			$("#dice").css("visibility", "hidden");
		}
	}
}
dice.addEventListener("click", rollDice);






//console.log(result);
	//alert(result); 
	
    //$("#r-dot").animate({left:left}); 

//$(document).ready(function(){
//var left = '50%'; 
 // $("#dice1").click(function(){
   // $("#r-dot").animate({left:left});
  //});
//});