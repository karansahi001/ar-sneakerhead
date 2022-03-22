import React from 'react';
import DATA from '../Data';
import {NavLink} from 'react-router-dom';


const Product = () => {
    
  const cardItem =(item) => {
    return (  
      <div className="card my-1 py-2" key= {item.id} style={{width: '18rem'}}>
            <NavLink to={`/products/${item.id}`} className="text-success" style={{textDecoration: "none"}}>
            <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body text-center">
              <h5 className="card-title">{item.title}</h5>
              <p className="lead" >${item.price}</p>
              <div className= "d-flex flex-column">
                <NavLink to={`/products/tryon/${item.id}`} className="btn btn-success m-2"><img src="/assets/icon/ar.png" alt="ar icon" className="m-1 me-2"height={20} width={20}/>View in AR</NavLink>
                <NavLink to={`/products/${item.id}`} className="btn btn-outline-success m-2 mx-auto">Buy Now</NavLink>
              </div>
            </div>
          </NavLink>
          </div>
    );
  }


  return (
        <>
          <div className="bg-dark py-5">
            <div className="container py-4 mt-4">
              <div className="row">
                <div className="col-12 text-center">
                  <h1 className= "text-success display-2 mb-4">Products</h1>
                  <hr className="bg-light" />
                </div>
              </div>
            </div>
              <div className="container">
                <div className="row justify-content-around gap-5">
                  {DATA.map(cardItem)}
                </div>
              </div>
          </div>
        </>
    );
};

export default Product;
