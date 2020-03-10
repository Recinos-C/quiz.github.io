var Quiz = [{
        Q1: "What is your quest?",
        options: ["To seek the holy grail", "To go to Camalot", "To find the bunny", "To seek thy coconuts"],
        answer: "To seek the holy grail"

    }, {
        Q2: "What is your favorite color?",
        options: ["Blue", "Green", "Red", "Black"],
        answer: "Blue"

    },
    {
        Q3: "What is your name?",
        options: ["Taco", "Arthur", "Harambe", "Erik"],
        answer: "Arthur"
    },
    {
        Q4: "What is the Capital of Assyria",
        options: ["Libya", "Alexandria", "Camelot", "Assur"],
        answer: "Assur"
    },
    {
        Q4: "What is the air speed velocity of an unladen swallow?",
        options: ["European or African?", "345", "huh?", "This is dumb"],
        answer: "European or African?"
    }
];
var time = 30;
var scoreRow = $("<tr>");
var score = $("td").text(username).value;
var username = "";
var highscores = [];
var container = $(".container");
var result = [];
var scoreCount = 0;
// 
var index = 0

function reset(){

    scoreCount = 0;
    index = 0;
    time = 30;
    $(".Quiz-btn-styles").remove();
}


$("#begin-btn").on("click", function () {

    container.removeAttr("display: none");

    var setTimer = setInterval(function () {
        time--;
        $("h2").text("Time: " + time);
        if (time === 0) {
            clearInterval(setTimer);
            reset();
        }

    }, 1000);

    function questions() {
        for (i = 0; i < 4; i++) {

            var quizBtn = $("<button>");
            quizBtn.addClass("Quiz-btn-styles");
            quizBtn.attr("quiz-question", );
            quizBtn.text(Quiz[index].options[i]);

            quizBtn.on("click", function () {
                // logs the current selection 

                console.log($(this).text())
                
                result.push($(this).text())
                if ($(this).text() === Quiz[index].answer) {
                    console.log($(this).text());
                    scoreCount++;
                    console.log(result[index] + Quiz[index].answer);
                    console.log("your score is " + scoreCount);
                }
                console.log(result.length)
                index++;
                console.log("the index is at " + index);
                questions();

                if (index === 5) {
                    alert("You Finished! Your score is " + scoreCount);
                    var scoreText = "Last Score ";
                    scoreRow.append(scoreText + scoreCount);
                    tbody.append(scoreRow);
                    clearInterval(setTimer);
                    reset();
                }


            });
            $("#quiz-area").append(quizBtn)
        }

    };
    questions();

});