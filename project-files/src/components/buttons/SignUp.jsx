import React from 'react';

const SignUp = () => {
  return (
    <>
    {/* Button trigger modal */}
    <button type="button" className="btn btn-outline-success ms-2 text-light" data-bs-toggle="modal" data-bs-target="#signupModal">
       <span className="fa fa-user-plus me-1"> </span> Signup
    </button>
    {/* Modal */}
    <div className="modal fade" id="signupModal" tabIndex={-1} aria-labelledby="signupModal" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="signupModal">Register</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <button className="btn btn-success w-100 mb-4">
                        <span className="fa fa-google me-2">  Signup with Google</span>
                    </button>
                    <button className="btn btn-success w-100 mb-4">
                        <span className="fa fa-facebook me-2">  Signup with Facebook</span>
                    </button>
                    <form>
                        <div className= "mb-3">
                            <label htmlFor="exampleInput" className="form-label">Username</label>
                            <input type="text" className="form-control" id="exampleInput" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">I agree to T&amp;C</label>
                        </div>
                        <button type="submit" className="btn btn-outline-success w-100 mb-4 mt-5">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default SignUp;
