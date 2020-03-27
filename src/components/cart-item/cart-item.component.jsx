import React from 'react';

import './cart-item.styles.scss';


const CartItem = ({ item }) => (
    <div className="cart-item">
        <div className="item-image" style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
        <div className="item-content">
            <span className="title">{item.name}</span>
            <span className="price">${item.price}</span>
        </div>
    </div>
)

export default CartItem;
