import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react';

import './index.scss';


const Contact = React.forwardRef((props, ref) => {
  
 

const email="vsptk20@gmail.com";

 



  return (
    <>
    <div className="contactsection" ref={ref}>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className='contactheading'>
            Contact Us
          </h1>
          <p style={{fontSize:'2rem'}}>Visit Us</p>
          <p>
          Feel free to visit us during our office hours to learn more about our school and programs.
          </p>

          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="flat-button">
            MESSAGE HERE
          </a>
        </div>
        {/* <div className="info-map">
          New Holy Heart Model School,
          <br />
          Gandhran Lahri
          <br />
          Near Chottepur
          <br />
          Sujanput <br />
          <br />Dist. Pathankot,Punjab
          
          <span>vsptk20@gmail.com</span>
        </div> */}
        {/* <div className="map-wrap">
        
    

          <MapContainer center={[32.2746, 75.6529]} zoom={13} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[32.2746, 75.6529]}>
              <Popup> Admission Open:)</Popup>
            </Marker>
          </MapContainer>
        </div>  */}
      </div> 
      
      </div>
      <div className='extra'>
      
      </div>
    </>
  )
});
Contact.displayName = 'Contact';
export default Contact