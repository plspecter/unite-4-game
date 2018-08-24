$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    //Need a shortcut to add the numbers of 19 through 120 here
    var targetScore;
    var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var crystalChosen = '';
    var crystalChosen2 = '';
    var valueHTML = [];
    var gem1Chosen = [];
    var gem2Chosen = [];
    var firstGem;
    var totalScore;

    //Document.ready makes this fire without a function
    //Math random for targetScore is - the computer chooses a number between 19 and 120 
    targetScore = Math.floor(Math.random() * 120) + 19
    valueHTML.push('<span>' + targetScore + '</span>')
    $("#targetScore").html(targetScore);
    crystalChosen = " ";



    $(".gem").on("click", function () {
        for (var i = 0; i < crystalValue.length; i++) {
            crystalChosen = crystalValue[Math.floor(Math.random() * crystalValue.length++)];
            console.log(crystalChosen);
            //   crystalChosen.push('<span>' + totalScore + "</span>")
            // crystalChosen.text('<span>' + totalScore + '</span>')
            $("#totalScore").html(crystalChosen[i]);
        };

    });


    //     //How do we add - "if we click the same gem more than once it adds up its given value to the html"?-
    //     //How do we add - "if we click on another gem, the total score goes up by the value of both (addition)"-



    // });


    // $(".gem").on("click", function () {
    //     for (var i = 0; i < crystalValue.length; i++) {
    //         var a = crystalValue[Math.floor(Math.random() * crystalValue.length++)];
    //         var b = crystalValue[Math.floor(Math.random() * crystalValue.length++)];
    //         console.log(crystalChosen);
    //         //   crystalChosen.push('<span>' + totalScore + "</span>")
    //         $("#totalScore").val(a+b);
    //         console.log("#totalScore");
    //     };



    //How do we add - "the target score must be the same as the values from the added crystal values to win"

    if (totalScore === targetScore) {
        wins++;
    } else {
        losses++;

    };
});







