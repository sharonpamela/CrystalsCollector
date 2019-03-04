window.onload = function () { 

    //variables

    // 1. generate a random number for the user to guess between 19 - 120
    let randomTargetNum = getRandomInt(19, 120);
    console.log(randomTargetNum);

    // 2. generate 4 numbers between 1-12 and assign each number to each of the crystals
    let crystal1Random = getRandomInt(1, 12);
    let crystal2Random = getRandomInt(1, 12);
    let crystal3Random = getRandomInt(1, 12);
    let crystal4Random = getRandomInt(1, 12);

    console.log(crystal1Random);
    console.log(crystal2Random);
    console.log(crystal3Random);
    console.log(crystal4Random);

    // 2. display the random number for user to target on the div created for it
    $(ranNumberCont")

    // 3. display the stats for wins, loses, and total wins
    // 4. listen for an event click on any of the crystals
        // every time the user clicks on a crystal, take its value and add it to the accumulated score
        // if the accumulated score exceeds the target number: display user lost
            //update loss count
            //update user score =0
            //restart the game with new random number and new crystal values
        //if the accumulated score === the target number: display user won
            //update the win count
            //update user score =0
            //restart the game with new random number and new crystal values

    //function to create a random integer number between a given range of min-max
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }

}
