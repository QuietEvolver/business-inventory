import React from 'react';
import Veil from './Veil';
import PropTypes from "prop-types";

function Modal(props) {
  return (
    <React.Fragment>
      <Veil showing={props.showing} />
      <div className={`modal${props.showing ? ' showing' : ''} ${props.type}`}>
        <h2>{props.headerText}</h2>
        {props.bodyComponent}
      </div>
    </React.Fragment>
  );
}

Modal.propTypes = {
  showing: PropTypes.bool,
  bodyComponent: PropTypes.object,
  headerText: PropTypes.string,
  type: PropTypes.string,
};

export default Modal;
