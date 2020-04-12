import {
     CHANGE_SEARCH_FIELD,
     REQUEST_ROBOTS_PENDING,
     REQUEST_ROBOTS_SUCCESS,
     REQUEST_ROBOTS_FAILED
} from './constants.js'

const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/users';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING})
    fetch(JSON_PLACEHOLDER_URL)
            .then(res => res.json())
            .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
            .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}