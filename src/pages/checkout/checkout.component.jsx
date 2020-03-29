import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";
import {
    selectCartItems,
    selectCartItemsTotal
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

export const Checkout = ({ cartItems, cartItemsTotal }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <span className="product">Product</span>
                <span className="price">Price</span>
                <span className="quantity">Quantity</span>
                <span className="remove">Remove</span>
            </div>
            {cartItems.length === 0 ? (
                <div className="no-cart-items">
                    <span>
                        Your cart is empty.
                        <br />
                        Try to add some product which you like.
                    </span>
                </div>
            ) : (
                <div className="checkout-items">
                    {cartItems.map(cartItem => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))}
                </div>
            )}
            {cartItems.length === 0 ? (
                ""
            ) : (
                <div className="total">
                    <span>TOTAL: ${cartItemsTotal}</span>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal
});

export default connect(mapStateToProps)(Checkout);
