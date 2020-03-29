import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./navbar.styles.css";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

class Navbar extends React.Component {
    render() {
        const { currentUser, hidden } = this.props;
        return (
            <div>
                <nav id="navbar">
                    <div id="navbar-container">
                        <Link to="/">
                            <div className="logo">
                                <i className="fas fa-gamepad fa-2x"></i>
                                <h1>crwn-gaming</h1>
                            </div>
                        </Link>
                        <ul>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/shop">
                                <li>Shop</li>
                            </Link>
                            {currentUser ? (
                                <li
                                    style={{ cursor: "pointer" }}
                                    onClick={() => auth.signOut()}
                                >
                                    Sign Out
                                </li>
                            ) : (
                                <Link to="/sign">
                                    <li>Sign In</li>
                                </Link>
                            )}
                            <CartIcon />
                        </ul>
                    </div>
                </nav>
                {hidden ? "" : <CartDropdown />}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navbar);
