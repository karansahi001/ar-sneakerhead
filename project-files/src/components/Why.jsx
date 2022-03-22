import React from 'react'

export const Why = () => {
    return (
        <>
            <div className="container-fluid py-5  bg-light">
                <h1 className="text-success text-center display-2 pt-4 my-4">How to use AR feature?</h1>
                <hr className="bg-success" />
                <div className="row my-5 py-5 justify-content-center align-items-center">
                    <div className="col-md-6 text-center">
                        <iframe className="mt-5" src="https://app.vectary.com/viewer/v1/?model=2ed543a4-07f5-4588-837a-762b6f6d6cf5&amp;env=studio3" frameborder="0" width="100%" height="350"></iframe>
                    </div>
                    <div className="col-md-6">

                        <ul className="list-group ">
                            <li className="list-group-item d-flex justify-content-between bg-light my-2">
                                <div className="ms-2 me-auto">
                                <span className="badge bg-success rounded-pill">1</span>
                                    <div className="fw-bold text-success lead">Select "AR" icon from 3D Sneakers</div>
                                    A small "AR" icon is available at the top-right corner of every 3D model (appearing on the model before this also), click on it.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-light my-2">
                                <div className="ms-2 me-auto ">
                                <span className="badge bg-success rounded-pill">2</span>
                                    <div className="fw-bold text-success lead">Scan QR code </div>
                                    After clicking on "AR" icon you will see a QR code, scan it with your iPhone.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-light my-2">
                                <div className="ms-2 me-auto ">
                                <span className="badge bg-success rounded-pill">3</span>
                                    <div className="fw-bold text-success lead">Experience Sneakers in AR</div>
                                    Now point your iPhone's camera on a flat surface and see Sneakers in AR.
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="container">

            </div>
        </>
    )
}
