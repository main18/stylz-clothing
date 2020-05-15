//adding item to the cart
export const addItemToCart = (cartItems, itemToAdd) => {
    //return the first matching element ( matching to the condition )
    const existingCartItems = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id
    );

    if (existingCartItems) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}


//dicreasing the quantity, if it's 1 then remove the item
export const RemoveItemFromCart = (cartItems, itemToRemove) => {
    const existingItems = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
    );

    if (existingItems.quantity === 1) {
        /*return all the elements in the array that match the condition, and do not return
        those who does not match */
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === itemToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}