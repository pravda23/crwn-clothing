import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer } from "./navigation.styles";
import { NavLinks } from "./navigation.styles";
import { NavLink } from "./navigation.styles";
import { LogoContainer } from "./navigation.styles";

const Nav = () => {
  // declaring object with useContext allows access to other functionality (eg useState) when located in a different component
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <div>
            <CrwnLogo />
          </div>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            // "as" allows underlying element to be rendered as something other than the declared element type. In this case, "span" overrides the "Link" type set in the corresponding CSS file.
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      {/* The Outlet component alone allows nested routes to render their element content out and anything else the layout route is rendering, i.e. navbars, sidebars, specific layout components, etc. */}
    </Fragment>
  );
};

export default Nav;
