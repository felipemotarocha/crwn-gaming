export const addItemToCart = (state, itemToAdd) => {
    // Checking if the item is already in the cart
    const existingCartItem = state.find(item => item.id === itemToAdd.id);

    // Increasing the quantity if the item is already in the cart
    if (existingCartItem) {
        return state.map(item =>
            item.id === existingCartItem.id
                ? {
                      ...existingCartItem,
                      quantity: existingCartItem.quantity + 1
                  }
                : item
        );
    }

    // Adding the item to the cart with quantity property
    return [...state, { ...itemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (state, itemToClean) => {
    return state.filter(item => item.id !== itemToClean.id);
};

export const removeItemFromCart = (state, itemToRemove) => {
    const existingCartItem = state.find(item => item.id === itemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return state.filter(item => item.id !== itemToRemove.id);
    }

    return state.map(item =>
        item.id === itemToRemove.id
            ? { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
            : item
    );
};
