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
        }
        
    ];

    var wrongAnswers = 0;
    var rightAnswers = 0;
    var arrayPosition = 0;
    var currentQuestion;

    $(".start").click(function() { 
        $(".start").addClass("hide");
        $(".game-box").addClass("unhide");
        makeGuess();

    });

    function makeGuess(){
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
            rightAnswers = rightAnswers + 1;
            $(".answer-check").html(questionSet[arrayPosition].rightText);
            $('.answer-image').append("<img src = " + questionSet[arrayPosition].image + " />");
            arrayPosition = arrayPosition + 1;
            console.log("right answers " + rightAnswers);
            console.log("wrong answers " + wrongAnswers);
            console.log("new array position " + arrayPosition);
            setTimeout(makeGuess, 4000);
        }

        function wrongAnswer(){
            $(".option").off("click");            
            wrongAnswers = wrongAnswers + 1
            $(".answer-check").html(questionSet[arrayPosition].wrongText);
            $('.answer-image').append("<img src = " + questionSet[arrayPosition].image + " />");
            arrayPosition = arrayPosition + 1;
            console.log("right answers " + rightAnswers);
            console.log("wrong answers " + wrongAnswers);
            console.log("new array position is " + arrayPosition);
            setTimeout(makeGuess, 4000);
        }
    };
});
