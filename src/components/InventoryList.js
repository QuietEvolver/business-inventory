import React from "react";
import InventoryListEntry from "./InventoryListEntry";
import PropTypes from "prop-types";

export default function InventoryList(props) {

}

InventoryList.PropTypes = {
  itemList: PropTypes.array,
  handleChangingSelectedItem: PropTypes.func,
}; 