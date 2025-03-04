const Header = () => {
  return (
    <header className="header">
      <a className="main-nav-link" href="#">
        <p className="name-logo">NAME/LOGO</p>
      </a>
      <a href="#">
        <p>Toggle</p>
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
