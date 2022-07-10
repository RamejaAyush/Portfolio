import "../Styles/Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="left-links">
        <a href="#">About</a>
        <a href="#">Resume</a>
      </div>

      <div className="logo">
        <p>AXU</p>
      </div>

      <div className="right-links">
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
