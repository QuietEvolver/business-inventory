import React from "react";
import PropTypes from "prop-types";

function Cart(props) {
  return (
    <React.Fragment>
      <h2>Cart</h2>
      {console.log("Cart props", props)};
      <div>
        {props.contents.map(item => 
          <div>
            <div className="form-row">id: {item}</div>
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
