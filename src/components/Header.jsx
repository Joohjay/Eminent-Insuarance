import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header>
      <nav aria-label="Main navigation">
        <div className="logo">
          <NavLink to="/" className="logo-link" onClick={closeMenu}>
            <img src={`${import.meta.env.BASE_URL}logo.PNG`} alt="Eminent Insurance Solutions Logo" />
          </NavLink>
          <span>
            <strong>Eminent</strong> Insurance Solutions
          </span>
        </div>

        <button
          className="hamburger"
          id="hamburger"
          type="button"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <ul
          className={`nav-links ${menuOpen ? 'active' : ''}`}
          id="nav-links"
          role="menubar"
        >
          {navItems.map((item) => (
            <li key={item.path} role="none">
              <NavLink
                to={item.path}
                onClick={closeMenu}
                role="menuitem"
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
