import { CONSTANS } from '../actions/';
const initialState = [
    {
        title: "Very Important",
        id: `list-${0}`,
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
        id: `list-${1}`,
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
        id: `list-${2}`,
        cards: [
            {
                id: 6,
                text: "Learn django"
            },
            {
                id: 7,
                text: "Learn react.js"
            },


        ]
    }

]
let listID = 4;
let cardID = 8;
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID += 1;
            return [...state, newList];
        case CONSTANS.ADD_CARD:
            {
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
                return newState;
            }
        case CONSTANS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
                type
            } = action.payload;
            const newState = [...state];
            if (type === "list") {
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);

            }
            // in the same list change order of cards
            else if (droppableIdStart === droppableIdEnd) {
                const mylist = state.find(list => droppableIdStart === list.id);
                const card = mylist.cards.splice(droppableIndexStart, 1);
                mylist.cards.splice(droppableIndexEnd, 0, ...card);
            }
            else {
                const listStart = state.find(list => droppableIdStart === list.id);
                const listEnd = state.find(list => droppableIdEnd === list.id);
                const card = listStart.cards.splice(droppableIndexStart, 1);
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }
            return newState;
        default: return state;
    }
}

export default listReducer;