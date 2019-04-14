import { CONSTANS } from '../actions'
export const addCard = (listID, text) => {
    return {
        type: CONSTANS.ADD_CARD,
        payload: { listID, text }
    }
}
export const deleteCard = (cardID, listID) => {
    return {
        type: CONSTANS.DELETE_CARD,
        payload: { cardID, listID }
    }
}