'use strict';

let secretNumber = Math.trunc(Math.random()*20);
let score = {
    'value':20,
}
let highscore = {
    'value':0,
}

let displayMessage = (message) => document.querySelector('.message').textContent = message;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess)
        displayMessage("No number!!");
    else if(guess === secretNumber)
    {
        if(score.value > highscore.value)
            highscore.value = score.value;
        displayMessage("Correct Number!!!");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor='Green';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.highscore').textContent = highscore.value;
    }else if(guess > secretNumber)
    {
        displayMessage("To high!!");
        decrementScore(score);
    }else if(guess < secretNumber)
    {
        displayMessage("To low!!");
        decrementScore(score);
    }
})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent = score.value = 20;
    secretNumber = Math.trunc(Math.random()*20);
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width="15rem";
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.guess').value = '';
})

function decrementScore(score)
{
    if(score.value > 1)
    {
        score.value--;
        document.querySelector('.score').textContent = score.value;
    }
    else
    {
        displayMessage("You lost the game!!");
        document.querySelector('.score').textContent = --score.value;
    }
}