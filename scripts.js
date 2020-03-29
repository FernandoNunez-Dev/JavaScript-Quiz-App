
var curPage = 0,
correct = 0;
var myAnswers = [];
//Questions Array nested within myQuiz array
var myQuiz = [
    ["What is addEventListener() used for?", 1, "attach a click event", "Make a variable", "Make a function", "listens to HTML"],
    ["What does DOM stand for?", 1, "Document Object Model ", "Document Over Mountains", "Do Over Models", "Document Object Modal"],
    ["What does BOM stand for?", 4, "document Object Model", "nothing", "Big Object Model", " Browser Object Model "],
    ["When were arrow functions added to JavaScript?", 2, "ES2014", "ES2015", "ES2016", "ES2020"],
    ["What is the best Language for DOM Munipulation?", 3, "Python", "C", "JavaScript", "Kotlin"]
];

//Set Variables for all my selectors
var myHeader = document.getElementById("quizHeader");
var classname = document.getElementsByClassName("answer");
var myQuestion = document.getElementById("questions");
var progressBar = document.getElementById("progressBar");
var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");
var btnFinish = document.getElementById("finishQuiz");
checkPage();
btnNext.addEventListener("click", moveNext);
btnPrevious.addEventListener("click", moveBack);
btnFinish.addEventListener("click", endQuiz);
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myAnswer, false);
}
/// check for correct answer
function myAnswer() {
    var idAnswer = this.getAttribute("data-id");
    myAnswers[curPage] = idAnswer;
    if (myQuiz[curPage][1] == idAnswer) {
        //console.log('Correct Answer');
    } else {
        //console.log('Wrong Answer');
    }
    addBox();
}

function addBox() {
    for (var i = 0; i < myQuestion.children.length; i++) {
        var curNode = myQuestion.children[i];
        if (myAnswers[curPage] == (i + 1)) {
            curNode.classList.add("selAnswer");
        } else {
            curNode.classList.remove("selAnswer");
        }
    }
}
///check if an answer has been made
function moveNext() {
    if (myAnswers[curPage]) {
        //console.log('okay to proceed');
        if (curPage < (myQuiz.length - 1)) {
            curPage++;
            checkPage(curPage);
        } else {
            ///check if quiz is completed
            //console.log(curPage + ' ' + myQuiz.length);
            if (myQuiz.length >= curPage) {
                endQuiz();
            } else {
                //console.log('end of quiz Page ' + curPage);
            }
        }
    } else {
        //console.log('not answered');
    }
}

function endQuiz() {
    if (myAnswers[2]) {
        var output = "<div class='output'>Quiz Results<BR>";
        var questionResult = "NA";
        //console.log('Quiz Over');
        for (var i = 0; i < myAnswers.length; i++) {
            if (myQuiz[i][1] == myAnswers[i]) {
                questionResult = '<span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>';
                correct++;
            } else {
                questionResult = '<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>';
            }
            output = output + '<p>Question ' + (i + 1) + ' ' + questionResult + '</p> ';
        }
        output = output + '<p>You scored ' + correct + ' out of ' + myQuiz.length + '</p></div> ';
        document.getElementById("quizContent").innerHTML = output;
    } else {
        //console.log('not answered');
    }
}
/// add remove disabled buttons if there are no more questions in que
function checkPage(i) {
    if (curPage == 0) {
        btnPrevious.classList.add("hide");
    } else {
        btnPrevious.classList.remove("hide");
    }
    if ((curPage + 1) < (myQuiz.length)) {
        btnNext.classList.remove("hide");
    } else {
        btnNext.classList.add("hide");
        btnFinish.classList.remove("hide");
    }
    myHeader.innerHTML = myQuiz[curPage][0];
    for (var i = 0; i < myQuestion.children.length; i++) {
        var curNode = myQuestion.children[i];
        curNode.childNodes[1].innerHTML = capitalise(myQuiz[curPage][(i + 2)]);
        //check if answered already
        if (myAnswers[curPage] == (i + 1)) {
            curNode.classList.add("selAnswer");
        } else {
            curNode.classList.remove("selAnswer");
        }
    }
    ///update progress bar
    var increment = Math.ceil((curPage) / (myQuiz.length) * 100);
    progressBar.style.width = (increment) + '%';
    progressBar.innerHTML = (increment) + '%';
}

function moveBack() {
    if (curPage > 0) {
        curPage--;
        checkPage(curPage);
    } else {
        //console.log('end of quiz Page ' + curPage);
    }
}

function capitalise(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}
