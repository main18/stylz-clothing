import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => {
        return acc + (cartItem.quantity * cartItem.price);
    },0)
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity;
    }, 0)
);