export const cartActionsTypes = {
    TOGGLE_CART_DROPDOWN: 'TOGGLE_CART_DROPDOWN',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
}

/* 
    REMOVE_ITEM is for dicreasing the quantity of an element in the checkout page, but
    if the quantity is 1, when firing this action type the item will be removed.
*/