import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

class CartDropdown extends React.Component {
    render() {
        const { cartItems, history, dispatch } = this.props;
        return (
            <div className="cart-dropdown">
                {cartItems.length === 0 ? (
                    <span className="no-items">
                        There are no items in your cart yet.
                    </span>
                ) : (
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                )}
                <div className="button">
                    <CustomButton
                        onClick={() => {
                            dispatch(toggleCartHidden());
                            history.push("/checkout");
                        }}
                    >
                        Go to checkout
                    </CustomButton>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
