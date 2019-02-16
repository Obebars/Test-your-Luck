var myNumber="";
var numberOfGuesses = 1;

function loadNumber(){
   myNumber = (Math.floor(Math.random()*10) +1);
  }

window.onload = loadNumber;

function check(){


  var guess = document.getElementById("myGuess").value;
  if(guess==myNumber){
          alert("correct, it took you " + numberOfGuesses + " guesses to get it right");
          document.location.reload();
    }else{
        numberOfGuesses++;
        alert("nope, try again!");
      }

}
