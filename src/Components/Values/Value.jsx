
import Accordions from './Accordion';
import "./value.css";
import {useState,useEffect} from "react";
const Value = () => {
  const [valimgname ,setname]=useState(0);
  const images = [
    'image1.webp',
    'image2.webp',
    'image3.webp',
    
  ];
    useEffect(() => {
      const interval = setInterval(() => {
        setname(prevIndex => (prevIndex + 1) % images.length);
      }, 2000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="tovalue">
    <div className='valueheading'>
    <p className="valuetwo">Core Values</p>
      <div className='value'>
        <Accordions/>
        <img className='valueimg' src={images[valimgname]} alt="" />
      </div>
    </div>
    </div>
  );
}

export default Value;
