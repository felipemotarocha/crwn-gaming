import addItemToCart from "./cart.utils";

const INITIAl_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAl_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_CART_HIDDEN":
            return {
                ...state,
                hidden: !state.hidden
            };
        case "ADD_CART_ITEM":
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;
