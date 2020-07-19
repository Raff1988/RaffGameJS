let clickedCard = null;
let preventClick = false;

var counter = 60;

setInterval( function() {
    counter--;

    if (counter >= 0 ) {
        id = document.getElementById("count");
        id.innerHTML = counter;
    }

    if (counter === 0) {
        id.innerHTML = "TIME OVER;"
    }
}, 1000);

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
