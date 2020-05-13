import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
const CartIcon = ({toggleCartDropdown}) => {
    return (
        <div className='cart-icon' onClick={toggleCartDropdown}>
            <ShoppingBag className='shopping-bag' />
            <span className='number-of-items'>0</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);