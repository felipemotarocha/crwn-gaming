import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

class CartIcon extends React.Component {
    render() {
        const { toggleCartHidden, quantity } = this.props;
        return (
            <div className="cart-icon" onClick={toggleCartHidden}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{quantity}</span>
            </div>
        );
    }
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    quantity: cartItems.reduce(
        (acculumator, item) => acculumator + item.quantity,
        0
    )
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
