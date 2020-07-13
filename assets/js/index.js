let clickedCard = null;

function onCardClicked(e) {
    const target = e.currentTarget;

    if (
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
            console.log(' cards not equal');
            setTimeout(() => {

            clickedCard.className = 
            clickedCard.className.replace('done', '').trim() + 
            ' color-hidden';
            target.className =
            target.className.replace('done', '').trim() + 
            ' color-hidden';
            clickedCard = null;
            }, 750);
        } else {
            clickedCard = null;
        }
        clickedCard = null;
}

}