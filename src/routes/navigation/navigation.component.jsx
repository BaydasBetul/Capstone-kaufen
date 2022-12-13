import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import {
  NavigationContainer,
  NavLinks,
  Navlink,
  LogoContainer,
  LogoKus,
} from "./navigation.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <LogoKus />
        </LogoContainer>
        <NavLinks>
          <Navlink to="/shop">SHOP</Navlink>
          {currentUser ? (
            <Navlink as="span" onClick={signOutUser}>
              SIGN OUT
            </Navlink>
          ) : (
            <Navlink to="/auth">SIGN IN</Navlink>
          )}
          <CardIcon />
        </NavLinks>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
      {/* Outlet - A component that renders the next match in a set of matches. */}
    </Fragment>
  );
};

export default Navigation;
