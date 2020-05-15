import {cartActionsTypes} from './cart.types';

export const toggleCartDropdown = () => ({
    type: cartActionsTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = (item) => ({
    type: cartActionsTypes.ADD_ITEM,
    payload: item
});