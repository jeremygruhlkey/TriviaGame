$(document).ready(function(){
    
    var questionSet = [
        globe = {
            question: "The earth is a spinning globe.",
            correct: "false",
            rightText: "Correct! The Earth as globe is myth! It's actually flat!",
            wrongText: "Wrong, you sheep! It's flat! NASA is lying to you!",
            image: "assets/images/flat-earth-whatevs.gif"
        },

        gravity = {
            question: "Gravity holds things to the earth.",
            correct: "false",
            rightText: "Correct! The flat Earth accelerates upward forcing you into it!",
            wrongText: "WRONG!! Gravity is a lie. Earth accelerates upward forcing you into it.",
            image: "assets/images/gravity3.jpg"
        },

        turtles = {
            question: "The disc Earth sits on the backs of two elephants standing on a giant turtle.",
            correct: "true",
            rightText: "Totally real and true. What's the turtle standing on? It's turtles all the way down.",
            wrongText: "You're really disappointing me here. You need to get more of your science from cheap YouTube vids.",
            image: "assets/images/turtle2.gif"
        },

        revolves = {
            question: "The Earth revolves around the sun.",
            correct: "false",
            rightText: "Of course it doesn't! Can you imagine? Earth is obviously the center of the universe.",
            wrongText: "Oh, is that what 'scientists' tell you? Do you FEEL like the earth is moving, genius? ",
            image: "assets/images/revolve2.gif"
        },

        spinning = {
            question: "The Earth is stationary and unmoving.",
            correct: "true",
            rightText: "Absollutely! Can you believe some people believe we are spinning at unimaginable speeds!?",
            wrongText: "Spinning? No. Impossible. So what holds the oceans on the planet?? Oh, I see. 'Gravity,' again.",
            image: "assets/images/spinning.gif",
        },
        
        gameOver = {
            image: "assets/images/earth-end.gif",
        }
        
    ];

    var wrongAnswers = 0;
    var rightAnswers = 0;
    var arrayPosition = 0;
    var currentQuestion;

    var timeRemaining = 10;
    var secondInterval;

    function startCount() {
        secondInterval = setInterval(countdown, 1000);
    }

    function countdown() {
        timeRemaining = timeRemaining - 1;
        $("#remaining").html(timeRemaining + " seconds remaining");

        if (timeRemaining === 0) {
            timeUp();
        }
    }

    $(".start").click(function() { 
        $(".start").addClass("hide");
        $(".game-box").addClass("unhide");
        makeGuess();
        // startCount();

    });

    function makeGuess(){
        if (wrongAnswers + rightAnswers === 5){
            gameEnd();
        }
        startCount();
        $(".answer-check").empty();
        $(".answer-image").empty();
        currentQuestion = questionSet[arrayPosition].question;
        $(".questions").html(currentQuestion);
        correctAnswer = questionSet[arrayPosition].correct;
        console.log("the question is " + currentQuestion);
        console.log("the correct answer is " + correctAnswer);
        
        $(".option").click(function() {
            var selection = $(this).attr('value');
            console.log("player chose " + selection);
            if (selection === questionSet[arrayPosition].correct){
                rightAnswer();
             }
            else {
                wrongAnswer();
            }

        });

        function rightAnswer(){
            $(".option").off("click");
            clearInterval(secondInterval);
            timeRemaining = 10;  
            rightAnswers = rightAnswers + 1;
            $(".answer-check").html(questionSet[arrayPosition].rightText);
            $('.answer-image').append("<img src = " + questionSet[arrayPosition].image + " />");
            arrayPosition = arrayPosition + 1;
            console.log("right answers " + rightAnswers);
            console.log("wrong answers " + wrongAnswers);
            console.log("new array position " + arrayPosition);
                if (wrongAnswers + rightAnswers === 5){
                    setTimeout(gameEnd, 5000);
                }
                else {setTimeout(makeGuess, 5000);}
        }

        function wrongAnswer(){
            $(".option").off("click");  
            clearInterval(secondInterval);     
            timeRemaining = 10;     
            wrongAnswers = wrongAnswers + 1
            $(".answer-check").html(questionSet[arrayPosition].wrongText);
            $('.answer-image').append("<img src = " + questionSet[arrayPosition].image + " />");
            arrayPosition = arrayPosition + 1;
            console.log("right answers " + rightAnswers);
            console.log("wrong answers " + wrongAnswers);
            console.log("new array position is " + arrayPosition);
                if (wrongAnswers + rightAnswers === 5){
                    setTimeout(gameEnd, 5000);
                }
                else {setTimeout(makeGuess, 5000);}
                
        }

    };

    function timeUp() {
        $(".option").off("click");
        clearInterval(secondInterval);
        timeRemaining = 10;             
        wrongAnswers = wrongAnswers + 1;
        arrayPosition = arrayPosition + 1;
        $(".questions").html("TIME'S UP!!!! That counts as a miss.");
            if (wrongAnswers + rightAnswers === 5){
                setTimeout(gameEnd, 5000);
            }
            else {setTimeout(makeGuess, 5000);}
        // timeRemaining = 10;
        // startCount();
    }

    function gameEnd() {
        arrayPosition = 0;
        timeRemaining = 10
        $(".answer-check").empty();
        $(".answer-image").empty();
        $(".questions").html("Game over! you got " + rightAnswers + " right answers & " + wrongAnswers + " wrong answers.");
        $('.answer-image').append("<img src = " + questionSet[5].image + " />");
        setTimeout(makeGuess, 10000);
    }
});
