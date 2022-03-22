import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <h1 className="text-success fw-bold mb-4 display-1"> About Us</h1>
            <p className="lead mb-4">Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Nulla libero
              natus optio, quod eveniet molestias reprehenderit,
              repellendus, veniam possimus saepe qui iste iusto
              consequuntur adipisci fugit suscipit vitae dolorum. Sed?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nulla libero natus optio, quod eveniet molestias reprehenderit,
              repellendus, veniam possimus saepe qui iste iusto
              consequuntur adipisci fugit suscipit vitae dolorum. Sed?
            </p>
            <NavLink to="/contact" className="btn btn-success mt-2">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6">
            <img src="/assets/home/img3.jpeg" alt="about" width="100%"/>
          </div>
        </div>
      </div>


    </>

  );
};

export default About;
