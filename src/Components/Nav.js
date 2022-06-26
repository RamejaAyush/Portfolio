import "../Styles/Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <p>AXU</p>
      </div>
      <div className="nav-links">
        <div className="link">
          <a href="#" data-content="HOME">
            HOME
          </a>
        </div>
        <div className="link">
          <a href="#" data-content="PROJECTS">
            PROJECTS
          </a>
        </div>
        <div className="link">
          <a href="#" data-content="DESIGNS">
            DESIGNS
          </a>
        </div>
        <div className="link">
          <a href="#" data-content="CONTACT">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
