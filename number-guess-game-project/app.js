let game = true;
const form = document.querySelector('.form');
const guesses = document.querySelector('.guesses');
const hint = document.querySelector('.lowOrHi');
let random_number = Math.floor(Math.random() * 100 + 1);
let Guesses_Remaining = document.querySelector('.lastResult');
let i = 10;
let players_choices = [];


form.addEventListener('submit',function (sub) {
    let guessField = document.querySelector('.guessField');
    let guessSubmit = document.querySelector('.guessSubmit');
    let guessField_1 = parseInt(guessField.value);
    sub.preventDefault();
    if(game){
        pre_guesses(players_choices,guessField,hint);
        error_check(guessField_1,Guesses_Remaining,i);
        hint_message(random_number,guessField_1,hint,players_choices);
        win_state(random_number,guessField_1,guessField,hint);
        lose_state(Guesses_Remaining,guessField,hint,random_number,i,game);



    }
});



function pre_guesses(array, input,hint) {
    if(isNaN(input.value)){
        console.error("cant select that number")
    }else {
    array.push(input.value);
    for(let j = 0;j < array.length; j++){
        if(array[j] > 100 || array[j] < 1){
            array[j] = null;
            hint.innerHTML = ''
        }
    }
    guesses.innerHTML = array.toString();
    input.value = null;
    }
}


function error_check(guessField_1) {
    if(isNaN(guessField_1)){
        alert("Please Enter A Number");

    }
    if(guessField_1 > 100 || guessField_1 < 1){
        alert("Please Enter A number between 1 and 100");

    }
    else {
        Guesses_Remaining.innerHTML = `${--i}`;
    }
}

function hint_message(random,result,txt,array) {
    if(random > result){
        txt.innerHTML = "<h1>Too low! Try again!</h1>"
        for(let j = 0;j < array.length; j++){
            if(array[j] > 100 || array[j] < 1){
                array[j] = null;
                txt.innerHTML = ''
            }
        }
    }
    else if(random < result){
        txt.innerHTML = "<h1>Too High! Try again!</h1>"
        for(let j = 0;j < array.length; j++){
            if(array[j] > 100 || array[j] < 1){
                array[j] = null;
                txt.innerHTML = ''
            }
        }
    }
}

function win_state(random,result,field,txt) {
    if(random === result){
        field.disabled = true;
        txt.innerHTML = "<h1>You guessed correctly!</h1>" +
            "<h1>Start a New Game!</h1>";
        game = false;
    }
}

function lose_state(remaining,field,txt,random,i) {
    if(i === -1){
        field.disabled = true;
        txt.innerHTML = `<h1>Game Over! Number was ${random}</h1>` +
            "<h1>Start a New Game!</h1>";
        game = false;
    }
}