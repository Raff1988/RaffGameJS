let clickedCard = null;
let preventClick = false;

document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    timeLeft = 60

    function countDown() {
        setInterval(function(){
            if (timeLeft <= 0) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
            }, 1000)
            }
            
            startBtn.addEventListener('click', countDown)
            
        })




function onCardClicked(e) {
const target = e.currentTarget;

    if (
    preventClick ||
    target === clickedCard || 
    target.className.includes('done')
    ) {
        return;
    }
    
    target.className = target.className
    .replace('color-hidden', '')
    .trim();
    target.className += ' done';

    if (!clickedCard) {

    clickedCard = target;
    } else if (clickedCard) {

    if (
        clickedCard.getAttribute('data-color') !== 
        target.getAttribute('data-color')
        ) {
        preventClick = true;
        setTimeout(() => {
        clickedCard.className = 
        clickedCard.className.replace('done', '').trim() + 
        ' color-hidden';
        target.className =
        target.className.replace('done', '').trim() + 
        ' color-hidden';
        clickedCard = null;
        preventClick = false;
             }, 750);
        } else {
        clickedCard = null;




        
        }   
    }
}
