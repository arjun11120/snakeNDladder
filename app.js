let dice = document.getElementById('dice');
var outputDiv = document.getElementById('diceResult');
function rollDice() {
   var x = document.getElementById("dotg");
   let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
   dice.dataset.side = result;
   dice.classList.toggle("reRoll");
   //console.log(result);
	//alert(result);
	//var re = (result*10)+4;
	//var left = re+'%'; 
    //$("#r-dot").animate({left:left});
    $("#r-dot").prependTo($('#1'));

}
dice.addEventListener("click", rollDice);
//var left = (4*10)+4;



//$(document).ready(function(){
//var left = '50%'; 
 // $("#dice1").click(function(){
   // $("#r-dot").animate({left:left});
  //});
//});