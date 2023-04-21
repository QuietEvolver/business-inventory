import React from "react";
import PropTypes from "prop-types";

function CartWidget(props) {
  return (
    <React.Fragment>
      <div className='cart-widget'>
        <div>Items in cart: <span>{props.itemCount}</span></div>
        <div>Total: <span>${props.totalPrice}</span></div>
        <button onClick={props.onClickShowCart} className='green'>{props.buttonLabel}</button>
      </div>
    </React.Fragment>
  );
}

CartWidget.propTypes = {
  buttonLabel: PropTypes.string,
  itemCount: PropTypes.number,
  totalPrice: PropTypes.number,
  onClickShowCart: PropTypes.func,
};

export default CartWidget;