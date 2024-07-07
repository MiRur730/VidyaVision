
import './App.css'
import Navbar from "./Components/Navbar/index";
import Sectiontwo from './Components/part1/index';
import About from './Components/part3';
import Founder from './Components/About';
import Value from './Components/Values/Value';
import Contact from './Components/Contact/index';
import Team from './Components/Team/Team';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
// import Footer from './Components/Footer/Footer';
function App() {
  

  return (
    <div className='maincontainerofapp'>
    <RemoveScrollBar />
      <Navbar/> 
      <Sectiontwo/> 
       <Founder></Founder>
      <Team/>
      <About/> 
       <Value/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
