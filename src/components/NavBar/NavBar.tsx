import { useState } from "react";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={isActive ? "active" : ""}>
      <div className="container">
        <nav className="nav">
          <ul className="nav-list nav-list-mobile">
            <li className="nav-item">
              <div
                className={"mobile-menu"}
                onClick={() => setIsActive(!isActive)}
              >
                <span className="line line-top"></span>
                <span className="line line-bottom"></span>
              </div>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link nav-link-apple" />
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link-bag" />
            </li>
          </ul>
          <ul className="nav-list nav-list-larger">
            <li className="nav-item nav-item-hidden">
              <a href="/" className="nav-link nav-link-apple" />
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Mac
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                iPad
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                iPhone
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Watch
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                TV
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Music
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link-search" />
            </li>
            <li className="nav-item nav-item-hidden">
              <a href="#" className="nav-link nav-link-bag" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
