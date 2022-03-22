import React from 'react';

const Contact = () => {
  return (
  <div>
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1 className= "text-success fw-bold display-1">Have some Questions?</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md 5 d-flex justify-content-center">
          <img src="assets/home/contact.png" alt="contact" height="360px" width="460px" />
        </div>
        <div className="col-md-6">
          <form>
          <div className="mb-3">
              <label htmlFor="exampleForm" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleForm" placeholder="e.g. David Wick" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>

  </div>
  );
};

export default Contact;
