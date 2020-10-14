# JavaScript-Quiz-App


As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A computer science student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```


Created a Quiz app Utilizing HTML, CSS, Bootstrap, JavaScript.

-Started off with an array made up of all my questions. Which was nested within another array called myQuiz.

-I set variables for all my selectors. Getting elements by id and also by className.

-First function(myAnswer) is to check for correct answer.

-function(moveNext) made to check if a decision on an answer has been made. If answer has been made, then proceed with quiz.

-function(checkPage) to add and remove disabled buttons if there are no more questions in que.

-Utilized bootstrap's progress bar. The progress bar increments in percentage as the questions are being answered.

-function(endQuiz) Display results from the quiz with check marks of all right anwers and X's for all wrong answers.


-_Software Utilized-_
- JavaScript
- HTML
- CSS
- Bootstrap

