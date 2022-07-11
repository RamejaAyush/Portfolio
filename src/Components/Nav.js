import "../Styles/Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <p>AXU</p>
      </div>
      <div className="nav-links">
        <a href="#">
          <span data-hover="me :D">About</span>
        </a>
        <a href="#">
          <span data-hover="MyWork">Projects</span>
        </a>
        <a href="#">
          <span data-hover="& more">Designs</span>
        </a>
        <a href="#">
          <span data-hover="Contact">Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
