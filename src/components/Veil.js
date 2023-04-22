import React from 'react';
import PropTypes from "prop-types";

function Veil(props) {
  return (
    <div className={`veil${props.showing ? ' showing' : ''}`}>
      
    </div>
  );
}

Veil.propTypes = {
  showing: PropTypes.bool,
};

export default Veil;