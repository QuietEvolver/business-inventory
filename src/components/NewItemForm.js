import React from "react";
import { v4 } from "uuid";  
import PropTypes from "prop-types";
  

export default function NewItemForm(props) {

  function handleNewItemFormSubmission(e) {
    e.preventDefault();
    console.log("e.target", e.target);
    props.onClickAddItem({
      name: e.target.name.value,
      origin: e.target.origin.value,
      description: e.target.description.value,
      roast: e.target.roast.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      id: v4()
    });
  }

  function handleEditItemFormSubmission(e) {
    e.preventDefault();
    props.onClickAddItem({
      name: e.target.name.value || e.target.name.placeholder,
      origin: e.target.origin.value || e.target.origin.placeholder,
      description: e.target.description.value || e.target.description.placeholder,
      roast: e.target.roast.value || e.target.roast.placeholder,
      price: e.target.price.value || e.target.price.placeholder,
      quantity: e.target.quantity.value || e.target.quantity.placeholder,
      id: props.editingItem.id
    });
    props.returnToList();
  }
  
  return (
    <form onSubmit={props.type === 'create' ? handleNewItemFormSubmission : handleEditItemFormSubmission}>
      <div className="form-row">
        <label for="name">Item name</label>
        <input placeholder={props.editingItem && props.editingItem.name} name="name" type="text" />
      </div>
      <div className="form-row">
        <label for="origin">Origin</label>
        <input placeholder={props.editingItem && props.editingItem.origin} name="origin" type="text" />
      </div>
      <div className="form-row">
        <label for="description">Description</label>
        <textarea placeholder={props.editingItem && props.editingItem.description} name="description" type="text" />
      </div>
      <div className="form-row">
        <label for="roast">Roast</label>
        <input placeholder={props.editingItem && props.editingItem.roast} name="roast" type="text" />
      </div>
      <div className="form-row">
        <label for="price">Price</label>
        <input placeholder={props.editingItem && props.editingItem.price} name="price" type="number" />
      </div>
      <div className="form-row">
        <label for="quantity">Quantity</label>
        <input placeholder={props.editingItem && props.editingItem.quantity} name="quantity" type="number" />
      </div>
      <div className="form-row buttons">
        <button type="submit" className='green'>Save</button>
        <button onClick={props.onCancelAddItem} type='button'>Exit without saving</button>
      </div>
    </form>
  );
}

NewItemForm.propType = {
  onClickAddItem: PropTypes.func,
  onCancelAddItem: PropTypes.func,
  type: PropTypes.string,
  editingItem: PropTypes.object,
  returnToList: PropTypes.func,
}
