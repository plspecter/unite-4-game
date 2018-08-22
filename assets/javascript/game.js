var wins = 0;
var losses = 0;
var totalScore = 0;
var addedScore = 0;
var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var gemChosen = false;
var firstGem = "";

$(document).ready (function()  {

$("#gem1").on("click", function() {
console.log("this functions");
if (gemChosen) {
 firstGem = this.value;
}
  crystalValue.length = items[Math.floor(Math.random()* items.length)];
  $("#totalScore").html(totalScore);

});   

});
