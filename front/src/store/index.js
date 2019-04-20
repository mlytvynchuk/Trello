import { createStore } from 'redux'
import rootReducer from '../reducers';
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
const logger = (state) => (next) => (action) => {
    console.log("Action fired ", action)
    next(action)
}
const error = (state) => (next) => (action) => {
    try {
        next(action)
    }
    catch (e) {
        console.log("Error: ", e)
    }
}
const middleware = applyMiddleware(logger, error, thunk)
const store = createStore(rootReducer, middleware);
store.dispatch(dispatch => {
    axios.get('http://localhost:8000/api/lists/')
        .then(resp => {
            dispatch({ type: "RECIEVE_LISTS", payload: resp.data })
        })
})
export default store;

