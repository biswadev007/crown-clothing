import SHOP_DATA from "../../pages/ShopPage/Shop.data";

const INITIAL_STATE = {
    collection : SHOP_DATA
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}
