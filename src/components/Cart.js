import React from "react";
import PropTypes from "prop-types";

function Cart(props) {
  return (
    <React.Fragment>
      <h2>Cart</h2>
      <div className='item-list'>
        {props.contents.map(item =>
          <div className='form-row'>
          <div>{item.name}</div>
          <div>${item.price}</div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

Cart.propTypes = {
  contents: PropTypes.array,
};

export default Cart;