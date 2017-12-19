$(document).ready(function(){
    
    var questionSet = [
        globe = {
            question: "The earth is a spinning globe.",
            correct: "false",
            rightText: "Correct! The Earth as globe is myth! It's actually flat!",
            wrongText: "Wrong, you sheep! It's flat! NASA is lying to you!",
            image: src = "assets/images/flat-earth-whatevs.gif"
        },

        gravity = {
            question: "Gravity holds things to the earth.",
            correct: "false",
            rightText: "Correct! The flat Earth accelerates upward forcing you into it!",
            wrongText: "WRONG!! Gravity is a lie. Earth accelerates upward forcing you into it."
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
        currentQuestion = questionSet[arrayPosition].question;
        $(".questions").html(currentQuestion);
        correctAnswer = questionSet[arrayPosition].correct;
        console.log(currentQuestion);
        console.log(correctAnswer);
        $(".option").click(function() {
            var selection = $(this).attr('value');
            console.log(selection);
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
            $('#imagesList').append("<img src = " + questionSet[arrayPosition].image + " />");
            console.log("right answers" + rightAnswers);
            console.log("wrong answers" + wrongAnswers);
        }

        function wrongAnswer(){
            $(".option").off("click");            
            wrongAnswers = wrongAnswers + 1
            $(".answer-check").html(questionSet[arrayPosition].wrongText);
            console.log("right answers" + rightAnswers);
            console.log("wrong answers" + wrongAnswers);
        }
    };
});
