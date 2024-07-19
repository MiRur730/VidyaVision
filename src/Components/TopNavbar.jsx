import "./Tonavbar.css";
import PropTypes from 'prop-types';

const TopNavbar = ({scrollToSectionThree,scrollToSectionFour,scrollToSectionFive,}) => {
  return (
    <div>
<nav className="navbar">
<ul className="nav-links">
<div className="nav-links-left">
<li>
        <a href="#" className="">
          Home
        </a>
      </li>
      <li>
        <a href="#contact" onClick={scrollToSectionThree} >Contact</a>
      </li>
</div>
     <div className="nav-links-right">
     <li>
        <a href="#about" onClick={scrollToSectionFive}> About</a>
      </li>
      <li>
        <a href="#team" onClick={scrollToSectionFour}>Team</a>
      </li>
     </div>
     
    </ul>

      <div className="logoinnav">
       
      </div>
</nav>
       
     </div>
  );
}
TopNavbar.propTypes = {
  scrollToSectionTwo: PropTypes.func.isRequired,
  scrollToSectionThree: PropTypes.func.isRequired,
  scrollToSectionFour: PropTypes.func.isRequired,
  scrollToSectionFive: PropTypes.func.isRequired,
};
export default TopNavbar;
