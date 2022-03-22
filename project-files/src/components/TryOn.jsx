import React from 'react';
import DATA from '../Data';

function TryOn() {

  const model = (object) => {
    return (
    <div className="card my-5 py-4" key= {object.id} style={{width: '18rem'}}>
      <iframe src={object.ar} frameborder={0} width="100%" height={350}></iframe>
        <div className="card-body">
          <h5 className="card-title text-center">{object.title}</h5>
        </div>
      </div>
    );
  }

  return (
    <>
     <div>
            <div className="container-fluid py-5 bg-dark">
              <div className="row">
                <div className="col-12 text-center">
                  <h1 className="text-success display-1">Try in AR</h1>
                  <hr className="bg-light"/>
                  <h4 className="medium text-light mt-4">NOTE: </h4>
                  <p className="text-light">Click on <b>"AR"</b> button present at top right corner of every card, to view the shoe in AR. 
                    <br />(If you are on PC then it will show you a <b>QR code </b>which you can scan with your device camera to see shoe in AR)
                  </p>
                </div>
              </div>
            </div>
              <div className="container-fluid bg-dark">
                <div className="row justify-content-around mx-5">
                  {DATA.map(model)}
                </div>
              </div>
          </div>
    </>
  )
  }

export default TryOn;
