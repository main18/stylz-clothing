import {cartActionsTypes} from './cart.types';

export const toggleCartDropdown = () => ({
    type: cartActionsTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = (item) => ({
    type: cartActionsTypes.ADD_ITEM,
    payload: item
});

//dicrease the quantity, but if quantity === 1 then the item will be removed, 
//because there is nothing to dicrease
export const RemoveItemFromCart = (item) => ({
    type: cartActionsTypes.REMOVE_ITEM,
    payload: item,
});

export const ClearItemFromCheckout = (item) => ({
    type: cartActionsTypes.DELETE_ITEM,
    payload: item,
});

