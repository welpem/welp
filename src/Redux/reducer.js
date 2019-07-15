// import axios from 'axios';

const initialState = {
    loading: false,
    user: [], 
}

const GET_USER = 'GET_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_NAME = 'SET_NAME';

//Gets user object from auth controller
export function getUser(userInfo) {
    console.log(userInfo)
    return {
        type: GET_USER,
        payload: userInfo
    }
}

export default function reducer(state = initialState, action) {

    switch(action.type) {

        case GET_USER:
        return {
            ...state,
            user: action.payload
        }
        default: return state;
    }
}