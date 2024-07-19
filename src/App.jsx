
import './App.css'
import Navbar from "./Components/Navbar/index";
import Sectiontwo from './Components/part1/index';
import About from './Components/part3';
import Founder from './Components/About/About';
import Value from './Components/Values/Value';
import Contact from './Components/Contact/index';
import Team from './Components/Team/Team';
import { useRef } from 'react';
import Footer from './Components/Footer/Footer';
import TopNavbar from './Components/TopNavbar';

function App() {
  const sectionTwoRef = useRef(null);
const sectionThreeRef=useRef(null);
 
const sectionFourRef=useRef(null);
const sectionFiveRef=useRef(null);
  const scrollToSectionTwo = (event) => {
    event.preventDefault(); 
    
    if (sectionTwoRef.current) {
      sectionTwoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSectionThree = (event) => {
    event.preventDefault(); // Prevent default behavior of the anchor tag
    // Now, scroll to the desired section
    if (sectionThreeRef.current) {
      sectionThreeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToSectionFour = (event) => {
    event.preventDefault(); 
    if (sectionFourRef.current) {
      sectionFourRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToSectionFive = (event) => {
    event.preventDefault(); 
    if (sectionFiveRef.current) {
      sectionFiveRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='maincontainerofapp'>
  
      <TopNavbar scrollToSectionTwo={scrollToSectionTwo} scrollToSectionThree={scrollToSectionThree} 
     scrollToSectionFour={scrollToSectionFour} scrollToSectionFive={scrollToSectionFive}/>
     <Navbar/> 
       <Sectiontwo ref={sectionTwoRef}  /> 
     
       <Founder></Founder>
      <Team ref={sectionFourRef}/>
      <About ref={sectionFiveRef}/> 
       <Value/>
      <Contact ref={sectionThreeRef} />
      <Footer/>
    

    </div>
  )
}

export default App;



