import actionType from "./shop.type";

const INITIAL_STATE = {
    collection : null
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.UPDATE_SHOP_DATA:
            return{
                ...state,
                collection: action.payload
            }
            
        default:
            return state
    }
}
