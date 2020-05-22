import actionType from "./shop.type";

export const updateShopData = collectionMap => ({
    type: actionType.UPDATE_SHOP_DATA,
    payload: collectionMap
});