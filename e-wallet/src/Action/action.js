function addNewCard(cards) {
    return {
        type: 'ADD_NEW_CARD',
        payload: cards
    }
}
function activeCard(card) {
    return {
        type: 'ACTIVE_CARD',
        payload: card
    }
}

export { addNewCard, activeCard }