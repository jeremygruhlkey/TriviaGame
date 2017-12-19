$(document).ready(function(){
    
    var questionSet = [
        globe = {
            question: "The earth is a spinning globe.",
            correct: "false",
            rightText: "Correct! The Earth as globe is myth! It's actually flat!",
            wrongText: "Wrong, you sheep! It's flat! NASA is lying to you!"
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
        console.log(currentQuestion)
        $(".questions").html(currentQuestion);
        $(".option").click(function() {

        });
    };
});
