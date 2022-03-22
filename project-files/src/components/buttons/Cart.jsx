import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Cart = () => {

  const state = useSelector((state) => state.addItem)
  return (
      <>
        <NavLink to="/cart" className="btn btn-outline-success ms-2 text-light">
          <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
        </NavLink>
      
      </>
    );
};

export default Cart;
