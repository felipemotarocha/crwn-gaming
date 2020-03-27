import React from "react";
import { connect } from 'react-redux';

import "./collection-item.styles.scss";
import { addCartItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item, addCartItem }) => (

    <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${item.imgUrl})` }}>
            <div className="button">
                <CustomButton onClick={() => addCartItem(item)}>Add to cart</CustomButton>
            </div>
        </div>
        <div className="content">
            <span className="title">{item.name}</span>
            <span className="price">${item.price}</span>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
