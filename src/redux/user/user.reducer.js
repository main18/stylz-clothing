import { UserActionsTypes } from './user.types';

const INITIALE_STATE = {
    currentUser: null
}

const userReducer = (state = INITIALE_STATE, action) => {
    switch (action.type) {
        case UserActionsTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            return state;
    }
};

export default userReducer;
