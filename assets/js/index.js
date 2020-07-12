let clickedCard = null;

function onCardClicked(e) {
    const target = e.currentTarget;

    target.className = target.className
    .replace('color-hidden', '')
    .trim();

console.log(target.getAttribute('data-type'));


    if (!clickedCard) {

    clickedCard = target;
    } else if (clickedCard) {

}

}