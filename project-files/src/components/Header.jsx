import React from 'react';
import {NavLink} from 'react-router-dom';
import Login from './buttons/Login';
import SignUp from './buttons/SignUp';
import Cart from './buttons/Cart';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-2 text-light">
      <div className="container-fluid py-2">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLink className="navbar-brand" to="/"><img src= "/assets/home/logo.png" width ={150} height={25} /></NavLink>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-light" activeClassName= "active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/about">About</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/tryon">TryOn</NavLink>
              </li>
            </ul>
            <Login />
            <SignUp />
            <Cart />
          </div>
        </div>
      </nav>
  );
};

export default Header;
