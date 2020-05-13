import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/stylz.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <div className='logo'>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>
            </div>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                    </Link>
                <Link className='option' to=''>
                    CONTACT
                    </Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    )}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);