import actionType from "./shop.type";

const INITIAL_STATE = {
    collection : null,
    isFetching: false,
    errorMessage: undefined
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.FETCH_COLLECTION_START:
            return{
                ...state,
                isFetching: true
            }
        case actionType.FETCH_COLLECTION_SUCCESS:
            return{
                ...state,
                isFetching: false,
                collection: action.payload
            }
        case actionType.FETCH_COLLECTION_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            } 
        default:
            return state
    }
}
