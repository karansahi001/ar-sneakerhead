import React from 'react';
import Product from './Product';
import TryOn from './TryOn';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import { Why } from './Why';


const Home = () => {
  return (
    <>
       <div className="container-fluid py-4 bg-dark hero">
       <div className="row mx-2 py-5 justify-content-center align-items-center">
          <div className="text-center col-10 d-md-none">
            <h1 className="text-success display-1 mb-5">Sneaker<span className="fw-bold">Head</span></h1>
            <img className="img-fluid" src="/assets/icon/hero.png" alt="hero" width="100%" />
          </div>
          <div className="d-md-none text-center mt-5">
            <h3 className="lead text-light">
              See sneakers in <span className="text-success fw-bold">AR (Augmented Reality) </span> with your <br /> phone camera before, buying them
            </h3>
            <NavLink to="/tryon" className="btn btn-success text-white rounded-pill btn-lg px-5 mx-2 mx-5 my-4">Try AR</NavLink>
            <NavLink to="/products" className="btn btn-outline-success text-white rounded-pill btn-lg mx-5 px-5">Products</NavLink>
          </div>
          <div className="d-none d-md-block col-md-6 text-center text-md-start">
            <h1 className="text-success display-1 mb-3 ">Sneaker<span className="fw-bold">Head</span></h1>
            <h3 className="lead text-light">
              See sneakers in <span className="text-success fw-bold">AR (Augmented Reality) </span> with your <br /> phone camera before, buying them
            </h3>
            <NavLink to="/tryon" className="btn btn-success text-white rounded-pill btn-lg px-5 mx-2 my-5">Try AR</NavLink>
            <NavLink to="/products" className="btn btn-outline-success text-white rounded-pill btn-lg px-5">Products</NavLink>
          </div>
          <div className="col-md-5 d-none d-md-block">
            <img src="/assets/icon/hero.png" alt="hero" width="100%" />
          </div>
        </div>
       </div>
      <Why />
      <Product />
    </>
  );
};

export default Home;
