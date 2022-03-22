import React from 'react';
import { useParams } from 'react-router-dom';
import DATA from '../Data';

function TryOnDetails() {

  const arid = useParams();
  const ardetail = DATA.filter(i => i.id == arid.id);
  const arproduct = ardetail[0];

  return (
    <>
      <h4 className="medium text-center mt-4">NOTE: </h4>
      <p className="text-center">Click on <b>"AR"</b> button present at top right corner of every card, to view the shoe in AR.
        <br />(If you are on PC then it will show you a <b>QR code </b>which you can scan with your device camera to see shoe in AR)
      </p>
      <h1 className="text-center text-success mt-5">{arproduct.title}</h1>
      <iframe className="mt-5" src={arproduct.ar} frameborder={0} width="100%" height={350}></iframe>
    </>
  )
}

export default TryOnDetails