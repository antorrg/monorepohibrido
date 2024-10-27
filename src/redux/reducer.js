import {
    GET_CHARACTERS,
    GET_DETAIL,
    CLEAN_STATE
}from './actions'

const initialState = {
    characters :[],
    detail: [],
    currentPage: 1,
    totalPages: 1
}

const reducer = (state = initialState, {type, payload})=>{
    switch (type){
        case GET_CHARACTERS:
            return {
                ...state,
                characters:payload.results,
                currentPage: payload.info.currentPage ||1,
                totalPages: payload.info.pages,
            }
        case GET_DETAIL: 
        return {
            ...state,
            detail: payload,
        }
        case CLEAN_STATE:
            return{
                ...state,
                detail: payload
            }
        default :
        return {
            ...state,
        }
    }
}
export default reducer;