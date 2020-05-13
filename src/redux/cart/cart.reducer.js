import {cartActionsTypes} from './cart.types';

const INITIALE_STATE = {
    hidden: true
}

const cartReducer = (state= INITIALE_STATE, action) => {
    switch(action.type){
        case cartActionsTypes.TOGGLE_CART_DROPDOWN:
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;