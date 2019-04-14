import { CONSTANS } from '../actions'
export const addList = (title) => {
    return (
        {
            type: CONSTANS.ADD_LIST,
            payload: title
        }
    )
}