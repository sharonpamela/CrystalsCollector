
window.onload = function () { 

    //variables
    let wins =0;
    let losses =0;
    let currentScore =0;
    let randomTargetNum =0;
    
    // 1. generate a random number for the user to guess between 19 - 120 and display it
    // 2. generate 4 numbers between 1-12, assign number to crystals, and display it
    resetRandomVars();

    // 3. display the stats for wins, loses, and total wins
    $("#winsLabel").text(wins);
    $("#lossLabel").text(losses);
    $("#totalWinsLabel").text(currentScore);


    // 4. listen for an event click on any of the crystals
    $(".crystal").on("click", function(){
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);

        // every time the user clicks on a crystal, take its value and add it to the accumulated score
        currentScore += crystalValue;
        $("#totalScoreLabel").text(currentScore);

        // if the accumulated score exceeds the target number: display user lost
        if (currentScore > randomTargetNum){
            //update loss count
            losses++;
            $("#lossLabel").text(losses);
            //restart the game variables, get new random number and new crystal values
            resetRandomVars();
        } 
        //if the accumulated score === the target number: display user won
        else if (currentScore === randomTargetNum){
            //update the win count
            wins++;
            $("#winsLabel").text(wins);
            //restart the game variables, get new random number and new crystal values
            resetRandomVars();
        }
            
        
           
    });
    
    function resetRandomVars(){
        $("#crystal1").attr("data-crystalvalue", getRandomInt(1, 12));
        $("#crystal2").attr("data-crystalvalue", getRandomInt(1, 12));
        $("#crystal3").attr("data-crystalvalue", getRandomInt(1, 12));
        $("#crystal4").attr("data-crystalvalue", getRandomInt(1, 12));
        randomTargetNum = getRandomInt(19, 120);
        $("#randNumberLabel").text(randomTargetNum);
        //update user's accumulated score=0
        currentScore =0;
        $("#totalScoreLabel").text("");
        console.log(randomTargetNum);
    }

    //function to create a random integer number between a given range of min-max
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
}//end window load
