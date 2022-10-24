import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Logojpg } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
import { CardContext } from "../../contexts/card.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext); // , setCurrentUser
  // console.log(currentUser);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };
  const { isCartOpen } = useContext(CardContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logojpg className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CardIcon />
        </div>
        {isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
      {/* Outlet - A component that renders the next match in a set of matches. */}
    </Fragment>
  );
};

export default Navigation;
