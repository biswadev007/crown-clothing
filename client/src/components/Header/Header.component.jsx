import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./Header.style";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import { selectCurrentUser, selectCartHidden } from '../../redux/user/user.selector';

import { signoutStart } from "../../redux/user/user.action"

const Header = ({ currentUser, hidden, signoutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/about'>
                    ABOUT US
                </OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={signoutStart}>SIGN OUT</OptionLink>
                        : <OptionLink to='/sign-in'>
                            SIGN IN
                        </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signoutStart: () => dispatch(signoutStart()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

