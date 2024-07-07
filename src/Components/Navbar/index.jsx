import "./navba.css";

const Navbar = () => {
  return (
    <>
    <div className="sectionone">

     <div className="upper-layer">
     
  <header>
   
    <ul>
      <li>
        <a href="#" className="active">
          Home
        </a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Team</a>
      </li>
    </ul>
  </header>
  <div className="content">
    <h2>Welcome</h2>
    <p>
      Ever since Glassmorphism entered the mainstream, it has been adopted by
      Microsoft and Windows and a host of others. Glassmorphism has gone on to
      become the go-to UI design. This article will show the concept of us
      Glassmorphism and a step-by-step illustration of how you can achieve this
      effect in a React application.
    </p>
    <a href="#">Read more</a>
  </div>
  
  <div className="logo">
<div className="imgi"></div>
</div>
</div>;

</div>
 
    </>
  );
}

export default Navbar;
