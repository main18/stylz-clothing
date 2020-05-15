import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
const CartIcon = ({ toggleCartDropdown, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartDropdown}>
            <ShoppingBag className='shopping-bag' />
            <span className='number-of-items'>{itemCount}</span>
        </div>
    );
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);