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
};

//Make variables for current score and target score   
var currentScore = 0;
var targetScore = 0;

//Makes wins and losses variables
var wins = 0;
var losses = 0;

//Functions
//============================================


//Make the computer get a random number
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1))
};

//Starts the game (and restarts the game)

var startGame = function () {
    //Reset the Current Score (when you reload the page the score is 0)
    currentScore = 0;

    //Set a new Target Score (between 19 and 120)
    //We are referencing the targetScore div in the global scope.. "var targetScore = 0"
    targetScore = getRandom(1, 12);

    //Set different values for each of the crystals (between 1 and 12)
    //First reference the main umbrella object, crystal. Then target the object within it, green. then target the value, .value
    crystal.green.value = getRandom(1, 12)
    crystal.blue.value = getRandom(1, 12)
    crystal.pink.value = getRandom(1, 12)
    crystal.orange.value = getRandom(1, 12)

    //Change the HTML to reflect all of these changes
    $("#currentScore").text(currentScore);
    $("#targetScore").text(targetScore);

};

//Check if user won or lost and reset the game
var checkWin = function () {
    //Check if the current score is larger than the current score (because we want the user to match the target score, not go over it)
    if (currentScore > targetScore) {
        alert("Sorry, you lose :(")
        console.log("you lost");

        //Add to the losses counter variable at the top
        losses++

        //Change loss count in HTML
        $("#losses").text(losses);

        //Restart the game
        startGame();
    }
    else if (currentScore === targetScore) {
        alert("congrats u won")
        console.log("winner");

        //Add to the wins counter variable at the top
        wins++

        //Change wins in HTML
        $("#wins").text(wins);

        //Restart the game
        startGame();
    }
};

    //Respond to clicks on the crystals
    var addValues = function (clickedCrystal) {
        //Change currentScores
        currentScore += clickedCrystal.value

        //Change the HTML to reflect the changes in current scores
        $("#currentScore").text(currentScore)

        //Call the checkWsin function
        checkWin()
    };


//Main Process (on click events)
//===============================================

//Starts the game

startGame();

$("#gem1").click(function () {
    addValues(crystal.green);
});

$("#gem2").click(function () {
    addValues(crystal.blue);
});

$("#gem3").click(function () {
    addValues(crystal.pink);
});

$("#gem4").click(function () {
    addValues(crystal.orange);
});



