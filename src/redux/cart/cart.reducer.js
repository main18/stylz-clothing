import { cartActionsTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIALE_STATE = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state = INITIALE_STATE, action) => {
    switch (action.type) {
        case cartActionsTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case cartActionsTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        default:
            return state;
    }
}

export default cartReducer;