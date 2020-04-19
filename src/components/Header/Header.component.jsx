import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import "./Header.style.scss";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import { selectCurrentUser, selectCartHidden } from '../../redux/user/user.selector';

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser,hidden }) => {
    return (
        <div className="header">
            <Link to='/' className="logo-container"> 
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to='/shop' className="option">
                    SHOP
                </Link>
                <Link to='/contact' className="option">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        : <Link to='/sign-in' className="option">
                            SIGN IN
                          </Link>
                }
                <CartIcon />  
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);

