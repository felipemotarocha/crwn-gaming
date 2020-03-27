const addItemToCart = (state, itemToAdd) => {
    // Checking if the item is already in the cart
    const cartItemIndex = state.findIndex(item => item.id === itemToAdd.id);

    // Increasing the quantity if the item is already in the cart
    if (cartItemIndex >= 0) {
        state[cartItemIndex].quantity = state[cartItemIndex].quantity + 1;
        return [...state];
    }

    // Adding the item to the cart with quantity property
    return [...state, { ...itemToAdd, quantity: 1 }];
};

export default addItemToCart;
