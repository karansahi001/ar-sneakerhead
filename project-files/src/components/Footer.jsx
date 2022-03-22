import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return( 
    
    <footer className="page-footer bg-dark pt-5">
    <div className="bg-dark">
      <div className="container">
        <div className="row py-2 d-flex align-items-center">
          <hr className="bg-light my-5" />
          <div className="col-md-12 text-center"> 
            <a href="#"><i className="fab fa-facebook-f text-light me-4"> </i></a>         
            <a href="#"><i className="fab fa-twitter text-light me-4"> </i></a>
            <a href="#"><i className="fab fa-google-plus-g text-light me-4"> </i></a>
            <a href="#"><i className="fab fa-linkedin-in text-light me-4"> </i></a>
            <a href="#"><i className="fab fa-instagram text-light me-4"> </i></a> 
          </div>
        </div>
      </div>
    </div>
    <div className="container text-center text-md-left mt-5">
      <div className="row">
        <div className="col-md-2 mx-auto mb-4 text-start">
          <h6 className="text-success display-6">Tech</h6>
          <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '85px', height: '2px'}} />
          <ul className="list-group text-light">
            <li className="my-2">Html, CSS</li>        
            <li className="my-2">Bootstrap</li>
            <li className="my-2">JavaScript</li>         
            <li className="my-2">REACTjs</li>
          </ul>
        </div>
        <div className="col-md-2 mx-auto mb-4 text-start">
          <h6 className="text-success display-6">Useful links</h6>
          <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '110px', height: '2px'}} />
          <ul className="list-group text-light" style={{}}>       
            <li className="my-2">About</li>
            <li className="my-2">Services</li>
            <li className="my-2">Contact</li>         
          </ul>
        </div>
        <div className="col-md-3 mx-auto mb-4 text-start">
          <h6 className="text-success display-6">Contact</h6>
          <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '75px', height: '2px'}} />
          <ul className="list-group text-light text-start">
            <li className="my-2"><i className="fas fa-home mr-3" /> Sneaker St., Toronto, ON, Canada</li>
            <li className="my-2"><i className="fas fa-envelope mr-3" />contact@sneakerhead.com</li>
            <li className="my-2"><i className="fas fa-phone mr-3" /> + 437-225-(5318)</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-3">
      <p>© Copyright
        SneakerHeaad</p>
    </div>
  </footer>
    );
};

export default Footer;