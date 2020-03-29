import {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart
} from "./cart.utils";

import CartActionTypes from "./cart.types";

const INITIAl_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAl_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;
