import React from "react";
import InventoryListEntry from "./InventoryListEntry";
import PropTypes from "prop-types";

function InventoryList(props) {
  return (
    <React.Fragment>
      <h2>Item List:</h2>
      <div className='item-list'>
        {props.itemList.map(item =>
          <InventoryListEntry
            onClickViewDetails={props.handleChangingSelectedItem}
            key={item.id}
            item={item}
          />
        )}
      </div>
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  itemList: PropTypes.array,
  handleChangingSelectedItem: PropTypes.func,
}; 

export default InventoryList;