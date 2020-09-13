import { createSelector } from 'reselect';

const selectUser = state => state.user;
const selectHidden = state => state.cart;

export const selectCurrentUser = createSelector(
    [selectUser],
    user =>user.currentUser
);

export const selectCartHidden = createSelector(
    [selectHidden],
    cart => cart.hidden
);