/* ASK AT LEAST FIVE QUESTIONS
   KEEP TRACK OF THE NUMBER OF QUESTIONS THE USER ANSWERED CORRECTLY.
   PROVIDE A FINAL MESSAGE AFTER THE QUIZ LETTING THE USER KNOW THE NUMBER OF QUESTIONS HE 
   OR SHE GOT RIGHT.
   RANK THE PLAYER. IF THE PLAYER ANSWERED ALL FIVE CORRECTLY, GIVE THAT PLAYER THE GOLD CROWN.
   3-4 IS A SILVER CROWN; 1-2 CORRECT ANSWERS IS A BRONZE CROWN AND 0 CORRECT IS NO CROWN AT ALL.
*/

// BEGIN CODING

//Five Questions
let questions = [
    {
        name: "Question One",
        question: "In 2000, what video game console was released in the US, featuring also as a dvd player, becoming the world's most sold console?",
        answer: "PLAYSTATION 2"
    },
    {
        name: "Question Two",
        question: "This seventh generation console featured a replaceable hard drive of it's time.",
        answer: "XBOX 360"
    },
    {
        name: "Question Three",
        question: "This console became very popular among children and older individuals because of it's unique way of play-style.",
        answer: "NINTENDO WII"
    },
    {
        name: "Question Four",
        question: "This gaming console brought forth online gaming for the first time in the home.",
        answer: "SEGA DREAMCAST"
    },
    {
        name: "Question Five",
        question: "The very first, demonstratable video game. Can you guess the name of the game? I have a hint.",
        answer: "TENNIS FOR TWO",
        hint: "Two player game with rackets"
    }
]

//Getting the body 
let body = document.querySelector("body");

//Getting the Title Div and creating a final question popup.
let title = document.querySelector("#welcome-area h1");
let end_quiz_popup = document.createElement("H2");
end_quiz_popup.innerHTML = "<i>Final Question</i>";
//Number of Questions Correctly
let questions_correct = 0;
//Getting the questions div
let question_area = document.getElementById("questions");
//Getting the number of questions
let number_of_questions = questions.length;
//Getting the results div
let results_area = document.getElementById("results");
//Getting the metals div
let metals = document.getElementById("metals");

//Getting each question
let question_array = 0;
let question_choices = questions[question_array].question.toUpperCase();

//Displaying the first question in the questions area
question_area.textContent = question_choices;

//Getting the answer input
let answer_input = document.querySelector("#answer-input input");
//Getting the answer submit button
let submit_button = document.querySelector("#answer-input button");
//Getting the 'next' button
let next_button = document.querySelector("#next-button-area #next-button button");

//Getting the check div
let check = document.getElementById("check");
check.textContent = " ";

//Check for answer
const correct = () => {
    questions_correct += 1;
    console.log("Answer was correct!");
    check.textContent = "Answer was correct!";
    number_of_questions -= 1;
}
const incorrect = () => {
    questions_correct -= 0;
    console.log("Answer was incorrect.");
}

/* Getting the answers to the questions. Calling the answer checker functions.*/
const get_answers = () => {
    if(number_of_questions === 5 && answer_input.value.toUpperCase() === questions[0].answer) {
        correct();
    } else if(number_of_questions === 5 && answer_input.value.toUpperCase() !== questions[0].answer) {
        incorrect();
    };
    if(number_of_questions === 4 && answer_input.value.toUpperCase() === questions[1].answer) {
        correct();
    } else if(number_of_questions === 4 && answer_input.value.toUpperCase() !== questions[1].answer) {
        incorrect();
    };
    if(number_of_questions === 3 && answer_input.value.toUpperCase() === questions[2].answer) {
        correct();
    } else if (number_of_questions === 3 && answer_input.value.toUpperCase() !== questions[2].answer) {
        incorrect();
    };
    if(number_of_questions === 2 && answer_input.value.toUpperCase() === questions[3].answer) {
        correct();
    } else if(number_of_questions === 2 && answer_input.value.toUpperCase() !== questions[3].answer) {
        incorrect();
    }; 
    if(number_of_questions === 1 && answer_input.value.toUpperCase() === questions[4].answer) {
        correct();
    } else if(number_of_questions === 1 && answer_input.value.toUpperCase() !== questions[4].answer) {
        incorrect();
    };
}


//Submit button function
const submit_answer = () => {
    get_answers();
    //Update results text content
    results_area.textContent = "Points Correct: " + questions_correct;
    if(questions_correct == 5) {
        metals.innerHTML = "You received the Gold Medal! <i id='gold' class='fas fa-medal'></i>";
    } else if(questions_correct == 4) {
        metals.innerHTML = "You received the Silver Medal! <i id='silver' class='fas fa-medal'></i>";
    } else if(questions_correct == 3) {
        metals.innerHTML = "You received the Bronze Medal! <i id='bronze' class='fas fa-medal'></i>";
    } else if(questions_correct < 3) {
        metals.innerHTML = "You have no medals.";
    } else {
        metals.innerHTML = "Wow! You received the Platinum Medal! <i id='platinum' class='fas fa-medal'></i>";
    }
}
submit_button.addEventListener("click", submit_answer, false);

//Submit Answer Function
submit_answer();

//Click 'next' button to replace question with the next one
const goNext = () => {
    question_array += 1;
    question_area.textContent = questions[question_array].question.toUpperCase();
    answer_input.value = null;
    check.textContent = null;
    if(number_of_questions <= 1) {
        title.appendChild(end_quiz_popup);
        next_button.style.display = "none";
    };
}
next_button.addEventListener("click", goNext, false);

