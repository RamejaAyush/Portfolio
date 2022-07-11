import "../Styles/Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <p>AXU</p>
      </div>
      <div className="nav-links">
        <a href="#">
          <span data-hover="About">About</span>
        </a>
        <a href="#">
          <span data-hover="Project">Projects</span>
        </a>
        <a href="#">
          <span data-hover="Designs">Designs</span>
        </a>
        <a href="#">
          <span data-hover="Contact">Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
