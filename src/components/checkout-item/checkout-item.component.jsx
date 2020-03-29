import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

import {
    addCartItem,
    clearCartItem,
    removeCartItem
} from "../../redux/cart/cart.actions";

export const CheckoutItem = ({
    cartItem,
    addCartItem,
    clearCartItem,
    removeCartItem
}) => {
    const { name, imgUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="product">
                <div className="image-container">
                    <img alt="item" src={imgUrl}></img>
                </div>
                <span className="name">{name}</span>
            </div>
            <span className="price">${price}</span>
            <div className="quantity">
                <span
                    className="arrow"
                    onClick={() => removeCartItem(cartItem)}
                >
                    &#10094;
                </span>
                <span className="number">{quantity}</span>
                <span className="arrow" onClick={() => addCartItem(cartItem)}>
                    &#10095;
                </span>
            </div>
            <span className="remove" onClick={() => clearCartItem(cartItem)}>
                &#10005;
            </span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item)),
    clearCartItem: item => dispatch(clearCartItem(item)),
    removeCartItem: item => dispatch(removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
