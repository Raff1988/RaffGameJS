let clickCard = null;
let preventClick = false;


var seconds = document.getElementById("countdown").textContent
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds < 1) {
        clearInterval(countdown);
        alert("You lose");
    }
}, 1000);



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
    .replace('color-hidden', '')
    .trim();
    target.className += ' done';

    if (!clickCard) {

    clickCard = target;
    } else if (clickCard) {

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
             }, 750);
        } else {
        clickCard = null;




        
        }   
    }
}
