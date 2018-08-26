
$(document).ready(function () {

  //Assign crystal as an object and create objects within it with properties
  //Crystal is the umbrella term for each individual one  
    var crystal = {
//First crystal is green, describe it using the curly braces, always..
//..put a coma after the end braces to tell it theres more objects
        green: {
        name: "Green",
        value: 0
        },
        blue: {
        name: "Blue",
        value: 0
        },
        pink: {
        name: "Pink",
        value: 0
        },
        orange: {
        name: "Orange",
        value: 0
        }
    }

 //Make variables for current score and target score   
    var currentScore = 0;
    var targetScore = 0;

  //Makes wins and losses variables
    var wins = 0;
    var losses = 0;

    //Functions
    //============================================


//Make the computer get a random number
var randomNumber = function(min, max) {
    return Math.floor(Math.random()* (max-min + 1))
}