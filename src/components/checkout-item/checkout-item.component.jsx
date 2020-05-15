import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { ClearItemFromCheckout, RemoveItemFromCart, addItem } from '../../redux/cart/cart.actions'



const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, price, imageUrl, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='img-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10006;</div>
        </div>
    );
}

const mapDispatchToPorps = (dispatch) => ({
    clearItem: (item) => dispatch(ClearItemFromCheckout(item)),
    removeItem: (item) => dispatch(RemoveItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToPorps)(CheckoutItem);