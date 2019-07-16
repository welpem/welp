import axios from 'axios';

const initialState = {
    loading: false,
    user: [],
    name: ''
}

const GET_USER = 'GET_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_NAME = 'SET_NAME';

//Gets user object from auth controller
export const getUser = ()=>{
    return{
        type: GET_USER,
        payload: axios.get('/auth/user')
    }
    
}
export const setName =([first_name, last_name])=>{
    let data = `${first_name} ${last_name}`
    return{
        type: SET_NAME,
        payload: data
    }
}
export const login = (email, password)=>{
    return{
        type:LOGIN,
        payload: axios.post('/auth/login', {email, password})
    }
}
export const logout = ()=>{
    let data = axios.get('/auth/logout')
    return{
        type: LOGOUT,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    
    console.log(action)
    switch(action.type) {
        case `${GET_USER}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${GET_USER}_FULFILLED`:
            return {
                ...state, user: action.payload.data, loading: false
            }
        // case GET_USER:
        // return {
        //     ...state, user: action.payload, loading: false
        // }
        case `${SET_NAME}_FULFILLED`:
            return {...state, name: action.payload};
        case `${LOGIN}_PENDING`:
            return {...state, loading: true};
        case `${LOGIN}_FULFILLED`:
            return {...state, user: action.payload.data, loading: false};
        case `${LOGOUT}_FULFILLED`:
            return {...state, user: action.payload.data,
                loading: false,
                name: ''
            }
        default: return state;
    }
}