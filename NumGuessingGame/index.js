
const max=100;
const min=1;

const ans= Math.floor(Math.random()*(max-min +1))+min;

let attempts=0;
let running=true;
let guess;

while(running){
    guess=window.prompt(`Guess a number between ${min}-${max}`);
    guess=Number(guess);

    if(isNaN(guess) || guess<min || guess>max){
         window.alert("PLEASE ENTER VALID NUMBER");

    }
    else{
        attempts++;
        if(guess<ans){
            window.alert("Too low, try again");

        }
        else if(guess>ans){
            window.alert("Too High, try again");
        }
        else{
        
           window.alert(`CORRECT! THE NUMBER IS ${ans} and the number of attempts are ${attempts} `);
            running = false;
         }
    }
    
}