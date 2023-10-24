import "../styles/Navbar.css";

function CustomNavbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <h1>Jordan Adams</h1>
      </div>
      <div className="right">
        <h4>
          <a href="#Projects">Projects</a>
        </h4>
        <h4>
          <a href="#About">About me!</a>
        </h4>
        <h4>
          <a href="#Contact">Contact me!</a>
        </h4>
      </div>
    </nav>
  );
}

export default CustomNavbar;
