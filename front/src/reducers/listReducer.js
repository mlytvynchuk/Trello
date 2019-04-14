import { CONSTANS } from '../actions/';
const initialState = [
    {
        title: "Very Important",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Make frontend with react.js"
            },
            {
                id: 1,
                text: "Make an django rest api for application"
            }
        ]
    },
    {
        title: "Planning to do",
        id: 1,
        cards: [
            {
                id: 3,
                text: "Finish prometheus courses"
            },
            {
                id: 4,
                text: "Make homework"
            },
            {
                id: 5,
                text: "Buy new airpods"
            }

        ]
    },
    {
        title: "Already DONE",
        id: 3,
        cards: [
            {
                id: 6,
                text: "Learn django"
            },
            {
                id: 6,
                text: "Learn react.js"
            },


        ]
    }

]
let listID = 4;
let cardID = 10;
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1;
            return [...state, newList];
        case CONSTANS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            }
            const newState = state.map(list => {

                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }
                else {
                    return list;
                }

            })
            cardID += 1;
            return newState

        default: return state;
    }
}

export default listReducer;