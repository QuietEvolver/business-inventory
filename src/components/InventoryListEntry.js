import PropTypes from "prop-types";

function InventoryListEntry(props) {

  return (
    <div className='item-list-entry'>
      <div>{props.item.name}</div>
      <div>Origin: {props.item.origin}</div>
      <div>{props.item.description}</div>
      <div>Roast: {props.item.roast}</div>
      <div>Price: ${props.item.price}</div>
      <div>Quantity: {props.item.quantity}</div>
      <div>{props.item.id}</div>
      <div className='button-area'>
        <button onClick={() => props.onClickViewDetails(props.item.id)}>View Details</button>
      </div>
    </div>
  );
}

InventoryListEntry.propTypes = {
  item: PropTypes.object,
  onClickViewDetails: PropTypes.func
};

export default InventoryListEntry;
