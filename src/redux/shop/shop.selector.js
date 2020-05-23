import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collection
)

export const seleteShopItemsForPriview = createSelector(
    [selectShopItems],
    collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopItems],
    collections => (collections ? collections[collectionUrlParam] : null)
)