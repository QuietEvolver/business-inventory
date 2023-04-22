import React from "react";
import PropTypes from "prop-types";
// import logoImg from "./../img/logo.svg"
// import ch from "./../img/ch.png";


function Header(props) {
  return (
    <header>
      <h1>Ye Olde Coffee Shoppe</h1>
      <div className='header-button-area'>
        {props.buttonAreaComponent}
        
        {/* <img 
        className="header-tomato" 
        src={logoImg} 
        src={ch} 
        alt="A farmers mkt logo for the image files" /> */}

      </div>
    </header>
  );
}

Header.propTypes = {
  buttonAreaComponent: PropTypes.object,
};

export default Header;