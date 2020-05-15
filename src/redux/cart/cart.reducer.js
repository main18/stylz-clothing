import { cartActionsTypes } from './cart.types';
import { addItemToCart,RemoveItemFromCart } from './cart.utils';

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
        
        case cartActionsTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: RemoveItemFromCart(state.cartItems, action.payload),
            }

        case cartActionsTypes.DELETE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id),
            }
        default:
            return state;
    }
}

export default cartReducer;