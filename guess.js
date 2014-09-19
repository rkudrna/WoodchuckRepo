$(function() {

    var answer = 700;

    var $message = $('#message'); 
    //= prompt("How many pounds of wood do you think Chuck can chuck in a day?")

//how to set userGuess to user input value?
        



    $('#submit').click(compareGuess);
   

function compareGuess() {
        userGuess = parseInt($('#userInput').val());

      if (userGuess > answer) {
            $message.text("Not quite that much. Guess again.");
        } else {
            if(userGuess < answer) {
                $message.text("You underestimate Chuck! Try again.");
            } else {
                $message.text("You got it! Chuck could chuck 700lbs of wood in a day.")
            }
        };

}
});
