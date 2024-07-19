
import React from 'react';
import  { useEffect, useState } from "react";
import "./partone.css";

const Sectiontwo = React.forwardRef((props, ref) => {
  const [letterColors, setLetterColors] = useState([]);

  useEffect(() => {
    let intervalId;

    const changeStyle = () => {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setLetterColors(prevColors => {
        const newColors = [...prevColors];
        newColors.push(randomColor);
        return newColors;
      });
    };

    intervalId = setInterval(changeStyle, 400);

    return () => clearInterval(intervalId);
  }, []); // Run effect only once on component mount

  return (
    
    <div className="tophai" ref={ref}>
      <div className="sectiontwo">
        <p className="one">
          <span className="i" style={{ color: letterColors[0] }}>I</span>
          <span className="i" style={{ color: letterColors[1] }}>n</span>
          <span className="i" style={{ color: letterColors[2] }}>d</span>
          <span className="i" style={{ color: letterColors[3] }}>i</span>
          <span className="i" style={{ color: letterColors[4] }}>v</span>
          <span className="i" style={{ color: letterColors[5] }}>i</span>
          <span className="i" style={{ color: letterColors[6] }}>s</span>
          <span className="i" style={{ color: letterColors[7] }}>u</span>
          <span className="i" style={{ color: letterColors[8] }}>a</span>
          <span className="i" style={{ color: letterColors[9] }}>l</span>
          <span className="i" style={{ color: letterColors[10] }}>i</span>
          <span className="i" style={{ color: letterColors[11] }}>s</span>
          <span className="i" style={{ color: letterColors[12] }}>e</span>
          <span className="i" style={{ color: letterColors[13] }}>d</span>
        </p>

        <p className="two">Pathways</p>
        <p className="three">Students are empowered by dreams, and they are </p>
        <p className="four">equipped with skills to become life-long learners.</p>
      </div>
    </div>
  );
}
);

Sectiontwo.displayName = 'Sectiontwo';
export default Sectiontwo;

