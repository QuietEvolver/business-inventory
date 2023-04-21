import React from 'react';
import Header from './Header';
import NewItemForm from './NewItemForm';
import InventoryList from './InventoryList';
import { v4 } from 'uuid'; 
import ItemDetail from './ItemDetail';
import Modal from './Modal';
import Cart from './Cart';
import CartWidget from './CartWidget';

class InventoryControl extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      newItemFormShowing: false, 
      itemList: [
        {
          name: 'Brown Blonde',
          origin: 'Nicaragua',
          description: 'A sturdy light-bodied experience.',
          roast: 'light',
          price: '24',
          quantity: '130',
          id: v4(),
        },
        {
          name: 'Richie Brown',
          origin: 'Costa Rica',
          description: 'A luxurious full-bodied experience.',
          roast: 'medium',
          price: '125',
          quantity: '40',
          id: v4(),
        },
        {
          name: 'Dark & Lovely',
          origin: 'Dominican Republic',
          description: 'A one-size-fits-all solution to your darkest delights.',
          roast: 'Dark',
          price: '80',
          quantity: '120',
          id: v4(),
        },
      ],
      selectedItem: null,
      cartShowing: false,
      cartContents: []
    };
  }

  getItemById = (id, list = this.state.itemList) => {
    return list.filter(item => item.id === id)[0];
  };

  handleClickBackToList = () => {
    this.setState(() => ({
      selectedItem: null,
    }));
  }

  handleBuyItem = (id) => {
    const newItemList = [...this.state.itemList];
    const depletedItem = this.getItemById(id, newItemList);
    depletedItem.quantity = parseInt(depletedItem.quantity - 1);

    const newCartContents = [...this.state.cartContents];
    newCartContents.push(id);

    this.setState({
      itemList: newItemList,
    });
  }

  handleRestockItem = (id) => {
    const newItemList = [...this.state.itemList];
    const restockedItem = this.getItemById(id, newItemList);
    restockedItem.quantity = parseInt(restockedItem.quantity + 1);
    this.setState({
      itemList: newItemList,
    });
  }

  handleDeleteItem = (id) => {
    const newItemList = [...this.state.itemList];
    const doomedItem = this.getItemById(id, newItemList);
    newItemList.splice(newItemList.indexOf(doomedItem), 1);
    this.setState({
      itemList: newItemList,
      selectedItem: null,
    });
  }

  handleClickShowCart = () => {
    this.setState((prevState) => ({
      cartShowing: !prevState.cartShowing,
    }));
  };

  handleClickAddNewItem = () => {
    this.setState(() => ({
      newItemFormShowing: true,
    }));
  };

  handleCancelAddingNewItem = () => {
    this.setState(() => ({
      newItemFormShowing: false,
    }));
  };

  handleChangingSelectedItem = (id) => {
    const newSelectedItem = this.getItemById(id);
    this.setState({ selectedItem: newSelectedItem });
  };

  handleAddingNewItem = (newItem) => {
    const newItemList = [...this.state.itemList];
    newItemList.push(newItem);
    this.setState({
      itemList: newItemList,
      newItemFormShowing: false,
    });
  }

  handleEditingItem = (newItem) => {
    console.log('handleEditingItem newItem', newItem)
    const newItemList = [...this.state.itemList];

    // delete old
    const doomedItem = this.getItemById(newItem.id, newItemList);
    newItemList.splice(newItemList.indexOf(doomedItem), 1);

    // add new with same ID
    newItemList.push(newItem);

    this.setState({
      itemList: newItemList,
    });
    this.forceUpdate();
  }

  getCartTotalPrice = () => {
    return 25;
  }

  render() { return (
    <React.Fragment>
      <Header buttonAreaComponent=
        {<CartWidget 
          buttonLabel={this.state.cartShowing ? 'Hide Cart' : 'View Cart'}
          itemCount={this.state.cartContents.length} 
          totalPrice={this.getCartTotalPrice()} 
          onClickShowCart={this.handleClickShowCart}
        />} 
      />
      <main className={this.state.newItemFormShowing ? 'veiled' : ''}>
        {
          this.state.selectedItem === null ?
            this.state.cartShowing === false ?
              <React.Fragment>
                <InventoryList
                  itemList={this.state.itemList} 
                  handleChangingSelectedItem={this.handleChangingSelectedItem} 
                />
                <button className={this.state.newItemFormShowing || 'green'} onClick={this.handleClickAddNewItem}>
                  Add new item
                </button>

                <Modal 
                    type='create'
                    showing={this.state.newItemFormShowing}
                    headerText={'Add new item'}
                    bodyComponent={<NewItemForm type='create' onClickAddItem={this.handleAddingNewItem} onCancelAddItem={this.handleCancelAddingNewItem} />}
                  />
                </React.Fragment>
                :
                <Cart contents={this.state.cartContents} />
            :
            <ItemDetail 
              item={this.state.selectedItem}
              onClickBackToList={this.handleClickBackToList}
              onClickBuy={this.handleBuyItem}
              onClickRestock={this.handleRestockItem}
              onClickDelete={this.handleDeleteItem}
              onClickEdit={this.handleEditingItem}
              returnToList={this.handleClickBackToList}
            />
        }   
        </main>
      </React.Fragment>
    );
  }
}

export default InventoryControl;