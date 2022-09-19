let dice = document.getElementById('dice');
var outputDiv = document.getElementById('diceResult');
var latest = 0;
var startgame = 0;
var prev = 0;

function rollDice() {
   var x = document.getElementById("dotg");
   let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
   dice.dataset.side = result;	
   if(result == 1){
	startgame = 1;
	}
   dice.classList.toggle("reRoll");
	if( startgame == 1){
	
	$(".colm").removeClass("bg");
	latest = latest + result;
		if( latest > 100 ){
			latest = prev;
			}
		if(latest == 2){
			latest = 24 ;
		}
		else if( latest == 11){
			latest = 33 ;
		}
		else if( latest == 25){
			latest = 85 ;
		}
		else if( latest == 37){
			latest = 61 ;
		}
		else if( latest == 68){
			latest = 90 ;
		}
		else if( latest == 79){
			latest = 97 ;
		}
		else if( latest == 23){
			latest = 7 ;
		}
		else if( latest == 55){
			latest = 13 ;
		}
		else if( latest == 70){
			latest = 32 ;
		}
		else if( latest == 82){
			latest = 3 ;
		}
		else if( latest == 93){
			latest = 67 ;
		}
    		$("#"+latest+"").animate().addClass("bg");
		console.log(latest);
		prev = latest;
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