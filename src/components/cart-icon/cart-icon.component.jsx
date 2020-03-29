import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

class CartIcon extends React.Component {
    render() {
        const { toggleCartHidden, itemsCount } = this.props;
        return (
            <div className="cart-icon" onClick={toggleCartHidden}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{itemsCount}</span>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
