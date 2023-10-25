import "../Navbar/Navbar.css";

function CustomNavbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <h1>Jordan Adams</h1>
      </div>
      <div className="right">
        <h5>
          <a href="#Home">Home Page!</a>
        </h5>
        <h5>
          <a href="#Projects">Projects</a>
        </h5>
        <h5>
          <a href="#Contact">Contact me!</a>
        </h5>
        <h5>
          <a href="#Resume">Resume!</a>
        </h5>
      </div>
    </nav>
  );
}

export default CustomNavbar;
