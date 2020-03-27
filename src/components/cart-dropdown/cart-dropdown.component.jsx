import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'

class CartDropdown extends React.Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="cart-dropdown">
                <div className="cart-items">
                    {cartItems.map(item => <CartItem key={item.id} item={item} />)}
                </div>
                <div className="button">
                    <CustomButton >Go to checkout</CustomButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
})

export default connect(mapStateToProps)(CartDropdown);
