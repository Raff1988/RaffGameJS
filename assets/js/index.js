//
let clickCard = null;
let preventClick = false;


function resetTime() {
clearTimeout(countdown);
countdown = setTimeout(enablelose, 5000);

}

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds < 1) {
        clearInterval(countdown);
        alert("You lose");

document.getElementById("reset").onclick = function() {
  document.getElementById("countdown").value = "";
};
        
  }
}, 1000);







//The onCardClicked function was added so that the card that was clicked, then the card would be selected//**

function onCardClicked(e) {
const target = e.currentTarget;

    if (
    preventClick ||
    target === clickCard || 
    target.className.includes('done')
    ) {
        return;
    }
    
    target.className = target.className
    //Added the replace function, allowed the cards color to show once we have clicked a color//**
    .replace('color-hidden', '')
    .trim();
    
  
    target.className += ' done';

    //If we havent clciked card, to keep track of the card, display its colour//
    if (!clickCard) {

    clickCard = target;
    } else if (clickCard) {
      //If we  have already clicked on a card, need to check if the new card matches the old card//
        if (
        clickCard.getAttribute('data-color') !== 
        target.getAttribute('data-color')
        ) {
        preventClick = true;
        setTimeout(() => {
        clickCard.className = 
        clickCard.className.replace('done', '').trim() + 
        ' color-hidden';
        target.className =
        target.className.replace('done', '').trim() + 
        ' color-hidden';
        clickCard = null;
        preventClick = false;
          //Added a timer of 750th of a second, so that if the wrong cards are selected, then they are sent back to//
             }, 750);
        } else {
        clickCard = null;




        
        }   
    }
}