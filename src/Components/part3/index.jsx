import "./part3.css";
import React from "react";
const About = React.forwardRef((props, ref) => {
  return (

   
  <div className="noverflow" ref={ref}>

<div className="section-3">
  <h1 className="section-heading">Balanced Growth</h1>

<div className="gallery">


  <a href="#" className="gallery-link" title="Order Now">
  <img src="img.jpeg"className="food-img" alt=""/>
<h3 className="food-name">BUILDING</h3>
<p className="food-description">A school building is more than bricks and mortar; its a foundation for dreams, a haven for growth, and a beacon of knowledge.</p>
   </a>


  <a href="#" className="gallery-link" title="Order Now">
  <img src="img2.jpeg" className="food-img" alt="" />
<h3 className="food-name">FACULTY</h3>
<p className="food-description">The faculty is the heart of our school, nurturing minds, inspiring dreams, and shaping the leaders of tomorrow.</p>

</a>
  <a href="#" className="gallery-link" title="Order Now">
  <img src="img3.jpeg"  style={{
            objectFit: 'contain'}} className="food-img" alt=""/>
<h3 className="food-name">FOUNDERS</h3>
<p className="food-description">Visionary leaders create legacies that inspire and empower future generations. Their dreams shape our reality</p>

   </a>


  <a href="#" className="gallery-link" title="Order Now">
  <img src="img4.jpeg"className="food-img" alt=""/>
<h3 className="food-name">CELEBRATION</h3>
<p className="food-description">Celebrating our school’s journey reminds us that together, we achieve greatness, inspire dreams, and build a brighter future. </p>

   </a>


  <a href="#" className="gallery-link" title="Order Now">
  <img src="img5.jpeg"className="food-img" alt=""/>
<h3 className="food-name">PRAYER</h3>
<p className="food-description">School prayer is a moment of unity, where hearts come together in gratitude, hope, and the shared pursuit of wisdom and compassion.</p>

   </a>

  <a href="#" className="gallery-link" title="Order Now">
  <img src="img6.jpeg" className="food-img" alt="" />
<h3 className="food-name">FUN-TIME</h3>
<p className="food-description">Fun is the spark that ignites creativity, fosters connection, and brings joy to the journey of learning and living. </p>

   </a>

</div>
</div>

</div>


  
  );
});
About.displayName = 'About';
export default About;
