# Homework-4 (Code Quiz)
## Links

[Repository](https://github.com/Aladd616/Code-Quiz-ALL)

[Pages](https://aladd616.github.io/Code-Quiz-ALL/)

## Description

A webpage that is designed to allow users to cycle through a timed multiple choice quiz that cycles to the next question and set of answers when an answer is chosen as well as subtracting 10 seconds from the timer when a wrong answer is chose.  The quiz ends with a text field allowing the user to enter their initials or an alias and saves this as well as the timer value at the end of the quiz in internal memory that is then shown on a high score page at the beginning of the quiz.

the order of the answers is randomized but the order of the question is constant

each question is an object with the question, and array of answers, and the correct answer stored as properties

this array of answers is then utilized to create buttons that can be clicked to put in the answers

a function is then used to compare the innertext on the button to the answer if this answer is wrong the timer removes 10 seconds

### References
[Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k)
    this video was used as reference in the writing of this code.